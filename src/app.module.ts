/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-20 00:20:34
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-20 14:23:38
 */
/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-20 00:55:00
 */
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';

import { InitMiddleware } from './middleware/init.middleware';
import { KeepaliveController } from './keepalive/keepalive.controller';
// import { CoreModule } from './core/core.module';


import { TypeOrmModule } from '@nestjs/typeorm';
import { database } from './config';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'billing-dev-db.c3zkaaiu8aye.us-west-2.rds.amazonaws.com',
    //   port: 3306,
    //   username: 'telliex.chiu',
    //   password: 'zA#L2xetEcMu!o3^',
    //   database: 'ecloud',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: false,
    //   // synchronize: process.env.NODE_ENV!== 'production',
    //   autoLoadEntities: true,
    //   retryAttempts: 10,
    //   retryDelay: 3000,
    // }),
    CoreModule.forRoot(database()),
    UserModule,
    MenuModule,
  ],
  controllers: [AppController, KeepaliveController],
  providers: [],
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
