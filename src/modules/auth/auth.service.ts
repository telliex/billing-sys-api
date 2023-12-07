// auth.service.ts

import { createHash } from 'crypto';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { isJWT } from 'class-validator';
import moment from 'moment';
import { Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';
import { checkHeaders, resultError, resultSuccess, snakeCaseToCamelCase } from '../restful/helpers';
import { User } from '../user/entities/user.entity';

import { CamelTypeUserItem } from '../user/interfaces/user.interface';
import { UserService } from '../user/services/user.service';

import { BillMaster } from './entities/bill.master.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>, // @InjectRepository(BillMaster) // private readonly billMasterRepository: Repository<BillMaster>,
    ) {}

    async requestToken(userId: string, password: string): Promise<any> {
        const user = await this.userService.findUserById(userId);
        if (!user) {
            return null;
        }

        // 密碼驗證成功，生成 JWT
        const payload = {
            userId: user.id,
            email: user.email,
            last_active_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        };
        const accessToken = this.jwtService.sign(payload);
        // return { access_token: accessToken };'
        return accessToken;
    }

    async checkFinalTime(headers: HeaderParamDto): Promise<any> {
        const user = Number(headers['user-id']);

        const target = await this.userRepository.findOneBy({ mgt_number: user });
        if (!target) {
            return null;
        }
        const output = snakeCaseToCamelCase(target) as CamelTypeUserItem;
        // // no need to transform
        // output.lastActiveTime = output.lastActiveTime
        //     ? offsetUtCTime(output.lastActiveTime, headers['time-zone'])
        //     : '';

        return [output];
    }

    async writeFinalTime(headers: HeaderParamDto): Promise<any> {
        const user = Number(headers['user-id']);

        const target = await this.userRepository.findOneBy({ mgt_number: user });
        if (!target) {
            return null;
        }
        target.last_active_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        const output = snakeCaseToCamelCase(
            await this.userRepository.save(target),
        ) as CamelTypeUserItem;
        // no need to transform
        // output.lastActiveTime = output.lastActiveTime
        //     ? offsetUtCTime(output.lastActiveTime, headers['time-zone'])
        //     : '';
        return [output];
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

    processNameString(orgString: string): {
        lastName: string;
        firstName: string;
    } {
        if (orgString.includes('@')) {
            const name = orgString.split('@')[0];
            if (name.includes('.')) {
                const nameArray = name.split('.');
                return {
                    lastName: nameArray[1].toLowerCase(),
                    firstName: nameArray[0].toLowerCase(),
                };
            }
            return {
                lastName: '',
                firstName: name.toLowerCase(),
            };
        }
        if (orgString.includes('.')) {
            const nameArray = orgString.split('.');
            if (nameArray.length === 2) {
                return {
                    lastName: nameArray[1].toLowerCase(),
                    firstName: nameArray[0].toLowerCase(),
                };
            }
            return {
                lastName: '',
                firstName: orgString.toLowerCase(),
            };
        }
        return {
            lastName: '',
            firstName: orgString.toLowerCase(),
        };
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
        // return this.hashPassword(password) === hash;
        return password === hash;
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
        target.last_active_time = null;
        await this.userRepository.save(target);
        return resultSuccess(undefined, { msg: 'Token has been destroyed' });
    }

    async findBillUserByUsername(username: string): Promise<BillMaster | undefined> {
        const hide = 'n';
        return this.billMasterRepository
            .createQueryBuilder('BillMaster')
            .where('keyname = :username', { username })
            .andWhere('hide = :hide', { hide }) // 添加 hide = 'n' 条件
            .getOne(); // 僅讀取，不會對 User 資料表進行寫入
    }

    async findBillUserById(userId: string): Promise<User | undefined> {
        const hide = 'n';
        return this.userRepository
            .createQueryBuilder('User')
            .where('id = :userId', { userId })
            .andWhere('hide = :hide', { hide }) // 添加 hide = 'n' 条件
            .getOne(); // 僅讀取，不會對 User 資料表進行寫入
    }

    async login(body: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        console.log('body:', body);
        const { password, username } = body;

        // get User info from bill_master
        const findBillUserByUsername = await this.findBillUserByUsername(username);

        console.log('findBillUserByUsername:', findBillUserByUsername);
        if (!findBillUserByUsername) {
            console.log('No Data. The username or password is wrong!');
            return resultError(`The username [${username}] does not exist!`);
        }
        // check password
        const checkPassword = this.validatePassword(password, findBillUserByUsername.keypassword);
        console.log('checkPassword:', checkPassword);
        if (!checkPassword) {
            return resultError('The username or password is wrong!');
        }

        // get User info
        const target = await this.userService.findUserByMGTId(findBillUserByUsername.id);
        const tempName = this.processNameString(findBillUserByUsername.keyname);
        let newTarget = null;
        // To check if user available
        if (!target) {
            newTarget = {
                mgt_number: findBillUserByUsername.id,
                user_name: `${tempName.firstName}.${tempName.lastName}`,
                real_name: `${tempName.firstName}.${tempName.lastName}`,
                nickname: findBillUserByUsername.name,
                keypassword: findBillUserByUsername.keypassword,
                keyname: findBillUserByUsername.keyname,
                password: findBillUserByUsername.keypassword,
                token: '',
                remark: '',
                roles: [],
                roles_string: '[]',
                dept: `e5d64b67-f525-4b7e-af40-a019fb39c9ba`,
                platform: `CRS`,
                company: `ECloudValley`,
                avatar: '',
                status: 1,
                last_active_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                add_master: 0,
                add_master_name: 'default.Wang',
                add_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                change_master: 0,
                change_master_name: 'default.Wang',
                change_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
            };
        } else {
            newTarget = {
                ...target,
                user_name: `${tempName.firstName}.${tempName.lastName}`,
                real_name: `${tempName.firstName}.${tempName.lastName}`,
                nickname: findBillUserByUsername.name,
                keypassword: findBillUserByUsername.keypassword,
                keyname: findBillUserByUsername.keyname,
                password: findBillUserByUsername.keypassword,
                last_active_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                add_master: 0,
                add_master_name: 'default.Wang',
                add_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                change_master: 0,
                change_master_name: 'default.Wang',
                change_time: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
            };
        }
        newTarget.password = findBillUserByUsername.keypassword;
        await this.userRepository.save(newTarget);

        if (!isJWT(newTarget.token)) {
            console.log('The format is not jwt!!');
        }

        let userToken = '';
        const mgtId = findBillUserByUsername.id;

        // if (isJWT(newTarget.token) && newTarget.token) {
        //     // already has token
        //     console.log('here already have token:', newTarget.token);
        //     const decodedToken = this.verifyToken(newTarget.token);
        //     if (!decodedToken) {
        //         userToken = await this.requestToken(mgtId, findBillUserByUsername.keypassword);
        //     } else {
        //         userToken = newTarget.token;
        //     }
        // } else {
        // new
        console.log('new getting token');
        console.log('mgtId:', mgtId);
        console.log('password:', findBillUserByUsername.keypassword);
        // userToken = await this.requestToken(mgtId, this.hashPassword(password));
        userToken = await this.requestToken(mgtId, findBillUserByUsername.keypassword);
        console.log('userToken:', userToken);
        if (!userToken) {
            return resultError('Get Token failed.');
        }
        // }
        newTarget.token = userToken ? String(userToken) : '';
        await this.userRepository.save(newTarget);
        return resultSuccess({
            userId: newTarget.mgt_number,
            username: newTarget.user_name,
            nickname: newTarget.nickname,
            realName: newTarget.real_name,
            avatar: newTarget.avatar,
            token: userToken,
            // password: newTarget.password,
            platform: newTarget.platform,
            company: newTarget.company,
            homePath: newTarget.home_path,
            remark: newTarget.remark,
            roles: newTarget.roles_string
                ? JSON.parse(newTarget.roles_string).map((item: any) => {
                      return {
                          roleName: item.label,
                          value: item.roleValue,
                      };
                  })
                : [],
        });
    }
}
