import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuButtons } from '../menu-buttons/entities/menu-buttons.entity';
import { User } from '../user/entities/user.entity';

import { Menu } from './entities/menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Menu]),
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forFeature([MenuButtons]),
    ],
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
