// auth.service.ts

import { createHash } from 'crypto';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { isJWT } from 'class-validator';
import moment from 'moment';
import { Repository } from 'typeorm';

import { HeaderParamDto } from '../../restful/dto';
import {
    checkHeaders,
    resultError,
    resultSuccess,
    snakeCaseToCamelCase,
} from '../../restful/helpers';
// import { Role } from '../../role/entities/role.entity';
import { User } from '../../user/entities/user.entity';
// import { UserRoleMapping } from '../../user/entities/user.role.mapping.entity';
import { CamelTypeUserItem } from '../../user/interfaces/user.interface';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>, // @InjectRepository(BillMaster) // private readonly billMasterRepository: Repository<BillMaster>, // @InjectRepository(Role) // private roleRepository: Repository<Role>, // @InjectRepository(UserRoleMapping) // private userRoleMappingRepository: Repository<UserRoleMapping>,
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
        const user = String(headers['user-id']);

        const target = await this.userRepository.findOneBy({ id: user });
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
        const user = String(headers['user-id']);

        const target = await this.userRepository.findOneBy({ id: user });
        if (!target) {
            return null;
        }
        target.last_active_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));

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
        console.log('password:', password);
        console.log('hash:', hash);
        // return this.hashPassword(password) === hash;
        return password === hash;
    }

    async logout(headers: HeaderParamDto) {
        checkHeaders(headers);
        const user = String(headers['user-id']);

        // let result = this.jwtService.verify(token)
        // if (!result) return resultError('Invalid token');

        const target = await this.userService.findUserById(user);

        // const checkUser = target.id === result.id;
        // if (!checkUser) {
        //     return resultError('Invalid token!');
        // }

        target.token = '';
        target.last_active_time = null;
        await this.userRepository.save(target);
        return resultSuccess(undefined, { msg: 'Token has been destroyed' });
    }

    async findBillUserByUserEmail(email: string, hide: number): Promise<User | undefined> {
        // const hide = 'n';
        // return this.userRepository
        //     .createQueryBuilder('User')
        //     .where('email = :email', { email })
        //     .andWhere('hide = :hide', { hide }) // 添加 hide = 'n' 条件
        //     .getOne(); // 僅讀取，不會對 User 資料表進行寫入
        return this.userRepository.findOneBy({ email, hide });
    }

    async login(body: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        console.log('body:', body);
        // TODO modify web end
        const { password, username } = body;

        // get User email
        // username = user's email
        const foundBillUserByUserEmail = await this.findBillUserByUserEmail(username, 1);

        console.log('foundBillUserByUserEmail:', foundBillUserByUserEmail);
        if (!foundBillUserByUserEmail) {
            console.log('No Data. The user email or password is wrong!');
            return resultError(`The user email [${username}] does not exist!`);
        }

        // check password
        const checkPassword = this.validatePassword(password, foundBillUserByUserEmail.password);
        console.log('checkPassword:', checkPassword);
        if (!checkPassword) {
            return resultError('The user email or password is wrong!');
        }

        // get User info
        if (!isJWT(foundBillUserByUserEmail.api_token)) {
            console.log('The format is not jwt!!');
        }

        let userToken = '';
        const userId = foundBillUserByUserEmail.id;

        // new
        console.log('== new getting token');
        console.log('== user:', foundBillUserByUserEmail.display_name);
        console.log('== password:', foundBillUserByUserEmail.password);
        // userToken = await this.requestToken(userId, this.hashPassword(password));
        userToken = await this.requestToken(userId, foundBillUserByUserEmail.password);
        console.log('== userToken:', userToken);
        if (!userToken) {
            return resultError('Get Token failed.');
        }
        // }
        foundBillUserByUserEmail.api_token = userToken ? String(userToken) : '';
        await this.userRepository.save(foundBillUserByUserEmail);

        // const roleList = await this.userService.findUserRoleByUserId(userId);
        console.log(
            'login info:',
            JSON.stringify(await this.findUserWithRoles(foundBillUserByUserEmail.id)),
        );
        const roleList = await this.findUserWithRoles(foundBillUserByUserEmail.id);

        return resultSuccess({
            userId: foundBillUserByUserEmail.id,
            username: foundBillUserByUserEmail.display_name,
            avatar: foundBillUserByUserEmail.avatar,
            token: userToken,
            remark: foundBillUserByUserEmail.remark,
            roles:
                roleList && roleList.roles.length > 0
                    ? roleList.roles.map((item: any) => {
                          return {
                              roleName: item.role.role_name,
                              value: item.role.id,
                          };
                      })
                    : [],
        });
    }

    // merge table
    async findUserWithRoles(userId: string) {
        return this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles', 'userRole')
            .leftJoinAndSelect('userRole.role', 'role')
            .where('user.id = :userId', { userId })
            .andWhere('user.hide = :hideStatus', { hideStatus: 1 })
            .andWhere('role.hide = :hideStatus', { hideStatus: 1 })
            .getOne();
    }
}
