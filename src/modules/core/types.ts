import { ModuleMetadata, PipeTransform, Type } from '@nestjs/common';
import { IAuthGuard } from '@nestjs/passport';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { QueueOptions as BullMQOptions } from 'bullmq';
import dayjs from 'dayjs';
import Email from 'email-templates';
import { RedisOptions as IoRedisOptions } from 'ioredis';
import { Attachment } from 'nodemailer/lib/mailer';
import { Ora } from 'ora';
import { CommandModule } from 'yargs';

import { Configure } from './configure';

/** ****************************** 基礎類型 **************************** */

/**
 * 基礎類型接口
 */
export type BaseType = boolean | number | string | undefined | null;
/**
 * 環境變量類型轉義函數接口
 */
export type ParseType<T extends BaseType = string> = (value: string) => T;
/**
 * 一個類的類型
 */
export type ClassType<T> = { new (...args: any[]): T };

/**
 * 類轉義為普通對象後的類型
 */
export type ClassToPlain<T> = { [key in keyof T]: T[key] };

/**
 * 空對象
 */
export type RecordNever = Record<never, never>;
/**
 * 獲取數組中元素的類型
 */
export type ArrayItem<A> = A extends readonly (infer T)[] ? T : never;

/**
 * 嵌套對象
 */
export type NestedRecord = Record<string, Record<string, any>>;

/**
 * 嵌套對象全部可選
 */
export type RePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] | undefined
        ? RePartial<U>[]
        : T[P] extends object | undefined
        ? T[P] extends ((...args: any[]) => any) | ClassType<T[P]> | undefined
            ? T[P]
            : RePartial<T[P]>
        : T[P];
};

/**
 * 嵌套對象全部必選
 */
export type ReRequired<T> = {
    [P in keyof T]-?: T[P] extends (infer U)[] | undefined
        ? ReRequired<U>[]
        : T[P] extends object | undefined
        ? T[P] extends ((...args: any[]) => any) | ClassType<T[P]> | undefined
            ? T[P]
            : ReRequired<T[P]>
        : T[P];
};

/** ****************************** 核心模塊 **************************** */

/**
 * core模塊參數選項
 */
export interface CoreOptions {
    /**
     * 配置類實例
     */
    configure: Configure;
}

/** ****************************** 應用  ***************************** */

/**
 * 應用配置
 */
export interface AppConfig {
    /**
     * 主機地址,默認為127.0.0.1
     */
    host?: string;
    /**
     * 監聽端口,默認5000
     */
    port?: number;
    /**
     * 是否開啓https,默認false
     */
    https?: boolean;
    /**
     * 控制枱打印的 url ,默認自動生成
     */
    url?: string;
    /**
     * 時區,默認 Asia/Taipei
     */
    timezone: string;
    /**
     * 語言,默認 zh-TW
     */
    locale: string;
    /**
     * 是否為服務器運行狀態(無法設置,通過指定SERVER環境變量使用,默認false)
     */
    server: boolean;

    api?: string;
}

/**
 * 用於傳入模塊構建器和命令等的參數
 */
export type AppParams = {
    /**
     * 配置服務實例
     */
    configure: Configure;
    /**
     * 應用實例
     */
    app?: NestFastifyApplication;
};

/**
 * 創建應用的選項參數
 */
export interface CreateOptions {
    /**
     * 應用構建器
     */
    builder: AppBuilder;
    /**
     * 初始配置集
     */
    configs: Record<string, any>;
    /**
     * 全局配置
     */
    globals?: {
        /**
         * 全局管道,默認為AppPipe,設置為null則不添加
         * @param params
         */
        pipe?: (params: AppParams) => PipeTransform<any> | null;
        /**
         * 全局攔截器,默認為AppInterceptor,設置為null則不添加
         */
        interceptor?: Type<any> | null;
        /**
         * 全局過濾器,默認AppFilter,設置為null則不添加
         */
        filter?: Type<any> | null;
        /**
         * 全局守衞
         */
        guard?: Type<IAuthGuard>;
    };
    /**
     * 是否啓用websockets服務
     */
    websockets?: boolean;
    /**
     * 配置服務的動態存儲選項
     */
    configure?: ConfigStorageOption;
    /**
     * 模塊列表
     * 一些核心模塊,比如DatabaseModule,RestfulMuodle,CoreModule等無需在此處添加
     * 他們會根據配置自動添加
     */
    modules?: ModuleItem[];
    /**
     * 為啓動模塊添加一些自定義的ModuleMetaData數據
     * @param params
     */
    meta?: (params: AppParams) => ModuleMetadata;
    /**
     * 在啓動模塊上添加一些命令
     */
    commands?: CommandCollection;
}

/**
 * 模塊類型
 */
export type ModuleItem = Type<any> | ModuleOption;

/**
 * 為模塊加一些額外的參數,可以在構造時獲取
 */
export type ModuleOption = { module: Type<any>; params?: Record<string, any> };

/**
 * 應用構建器
 */
export interface AppBuilder {
    (params: { configure: Configure; BootModule: Type<any> }): Promise<NestFastifyApplication>;
}

/**
 * 創建應用後返回的對象
 */
export interface CreatorData extends Required<AppParams> {
    modules: ModuleItem[];
    commands: CommandCollection;
}
/**
 * 應用創建函數
 */
