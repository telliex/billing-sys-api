/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-09 10:34:13
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-11 16:29:21
 */
/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-09 10:34:13
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-10 10:54:34
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [UserModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
