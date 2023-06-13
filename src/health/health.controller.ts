/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-13 00:32:54
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-13 00:38:10
 */
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return { status: 'ok' };
  }
}
