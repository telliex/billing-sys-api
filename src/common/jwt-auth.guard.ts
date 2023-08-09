// jwt-auth.guard.ts

import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { isJWT } from 'class-validator';
import { Observable } from 'rxjs';

import { jwtConstants } from './constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(@Inject(JwtService) private readonly jwtService: JwtService) {
        super();
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // 在這裡進行額外的 JWT Token 校驗邏輯
        // 例如，你可以檢查 token 是否過期，或者是否包含特定的權限等

        const request = context.switchToHttp().getRequest();
        console.log('Token process start ========================:');
        console.log('request:', request.headers);
        // const token = request.headers.authorization?.replace('Bearer', '').trim();
        const token = request.headers.authorization;
        console.log('enter guard part!!');
        console.log('token:', token);

        if (!isJWT(token)) {
            console.log('not jwt!!');
            return false;
        }

        if (token) {
            try {
                const decodedToken = this.jwtService.verify(token, jwtConstants); // 使用 JwtService 驗證 JWT Token
                console.log('token verify result:', decodedToken);
                const expirationDate = new Date(decodedToken.exp * 1000); // 將秒轉換為毫秒

                if (expirationDate <= new Date()) {
                    // Token 已過期，進行相應處理
                    console.log('Token has expired.');
                    return false; // 返回 false 表示不允許請求繼續處理
                }
            } catch (err) {
                // Token 驗證失敗，進行相應處理
                console.log('Token verification failed:', err);
                return false; // 返回 false 表示不允許請求繼續處理
            }
        }
        console.log('can activate!!');
        console.log('Token process end ========================:');
        return true;
    }

    isJWTFormat(str: string): boolean {
        const parts = str.split('.');
        return (
            parts.length === 3 && parts[0].length > 0 && parts[1].length > 0 && parts[2].length > 0
        );
    }
}
