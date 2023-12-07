import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { isNil } from 'lodash';
import moment from 'moment';
import { Like, Repository } from 'typeorm';

import { SettingProvider } from '@/config/setting.provider';
import { checkAndRenewToken } from '@/untils';

import { HeaderParamDto } from '../../restful/dto';

import {
    camelCaseToSnakeCase,
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
} from '../../restful/helpers';

import { UserDto } from '../dto';
import { User } from '../entities/user.entity';
import { CamelTypeUserItem } from '../interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly settingProvider: SettingProvider,
    ) {}

    async create(createDto: UserDto, headers: HeaderParamDto) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        const hashedPassword = await bcrypt.hash(createDto.password, 10);
        const newItem = Object.assign(
            this.userRepository.create(),
            camelCaseToSnakeCase(createDto),
        );
        const target = await this.userRepository.findOneBy({ id: userId });
        newItem.id = undefined;
        newItem.password = hashedPassword;
        newItem.add_master = target.display_name;
        // newItem.add_master_name = target.user_name;
        newItem.add_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
        newItem.change_master = target.display_name;
        // newItem.change_master_name = target.user_name;
        newItem.change_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
        const output: CamelTypeUserItem = snakeCaseToCamelCase(
            await this.userRepository.save(newItem),
        ) as unknown as CamelTypeUserItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async findAll(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        let output: any[] = await this.userRepository.find({
            where: {
                display_name: query.userName ? Like(`%${query.userName}%`) : null,
                status: query.status ? query.status : null,
                // dept: query.dept ? query.dept : null,
                // isRemoved: 0,
            },
            order: {
                display_name: 'ASC',
            },
        });
        output = output.map((item) => {
            const temp: any = snakeCaseToCamelCase(item);
            temp.changeTime ? offsetUtCTime(temp.changeTime, headers['time-zone']) : '';
            temp.addTime ? offsetUtCTime(temp.addTime, headers['time-zone']) : '';
            return temp;
        });
        return output;
    }

    async findOne(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        const target: any = await this.userRepository.findOneBy({ id: query.id });
        const output: any = snakeCaseToCamelCase(target);
        output.changeTime ? offsetUtCTime(output.changeTime, headers['time-zone']) : '';
        output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';

        return output;
    }

    // inner
    // async findUserByMGTId(MGTId: number) {
    //     const target = await this.userRepository.findOneBy({ mgt_number: MGTId });
    //     return target;
    // }

    // inner
    async findUserById(userId: string) {
        const target: any = await this.userRepository.findOneBy({ id: userId });
        return target;
    }

    // inner
    async comparePasswords(inputPassword: string, hashedPassword: string): Promise<boolean> {
        // 在這裡使用 bcrypt 或其他合適的方法來比對密碼是否相符
        // 這裡僅為示範，實際上應使用適當的哈希函數進行比對
        return inputPassword === hashedPassword;
    }

    async findOneIfExist(
        param: {
            userName: string;
            id: string;
        },
        headers: HeaderParamDto,
    ) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        let targetId = null;
        if (param.id) {
            targetId = await this.userRepository.findOneBy({ id: param.id });
        }

        const targetUserName = await this.userRepository.findOneBy({
            display_name: param.userName,
        });

        if (!targetUserName) {
            return false;
        }

        if (targetId && targetId.display_name === param.userName && targetUserName) {
            return false;
        }

        return true;
    }

    async update(id: string, updateDto: UserDto, headers: HeaderParamDto) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        const targetItem = await this.userRepository.findOneBy({ id });

        if (isNil(targetItem)) {
            throw new NotFoundException(`The user #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        // const target = await this.userRepository.findOneBy({ display_name: userId });

        updateItem.change_master = userId;
        updateItem.change_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));

        // when update user info if status is not 1, set roles_string to empty array
        if (updateItem.status !== 1) {
            // TODO
            // updateItem.roles_string = JSON.stringify([]);
        }

        const output = snakeCaseToCamelCase(
            await this.userRepository.save(updateItem),
        ) as CamelTypeUserItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        const targetItem = await this.userRepository.findOneBy({ id });
        if (!targetItem) {
            throw new NotFoundException(`The user #${id} is not found.`);
        }
        // TODO
        // targetItem.isRemoved = 1;
        targetItem.status = 0;
        // transform to camelCase
        const output: CamelTypeUserItem = snakeCaseToCamelCase(
            await this.userRepository.save(targetItem),
        ) as CamelTypeUserItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    // async checkAndRenewToken(lastActiveTime: Date, limitTime: number) {
    //     // get target user's last active time to compare with current time
    //     // ===========
    //     // const targetUser = await this.userRepository.findOneBy({ id: user });
    //     let compareTime = moment('2021-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss');
    //     if (lastActiveTime) {
    //         compareTime = moment(lastActiveTime, 'YYYY-MM-DD HH:mm:ss');
    //     }
    //     const idleDuration = moment(moment.utc().format('YYYY-MM-DD HH:mm:ss')).diff(
    //         moment(compareTime),
    //         'minutes',
    //     );

    //     // If idle duration exceeds 3 hours, log the user out
    //     if (idleDuration >= limitTime) {
    //         throw new ForbiddenException('Token expired');
    //         return null;
    //         // Perform logout action, e.g., clear session
    //     }
    //     // targetUser.last_active_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
    //     // await this.userRepository.save(targetUser);
    //     return new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
    // }
}
