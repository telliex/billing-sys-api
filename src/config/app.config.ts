import { defaultAppConfig } from '@/modules/core/constants';
import { AppConfig, ConfigureFactory } from '@/modules/core/types';

/**
 * 應用配置
 */
export const app: ConfigureFactory<AppConfig> = {
    register: (configure) => ({
        host: '127.0.0.1',
        port: 5000,
        // 默認時區
        timezone: 'Asia/Taipei',
        // 默認語言
        locale: 'zh-TW',
        url: configure.env('APP_URL', undefined),
    }),
    defaultRegister: defaultAppConfig,
};
