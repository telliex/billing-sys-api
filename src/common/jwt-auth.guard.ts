// jwt-auth.guard.ts

import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { isJWT } from 'class-validator';
import moment from 'moment';
import { Observable } from 'rxjs';

import { jwtConstants } from './constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(@Inject(JwtService) private readonly jwtService: JwtService) {
        super();
    }

    verifyToken(token: string, jwtStr: any): boolean {
        try {
            // 解析 JWT Token，並驗證是否過期
            const payload = this.jwtService.verify(token, jwtStr);

            const idleDuration = moment(moment.utc().format('YYYY-MM-DD HH:mm:ss')).diff(
                moment(payload.last_active_time),
                'minutes',
            );
            // If idle duration exceeds 3 hours, log the user out
            if (idleDuration >= 3 * 60) {
                return false;
                // Perform logout action, e.g., clear session
            }

            return true; // 驗證通過，JWT Token 過期
        } catch (error) {
            return false; // 驗證失敗，JWT Token 過期或無效
        }
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
            // try {
            const decodedToken = this.verifyToken(token, jwtConstants); // 使用 JwtService 驗證 JWT Token
            console.log('token verify result:', decodedToken);
            if (!decodedToken) {
                return false;
            }
            // package token again
            return true;

            // } catch (err) {
            //     // Token 驗證失敗，進行相應處理
            //     console.log('Token verification failed:', err);
            //     return false; // 返回 false 表示不允許請求繼續處理
            // }
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
