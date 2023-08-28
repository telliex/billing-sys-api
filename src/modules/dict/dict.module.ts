import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';

import { DictController } from './dict.controller';
import { DictService } from './dict.service';
import { DictDetail } from './entities/dict.detail.entity';
import { Dict } from './entities/dict.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Dict]),
        TypeOrmModule.forFeature([DictDetail]),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [DictController],
    providers: [DictService],
})
export class DictModule {}
