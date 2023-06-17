/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-15 22:38:30
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-15 22:44:40
 */
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'config',
      useValue: {},
    },
  ],
  exports: [],
})
export class ConfigModule {}
