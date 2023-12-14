import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingProvider } from '@/config/setting.provider';

import { User } from '../user/entities/user.entity';

import { DictController } from './controllers/dict.controller';
import { DictDetail } from './entities/dict.detail.entity';
import { Dict } from './entities/dict.entity';
import { DictService } from './services/dict.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Dict]),
        TypeOrmModule.forFeature([DictDetail]),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [DictController],
    providers: [DictService, SettingProvider],
})
export class DictModule {}
