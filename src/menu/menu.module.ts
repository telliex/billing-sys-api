/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-11 16:27:49
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-15 21:22:10
 */
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Menu } from './entity/menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
    imports: [TypeOrmModule.forFeature([Menu])],
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
