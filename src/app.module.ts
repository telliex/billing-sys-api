/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-13 00:54:46
 */
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';

import { InitMiddleware } from './middleware/init.middleware';
import { KeepaliveController } from './keepalive/keepalive.controller';

@Module({
  imports: [UserModule, MenuModule],
  controllers: [AppController, KeepaliveController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InitMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    // .apply(NewsMiddleware)
    // .forRoutes({ path: 'news', method: RequestMethod.ALL });
  }
}
