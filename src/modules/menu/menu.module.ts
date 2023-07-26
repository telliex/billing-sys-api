import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';

import { Menu } from './entities/menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
    imports: [TypeOrmModule.forFeature([Menu]), TypeOrmModule.forFeature([User])],
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
