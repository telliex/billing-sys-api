/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-18 22:40:46
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
// import { database } from './config/database.config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    // CoreModule.forRoot(database()),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'billing-dev-db.c3zkaaiu8aye.us-west-2.rds.amazonaws.com',
      port: 3306,
      username: 'telliex.chiu',
      password: 'zA#L2xetEcMu!o3^',
      database: 'ecloud',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
      retryAttempts: 10,
      retryDelay: 3000,
    }),
    UserModule,
    MenuModule,
  ],
  controllers: [AppController, KeepaliveController],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InitMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    // .apply(NewsMiddleware)
    // .forRoutes({ path: 'news', method: RequestMethod.ALL });
  }
}
