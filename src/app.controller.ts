/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-09 10:34:13
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-09 13:13:35
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
