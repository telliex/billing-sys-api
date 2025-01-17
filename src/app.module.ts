import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { SettingProvider } from '@/config/setting.provider';

import { AppController } from './app.controller';
import { database } from './config';
import { GlobalSettingModule } from './config/setting.module';
import { KeepaliveController } from './keepalive/keepalive.controller';
import { InitMiddleware } from './middleware/init.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { DepartmentModule } from './modules/department/department.module';
import { DictModule } from './modules/dict/dict.module';
import { MenuModule } from './modules/menu/menu.module';
// import { MenuButtonsModule } from './modules/menu-buttons/menu-buttons.module';
import { RoleModule } from './modules/role/role.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        // CoreModule.forRoot(database()),
        DatabaseModule.forRoot(database),
        MenuModule,
        RoleModule,
        UserModule,
        DepartmentModule,
        // MenuButtonsModule,
        AuthModule,
        DictModule,
        GlobalSettingModule,
    ],
    controllers: [AppController, KeepaliveController],
    providers: [SettingProvider],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(InitMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        // .apply(NewsMiddleware)
        // .forRoutes({ path: 'news', method: RequestMethod.ALL });
    }
}