export interface Creator {
    (): Promise<CreatorData>;
}

/**
 * 模塊構建器參數選項
 */
export type ModuleBuilderMeta = ModuleMetadata & {
    global?: boolean;
    commands?: CommandCollection;
};

/**
 * 模塊構建器
 */
export type ModuleMetaRegister<P extends Record<string, any>> = (
    configure: Configure,
    params: P,
) => ModuleBuilderMeta | Promise<ModuleBuilderMeta>;
/** ****************************** Redis及隊列 ***************************** */

/**
 * Redis配置,通過createConnectionOptions函數生成
 */
export type RedisConfig = RedisOption[];

/**
 * 自定義Redis配置
 */
export type RedisConfigOptions = IoRedisOptions | IoRedisOptions[];

/**
 * Redis連接配置項
 */
export type RedisOption = Omit<IoRedisOptions, 'name'> & { name: string };

/**
 * 隊列配置,通過createQueueOptions函數生成
 */
export type QueueConfig = BullMQOptions | Array<{ name: string } & BullMQOptions>;

/**
 * 自定義隊列配置
 */
export type QueueConfigOptions = QueueOption | Array<{ name: string } & QueueOption>;

/**
 * 隊列項配置
 */
export type QueueOption = Omit<BullMQOptions, 'connection'> & { redis?: string };

/** ****************************** 時間  ***************************** */

/**
 * getTime函數獲取時間的選項參數
 */
export interface TimeOptions {
    /**
     * 時間
     */
    date?: dayjs.ConfigType;
    /**
     * 輸出格式
     */
    format?: string;
    /**
     * 語言
     */
    locale?: string;
    /**
     * 是否嚴格模式
     */
    strict?: boolean;
    /**
     * 時區
     */
    zonetime?: string;
}

/** ****************************** 發信服務  ***************************** */

/**
 * 騰訊雲短信驅動配置
 */
export type SmsConfig<T extends NestedRecord = RecordNever> = {
    secretId: string;
    secretKey: string;
    sign: string;
    appid: string;
    region: string;
    endpoint?: string;
} & T;

/**
 * 發送接口參數
 */
export interface SmsSendParams {
    appid?: string;
    numbers: string[];
    template: string;
    sign?: string;
    endpoint?: string;
    vars?: Record<string, any>;
    ExtendCode?: string;
    SessionContext?: string;
    SenderId?: string;
}

/**
 * SMTP郵件發送配置
 */
export type SmtpConfig<T extends NestedRecord = RecordNever> = {
    host: string;
    user: string;
    password: string;
    /**
     * Email模板總路徑
     */
    resource: string;
    from?: string;
    /**
     * smtp端口,默認25(開啓後為443)
     */
    port?: number;
    /**
     * 是否開啓ssl
     */
    secure?: boolean;
} & T;

/**
 * Smtp發送接口配置
 */
export interface SmtpSendParams {
    // 模板名稱
    name?: string;
    // 發信地址
    from?: string;
    // 主題
    subject?: string;
    // 目標地址
    to: string | string[];
    // 回信地址
    reply?: string;
    // 是否加載html模板
    html?: boolean;
    // 是否加載text模板
    text?: boolean;
    // 模板變量
    vars?: Record<string, any>;
    // 是否預覽
    preview?: boolean | Email.PreviewEmailOpts;
    // 主題前綴
    subjectPrefix?: string;
    // 附件
    attachments?: Attachment[];
}

/** ****************************** 配置 ***************************** */

/**
 * 配置服務的yaml動態存儲選項
 */
export interface ConfigStorageOption {
    /**
     * 是否開啓動態存儲
     */
    storage?: boolean;
    /**
     * yaml文件路徑,默認為dist目錄外的config.yaml
     */
    yamlPath?: string;
}

/**
 * 配置註冊器函數
 */
export type ConfigureRegister<T extends Record<string, any>> = (
    configure: Configure,
) => T | Promise<T>;

/**
 * 配置構造器
 */
export interface ConfigureFactory<
    T extends Record<string, any>,
    C extends Record<string, any> = T,
> {
    /**
     * 配置註冊器
     */
    register: ConfigureRegister<Partial<T>>;
    /**
     * 默認配置註冊器
     */
    defaultRegister?: ConfigureRegister<T>;
    /**
     * 是否動態存儲
     */
    storage?: boolean;
    /**
     * 回調函數
     * @param configure 配置類服務實例
     * @param value 配置註冊器register執行後的返回值
     */
    hook?: (configure: Configure, value: T) => C | Promise<C>;
    /**
     * 深度合併時是否對數組採用追加模式,默認 false
     */
    append?: boolean;
}

/** ****************************** CLI及命令  ***************************** */

/**
 * 命令集合
 */
export type CommandCollection = Array<CommandItem<any, any>>;

/**
 * 命令構造器
 */
export type CommandItem<T = Record<string, any>, U = Record<string, any>> = (
    params: Required<AppParams>,
) => CommandModule<T, U>;

/**
 * 控制枱錯誤函數panic的選項參數
 */
export interface PanicOption {
    /**
     * 報錯消息
     */
    message: string;
    /**
     * ora對象
     */
    spinner?: Ora;
    /**
     * 拋出的異常信息
     */
    error?: any;
    /**
     * 是否退出進程
     */
    exit?: boolean;
}
