import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthMiddleware } from '@/middleware/auth.middleware';


@Global() // 設置為 Global module
@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*'); // 將 AuthMiddleware 應用於所有路由
  }
}
