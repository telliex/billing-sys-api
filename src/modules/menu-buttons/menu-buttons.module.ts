import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';

import { MenuButtons } from './entities/menu-buttons.entity';
import { MenuButtonsController } from './menu-buttons.controller';
import { MenuButtonsService } from './menu-buttons.service';

@Module({
    imports: [TypeOrmModule.forFeature([MenuButtons]), TypeOrmModule.forFeature([User])],
    controllers: [MenuButtonsController],
    providers: [MenuButtonsService],
})
export class MenuButtonsModule {}
