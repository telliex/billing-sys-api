/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-15 22:38:30
 * @LastEditors: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 * @LastEditTime: 2023-06-24 00:53:44
 */
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
    providers: [
        {
            provide: 'config',
            useValue: {},
        },
    ],
    exports: [],
})
export class ConfigModule {}
