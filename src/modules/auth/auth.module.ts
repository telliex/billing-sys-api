import { Global, Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { jwtConstants } from '../../common/constants';
import { JwtStrategy } from '../../common/jwt.strategy';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/services/user.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BillMaster } from './entities/bill.master.entity';

@Global() // 設置為 Global module
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forFeature([BillMaster]),
        JwtModule.register({
            secret: jwtConstants.secret,
            // signOptions: { expiresIn: '3h' }, // 設定 JWT 的過期時間
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, JwtStrategy],
    exports: [JwtModule],
})
export class AuthModule {}
// export class AuthModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(AuthMiddleware).forRoutes('*'); // 將 AuthMiddleware 應用於所有路由
//     }
// }
