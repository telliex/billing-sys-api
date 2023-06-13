/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-13 00:53:59
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-13 00:54:26
 */
import { Controller, Get } from '@nestjs/common';

@Controller('keepalive')
export class KeepaliveController {
  @Get()
  keepalive() {
    return { status: 'ok' };
  }
}
