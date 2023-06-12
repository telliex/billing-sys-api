/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-11 16:27:49
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-11 16:38:10
 */
import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';

@Module({
  imports: [],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
