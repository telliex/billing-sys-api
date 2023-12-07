// global.module.ts
import { Module } from '@nestjs/common';

import { SettingProvider } from './setting.provider';

@Module({
    providers: [SettingProvider],
    exports: [SettingProvider],
})
export class GlobalSettingModule {}
