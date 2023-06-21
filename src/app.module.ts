/*
 * @Author: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 * @Date: 2023-06-21 03:35:59
 * @LastEditors: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 * @LastEditTime: 2023-06-21 04:52:19
 * @FilePath: /test2-project/home/telliex-chiu/project/billing-sys-api/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { MenuModule } from './menu/menu.module';
import { InitMiddleware } from './middleware/init.middleware';
import { KeepaliveController } from './keepalive/keepalive.controller';

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