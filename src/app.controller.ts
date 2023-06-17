/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-09 10:34:13
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-15 21:28:08
 */
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHello() {
    return { message: 'This is CBMS / CRS API , Welcome!' };
  }
}
