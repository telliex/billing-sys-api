/* eslint-disable new-cap */
import { Get, Type, Post, Patch, Delete, SerializeOptions } from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { isNil } from 'lodash';

import { BaseController } from '../base.controller';

import { ALLOW_GUEST, CRUD_OPTIONS } from '../constants';

import { CurdItem, CurdOptions } from '../types';

/**
 * 控制器上的CRUD装饰器
 * @param options
 */
export const Crud =
    (options: CurdOptions) =>
    <T extends BaseController<any>>(Target: Type<T>) => {
        Reflect.defineMetadata(CRUD_OPTIONS, options, Target);

        const { id, enabled, dtos } = Reflect.getMetadata(CRUD_OPTIONS, Target) as CurdOptions;
        const methods: CurdItem[] = [];
        // 添加验证DTO类
        for (const value of enabled) {
            const item = (typeof value === 'string' ? { name: value } : value) as CurdItem;
            if (
                methods.map(({ name }) => name).includes(item.name) ||
                !isNil(Object.getOwnPropertyDescriptor(Target.prototype, item.name))
            )
                continue;
            methods.push(item);
        }
        // 添加方法及路径装饰器,序列化选项,是否允许匿名访问等metadata
        // 添加其它回调函数
        for (const { name, option = {} } of methods) {
            if (isNil(Object.getOwnPropertyDescriptor(Target.prototype, name))) {
                const descriptor = Object.getOwnPropertyDescriptor(BaseController.prototype, name);

                Object.defineProperty(Target.prototype, name, {
                    ...descriptor,
                    async value(...args: any[]) {
                        return descriptor.value.apply(this, args);
                    },
                });
            }

            const descriptor = Object.getOwnPropertyDescriptor(Target.prototype, name);

            // eslint-disable-next-line @typescript-eslint/naming-convention, unused-imports/no-unused-vars
            const [_, ...params] = Reflect.getMetadata('design:paramtypes', Target.prototype, name);

            if (name === 'store' && !isNil(dtos.store)) {
                Reflect.defineMetadata(
                    'design:paramtypes',
                    [dtos.store, ...params],
                    Target.prototype,
                    name,
                );
                ApiBody({ type: dtos.store })(Target, name, descriptor);
            } else if (name === 'update' && !isNil(dtos.update)) {
                Reflect.defineMetadata(
                    'design:paramtypes',
                    [dtos.update, ...params],
                    Target.prototype,
                    name,
                );
                ApiBody({ type: dtos.update })(Target, name, descriptor);
            } else if (name === 'list' && !isNil(dtos.list)) {
                Reflect.defineMetadata(
                    'design:paramtypes',
                    [dtos.list, ...params],
                    Target.prototype,
                    name,
                );
                ApiQuery({ type: dtos.list })(Target, name, descriptor);
            }

            if (option.allowGuest) {
                Reflect.defineMetadata(ALLOW_GUEST, true, Target.prototype, name);
            }

            let serialize = {};
            if (isNil(option.serialize)) {
                if (['detail', 'store', 'update', 'delete', 'restore'].includes(name)) {
                    serialize = { groups: [`${id}-detail`] };
                } else if (['list'].includes(name)) {
                    serialize = { groups: [`${id}-list`] };
                }
            } else if (option.serialize === 'noGroup') {
                serialize = {};
            }
            SerializeOptions(serialize)(Target, name, descriptor);
            switch (name) {
                case 'list':
                    Get()(Target, name, descriptor);
                    break;
                case 'detail':
                    Get(':item')(Target, name, descriptor);
                    break;
                case 'store':
                    Post()(Target, name, descriptor);
                    break;
                case 'update':
                    Patch()(Target, name, descriptor);
                    break;
                case 'delete':
                    Delete()(Target, name, descriptor);
                    break;
                default:
                    break;
            }
            if (!isNil(option.hook)) option.hook(Target, name);
        }

        // 对于不启用的方法返回404
        // const fixedProperties = ['constructor', 'service', 'setService'];
        // for (const key of Object.getOwnPropertyNames(BaseController.prototype)) {
        //     const isEnabled = options.enabled.find((v) =>
        //         typeof v === 'string' ? v === key : (v as any).name === key,
        //     );
        //     if (!isEnabled && !fixedProperties.includes(key)) {
        //         const descriptor = Object.getOwnPropertyDescriptor(Target.prototype, key);
        //         Object.defineProperty(Target.prototype, key, {
        //             ...descriptor,
        //             async value(...args: any[]) {
        //                 return new NotFoundException();
        //             },
        //         });
        //     }
        // }
        return Target;
    };
