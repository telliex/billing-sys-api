/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-11 16:27:49
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-13 06:08:46
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';

import { Menu } from '../entity/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
