import { AppConfig } from './types';

/**
 * 運行環境
 */
export enum EnvironmentType {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
    PREVIEW = 'preview',
}

export const MODULE_BUILDER_REGISTER = 'module_builder_register';

/**
 * DTOValidation裝飾器選項
 */
export const DTO_VALIDATION_OPTIONS = 'dto_validation_options';

/**
 * 默認應用配置
 */
export const defaultAppConfig = (): AppConfig => ({
    host: 'localhost',
    port: 5000,
    https: false,
    timezone: 'Asia/Taipei',
    locale: 'zh-TW',
    server: false,
});
