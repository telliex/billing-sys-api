// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { HeaderParamDto } from '../restful/dto';
import { checkHeaders, getRequestToken, resultError, resultSuccess } from '../restful/helpers';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async requestToken(mgtNumber: number, password: string): Promise<any> {
        return this.validateUser(mgtNumber, password);
    }

    async validateUser(mgtNumber: number, password: string): Promise<any> {
        const user = await this.userService.findUserByMGTId(mgtNumber);
        console.log('user9999999:', user);
        if (user && (await this.userService.comparePasswords(password, user.password))) {
            // 密碼驗證成功，生成 JWT
            const payload = { mgtNumber: user.mgt_number, sub: user.id };
            const accessToken = this.jwtService.sign(payload, { expiresIn: '3h' }); // 設定 JWT 的過期時間為 3 小時
            return { access_token: accessToken };
        }
        // 密碼驗證失敗，返回 null
        return null;
    }

    async validateUserFromJwt(payload: any): Promise<any> {
        // 在這裡您可以使用 payload 中的用戶資訊來查詢用戶或進行其他額外處理
        const user = await this.userService.findUserById(payload.sub);
        if (!user) {
            // 如果找不到用戶，可能該用戶已被刪除或無效，則回傳 null 表示驗證失敗
            return null;
        }
        // 驗證成功，回傳用戶資訊
        return user;
    }

    async logout(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        const token = getRequestToken(headers);
        if (!token) return resultError('Invalid token');
        const user = await this.userService.findUserByMGTId(query.mgtNumber);
        const checkUser = user.token === token;
        if (!checkUser) {
            return resultError('Invalid token!');
        }
        return resultSuccess(undefined, { msg: 'Token has been destroyed' });
    }

    async login(body: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        const { username, password, mgtNumber } = body;
        const target = await this.userService.findUserByMGTId(mgtNumber);

        if (!target) {
            return resultError(' MGT number does not exist！');
        }

        const checkUser = target.username === username && target.password === password;

        if (!checkUser) {
            return resultError('Incorrect account or password！');
        }

        return resultSuccess({
            email: target.email,
            userId: target.mgt_number,
            username: target.user_name,
            nickname: target.nickname,
            token: target.token,
            realName: target.real_name,
            remark: target.remark,
            roles: target.roles_string
                ? JSON.parse(target.roles_string).map((item: any) => item.label)
                : [],
        });
    }
}
