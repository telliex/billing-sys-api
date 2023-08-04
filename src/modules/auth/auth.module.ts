import { Global, Module } from '@nestjs/common';

import { JwtModule, JwtService } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { jwtConstants } from '../../common/constants';
import { User } from '../user/entities/user.entity';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Global() // 設置為 Global module
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3h' }, // 設定 JWT 的過期時間
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtService],
    // exports: [AuthService],
})
export class AuthModule {}
// export class AuthModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(AuthMiddleware).forRoutes('*'); // 將 AuthMiddleware 應用於所有路由
//     }
// }
