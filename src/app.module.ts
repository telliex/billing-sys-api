import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { database } from './config';
import { KeepaliveController } from './keepalive/keepalive.controller';
import { MenuModule } from './menu/menu.module';
import { InitMiddleware } from './middleware/init.middleware';
import { DatabaseModule } from './modules/database/database.module';

// import { CoreModule } from './core/core.module';

@Module({
    imports: [
        // CoreModule.forRoot(database()),
        DatabaseModule.forRoot(database),
        MenuModule,
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
