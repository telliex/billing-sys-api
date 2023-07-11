import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { database } from './config';
import { KeepaliveController } from './keepalive/keepalive.controller';
import { InitMiddleware } from './middleware/init.middleware';
import { DatabaseModule } from './modules/database/database.module';
import { MenuModule } from './modules/menu/menu.module';
import { RoleModule } from './modules/role/role.module';

@Module({
    imports: [
        // CoreModule.forRoot(database()),
        DatabaseModule.forRoot(database),
        MenuModule,
        RoleModule,
    ],
    controllers: [AppController, KeepaliveController],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(InitMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        // .apply(NewsMiddleware)
        // .forRoutes({ path: 'news', method: RequestMethod.ALL });
    }
}
