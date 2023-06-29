/* eslint-disable func-names */
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { WsAdapter } from '@nestjs/platform-ws';
import { useContainer } from 'class-validator';
import { isNil } from 'lodash';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { RestfulFactory } from '../restful/factory';
import { ApiConfig } from '../restful/types';

import { Configure } from './configure';
import { panic } from './helpers';
import { createBootModule } from './helpers/app';

import { ConfigStorageOption, CreateOptions, CreatorData } from './types';
/**
 * 应用核心类
 * 用于构建应用和配置实例
 */
export class App {
    /**
     * 配置对象
     */
    protected static _configure: Configure;

    /**
     * 应用实例
     */
    protected static _app: NestFastifyApplication;

    static get configure() {
        return this._configure;
    }

    static get app() {
        return this._app;
    }

    /**
     * 构建配置实例
     * @param configs 初始配置,一般会传入./configs目录中的所有配置
     * @param option 动态配置存储选项,可以通过yaml来动态存储配置
     */
    static async buildConfigure(configs: Record<string, any>, option?: ConfigStorageOption) {
        const configure = new Configure();
        configure.init(option);
        for (const key in configs) {
            configure.add(key, configs[key]);
        }
        // 加一个配置app.server配置,根据环境变量SERVER来设置
        // 此配置用于区分是普通瞬时命令还是应用启动命令
        await configure.sync();
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _ = [] } = yargs(hideBin(process.argv)).argv as any;
        configure.set('app.server', !!(_.length <= 0 || _[0] === 'start'));
        let appUrl = configure.get('app.url', undefined);
        if (isNil(appUrl)) {
            const host = configure.get<string>('app.host');
            const port = configure.get<number>('app.port')!;
            const https = configure.get<boolean>('app.https');

            appUrl =
                configure.get<boolean>('app.url', undefined) ??
                `${https ? 'https' : 'http'}://${host!}:${port}`;

            configure.set('app.url', appUrl);
        }
        const routePrefix = configure.get('api.prefix.route', undefined);
        const apiUrl = routePrefix
            ? `${appUrl}${routePrefix.length > 0 ? `/${routePrefix}` : routePrefix}`
            : appUrl;
        configure.set('app.api', apiUrl);
        return configure;
    }

    /**
     * 创建一个应用
     * @param options 应用创建选项
     */
    static async create(options: CreateOptions): Promise<CreatorData> {
        const {
            builder,
            configs,
            configure,
            websockets,
            modules: defaultModules,
            commands = [],
        } = options;
        let modules = defaultModules ?? [];
        try {
            this._configure = await this.buildConfigure(configs, configure);
            const { BootModule, modules: realModules } = await createBootModule(
                { configure: this._configure },
                options,
            );
            modules = realModules;
            this._app = await builder({
                configure: this._configure,
                BootModule,
            });
            // 是否启用websockets服务
            if (websockets) this._app.useWebSocketAdapter(new WsAdapter(this._app));
            // 启用文件上传服务
            if (this._app.getHttpAdapter() instanceof FastifyAdapter) {
                // eslint-disable-next-line global-require
                this._app.register(require('@fastify/multipart'), {
                    attachFieldsToBody: true,
                });
                const fastifyInstance = this._app.getHttpAdapter().getInstance();
                fastifyInstance.addHook(
                    'onRequest',
                    (request: any, reply: any, done: (...args: any[]) => any) => {
                        reply.setHeader = function (key: string, value: any) {
                            return this.raw.setHeader(key, value);
                        };
                        reply.end = function () {
                            this.raw.end();
                        };
                        request.res = reply;
                        done();
                    },
                );
            }
            // 根据是否传入api配置来启用open api功能
            if (!isNil(this._configure.get<ApiConfig>('api', null))) {
                const restful = this._app.get(RestfulFactory);
                restful.factoryDocs(this._app);
            }
            // 允许使用关闭监听的狗子
            this._app.enableShutdownHooks();
            // 为class-validator添加容器以便在自定义约束中可以注入dataSource等依赖
            useContainer(this._app.select(BootModule), {
                fallbackOnErrors: true,
            });
            // 初始化应用
            if (this._app.getHttpAdapter() instanceof FastifyAdapter) {
                await this._app.init();
            }
        } catch (error) {
            panic({ message: 'Create app failed!', error });
        }

        return { configure: this._configure, app: this._app, modules, commands };
    }
}
