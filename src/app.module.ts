import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { database } from './config';
import { KeepaliveController } from './keepalive/keepalive.controller';
import { InitMiddleware } from './middleware/init.middleware';
import { DatabaseModule } from './modules/database/database.module';
import { DepartmentModule } from './modules/department/department.module';
import { MenuModule } from './modules/menu/menu.module';
import { MenuButtonsModule } from './modules/menu-buttons/menu-buttons.module';
import { RoleModule } from './modules/role/role.module';
import { UserModule } from './modules/user/user.module';

import { JwtStrategy } from './common/jwt.strategy';

import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        // CoreModule.forRoot(database()),
        DatabaseModule.forRoot(database),
        MenuModule,
        RoleModule,
        UserModule,
        DepartmentModule,
        MenuButtonsModule,
    ],
    controllers: [AppController, KeepaliveController],
    providers: [JwtStrategy,AuthModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(InitMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        // .apply(NewsMiddleware)
        // .forRoutes({ path: 'news', method: RequestMethod.ALL });
    }
}
