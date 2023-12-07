// config.provider.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingProvider {
    public readonly logoutTime: number = 3 * 60;
}
