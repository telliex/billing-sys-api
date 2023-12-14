import { Global, Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingProvider } from '@/config/setting.provider';

import { jwtConstants } from '../../common/constants';
import { JwtStrategy } from '../../common/jwt.strategy';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/services/user.service';

import { AuthController } from './controllers/auth.controller';

import { AuthService } from './services/auth.service';

@Global() // 設置為 Global module
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: jwtConstants.secret,
            // signOptions: { expiresIn: '3h' }, // 設定 JWT 的過期時間
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, JwtStrategy, SettingProvider],
    exports: [JwtModule],
})
export class AuthModule {}
// export class AuthModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(AuthMiddleware).forRoutes('*'); // 將 AuthMiddleware 應用於所有路由
//     }
// }
