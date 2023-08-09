// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { isJWT } from 'class-validator';
import { Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';
import { checkHeaders, resultError, resultSuccess } from '../restful/helpers';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async requestToken(mgtNumber: number, password: string): Promise<any> {
        return this.validateUser(mgtNumber, password);
    }

    async validateUser(mgtNumber: number, password: string): Promise<any> {
        const user = await this.userService.findUserByMGTId(mgtNumber);
        if (!user) {
            return resultError(' MGT number does not exist！');
        }
        if (user && (await this.userService.comparePasswords(password, user.password))) {
            // 密碼驗證成功，生成 JWT
            const payload = { mgtNumber: user.mgt_number, sub: user.id };
            const accessToken = this.jwtService.sign(payload);
            // return { access_token: accessToken };'
            return accessToken;
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
        // TODO

        // 驗證成功，回傳用戶資訊
        return user;
    }

    async logout(headers: HeaderParamDto) {
        checkHeaders(headers);
        const user = Number(headers['user-id']);

        // let result = this.jwtService.verify(token)
        // if (!result) return resultError('Invalid token');

        const target = await this.userService.findUserByMGTId(user);

        // const checkUser = target.id === result.id;
        // if (!checkUser) {
        //     return resultError('Invalid token!');
        // }

        target.token = '';
        this.userRepository.save(target);
        return resultSuccess(undefined, { msg: 'Token has been destroyed' });
    }

    async login(body: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        console.log('body:', body);
        const { password, username } = body;

        // get User info
        const target = await this.userService.findUserByMGTId(username);
        // To check if user available
        if (!target) {
            return resultError('MGT number does not exist！');
        }

        if (!isJWT(target.token)) {
            console.log('not jwt!!');
        }

        let userToken = '';

        if (isJWT(target.token) && target.token) {
            // already has token
            console.log('already has token:');
            try {
                const decodedToken = this.jwtService.verify(target.token);
                const expirationDate = new Date(decodedToken.exp * 1000); // 將秒轉換為毫秒

                if (expirationDate <= new Date()) {
                    // Token 已過期，進行相應處理

                    console.log('Token has expired.');
                    target.token = '';
                    this.userRepository.save(target);
                    return resultError('Token has expired.'); // 返回 false 表示不允許請求繼續處理
                }
                console.log('now time:', new Date());
                console.log('expired time:', expirationDate);
                console.log('not yet expired');
                userToken = target.token;
            } catch (err) {
                // Token verification failed.
                target.token = '';
                this.userRepository.save(target);
                console.log('Token verification failed:', err);
                return resultError('Token verification failed.'); // 返回 false 表示不允許請求繼續處理
            }
        } else {
            // new
            console.log('new get token');
            userToken = await this.validateUser(username, password);
            console.log('userToken:', userToken);
            if (!userToken) {
                return resultError('Password verification failed.');
            }
        }

        target.token = userToken ? String(userToken) : '';
        this.userRepository.save(target);
        console.log('==========', target);
        return resultSuccess({
            email: target.email,
            userId: target.mgt_number,
            username: target.user_name,
            nickname: target.nickname,
            realName: target.real_name,
            avatar: target.avatar,
            token: userToken,
            password: target.password,
            system: target.system,
            company: target.company,
            homePath: target.home_path,
            remark: target.remark,
            roles: target.roles_string
                ? JSON.parse(target.roles_string).map((item: any) => {
                      return {
                          roleName: item.label,
                          value: item.roleValue,
                      };
                  })
                : [],
        });
    }
}
