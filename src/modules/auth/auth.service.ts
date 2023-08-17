// auth.service.ts

import { createHash } from 'crypto';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { isJWT } from 'class-validator';
import { Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';
import { checkHeaders, resultError, resultSuccess } from '../restful/helpers';
import { User } from '../user/entities/user.entity';

import { UserService } from '../user/user.service';

import { BillMaster } from './entities/bill.master.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(BillMaster)
        private readonly billMasterRepository: Repository<BillMaster>,
    ) {}

    async requestToken(mgtNumber: number, password: string): Promise<any> {
        const user = await this.userService.findUserByMGTId(mgtNumber);
        if (!user) {
            return null;
        }

        // 密碼驗證成功，生成 JWT
        const payload = { mgtNumber: user.mgt_number, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        // return { access_token: accessToken };'
        return accessToken;
    }

    verifyToken(token: string): boolean {
        try {
            // 解析 JWT Token，並驗證是否過期
            this.jwtService.verify(token);
            return true; // 驗證通過，JWT Token 過期
        } catch (error) {
            return false; // 驗證失敗，JWT Token 過期或無效
        }
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

    hashPassword(password: string): string {
        const hash = createHash('sha256');
        hash.update(password);
        return hash.digest('hex');
    }

    validatePassword(password: string, hash: string): boolean {
        return this.hashPassword(password) === hash;
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

    async findBillUserByUsername(username: string): Promise<BillMaster | undefined> {
        return this.billMasterRepository
            .createQueryBuilder('BillMaster')
            .where('keyname = :username', { username })
            .getOne(); // 僅讀取，不會對 User 資料表進行寫入
    }

    async login(body: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        console.log('body:', body);
        const { password, username } = body;

        // get User info from bill_master
        const findBillUserByUsername = await this.findBillUserByUsername(username);
        console.log('findBillUserByUsername:', findBillUserByUsername);
        const checkPassword = this.validatePassword(password, findBillUserByUsername.keypassword);
        if (!checkPassword) {
            return resultError('Password is wrong!');
        }

        // get User info
        const target = await this.userService.findUserByMGTId(findBillUserByUsername.id);
        // To check if user available
        if (!target) {
            return resultError('MGT number does not exist！');
        }
        target.password = findBillUserByUsername.keypassword;
        this.userRepository.save(target);
        console.log('target:', target);
        if (!isJWT(target.token)) {
            console.log('The format is not jwt!!');
        }

        let userToken = '';
        const mgtId = findBillUserByUsername.id;

        if (isJWT(target.token) && target.token) {
            // already has token
            const decodedToken = this.verifyToken(target.token);
            if (!decodedToken) {
                userToken = await this.requestToken(mgtId, password);
            } else {
                userToken = target.token;
            }
        } else {
            // new
            console.log('new getting token');
            userToken = await this.requestToken(mgtId, password);
            console.log('userToken:', userToken);
            if (!userToken) {
                return resultError('Get Token failed.');
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
            // password: target.password,
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
