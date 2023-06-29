import { Type } from '@nestjs/common';
import { ExternalDocumentationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ClassTransformOptions } from 'class-transformer';

/**
 * CURD控制器方法列表
 */
export type CurdMethod = 'detail' | 'delete' | 'restore' | 'list' | 'store' | 'update';

/**
 * CRUD裝飾器的方法選項
 */
export interface CrudMethodOption {
    /**
     * 該方法是否允許匿名訪問
     */
    allowGuest?: boolean;
    /**
     * 序列化選項,如果為`noGroup`則不傳參數，否則根據`id`+方法匹配來傳參
     */
    serialize?: ClassTransformOptions | 'noGroup';
    hook?: (target: Type<any>, method: string) => void;
}
/**
 * 每個啓用方法的配置
 */
export interface CurdItem {
    name: CurdMethod;
    option?: CrudMethodOption;
}

/**
 * CRUD裝飾器選項
 */
export interface CurdOptions {
    id: string;
    // 需要啓用的方法
    enabled: Array<CurdMethod | CurdItem>;
    // 一些方法要使用到的自定義DTO
    dtos: {
        [key in 'list' | 'store' | 'update']?: Type<any>;
    };
}

/**
 * API配置
 */
export interface ApiConfig extends ApiDocSource {
    prefix?: {
        route?: string;
        doc?: string;
    };
    default: string;
    enabled: string[];
    versions: Record<string, VersionOption>;
}

/**
 * 版本配置
 */
export interface VersionOption extends ApiDocSource {
    routes?: RouteOption[];
}

/**
 * 路由配置
 */
export interface RouteOption {
    name: string;
    path: string;
    controllers: Type<any>[];
    children?: RouteOption[];
    doc?: ApiDocSource;
}

/**
 * swagger選項
 */
export interface SwaggerOption extends ApiDocSource {
    version: string;
    path: string;
    include: Type<any>[];
}

/**
 * API與swagger整合的選項
 */
export interface APIDocOption {
    default?: SwaggerOption;
    routes?: { [key: string]: SwaggerOption };
}

/**
 * 總配置,版本,路由中用於swagger的選項
 */
export interface ApiDocSource {
    title?: string;
    description?: string;
    auth?: boolean;
    tags?: (string | TagOption)[];
}

interface TagOption {
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
}
