import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { isNil } from 'lodash';
import moment from 'moment';
import { Like, Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';

import {
    camelCaseToSnakeCase,
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
} from '../restful/helpers';

import { UserDto } from './dto';
import { User } from './entities/user.entity';
import { CamelTypeUserItem } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createDto: UserDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const hashedPassword = await bcrypt.hash(createDto.password, 10);
        const newItem = Object.assign(
            this.userRepository.create(),
            camelCaseToSnakeCase(createDto),
        );
        const user = Number(headers['user-id']);
        const target = await this.userRepository.findOneBy({ mgt_number: user });
        newItem.id = undefined;
        newItem.password = hashedPassword;
        newItem.add_master = user;
        newItem.add_master_name = target.user_name;
        newItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        newItem.change_master = user;
        newItem.change_master_name = target.user_name;
        newItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const output: CamelTypeUserItem = snakeCaseToCamelCase(
            await this.userRepository.save(newItem),
        ) as unknown as CamelTypeUserItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('output:', output);
        return output;
    }

    async findAll(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        let output: any[] = await this.userRepository.find({
            where: {
                user_name: query.userName ? Like(`%${query.userName}%`) : null,
                status: query.status ? query.status : null,
                dept: query.dept ? query.dept : null,
                isRemoved: 0,
            },
            order: {
                user_name: 'ASC',
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
        const target: any = await this.userRepository.findOneBy({ id: query.id });

        const output: any = snakeCaseToCamelCase(target);
        output.changeTime ? offsetUtCTime(output.changeTime, headers['time-zone']) : '';
        output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';

        return output;
    }

    // inner
    async findUserByMGTId(MGTId: number) {
        const target: any = await this.userRepository.findOneBy({ mgt_number: MGTId });
        return target;
    }

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
        console.log('param:', param);
        const targetId = await this.userRepository.findOneBy({ id: param.id });
        const targetUserName = await this.userRepository.findOneBy({ user_name: param.userName });
        console.log('targetId:', targetId);
        console.log('targetUserName:', targetUserName);
        if (targetId.user_name === param.userName && targetUserName) {
            return false;
        }
        if (!targetUserName) {
            return false;
        }
        return true;
    }

    async update(id: string, updateDto: UserDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const targetItem = await this.userRepository.findOneBy({ id });

        const user = Number(headers['user-id']);

        if (isNil(targetItem)) {
            throw new NotFoundException(`The user #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        const target = await this.userRepository.findOneBy({ mgt_number: user });

        updateItem.change_master = user;
        updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        updateItem.change_master_name = target.user_name;

        const output = snakeCaseToCamelCase(
            await this.userRepository.save(updateItem),
        ) as CamelTypeUserItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }

    async remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);

        const targetItem = await this.userRepository.findOneBy({ id });
        if (!targetItem) {
            throw new NotFoundException(`The user #${id} is not found.`);
        }
        targetItem.isRemoved = 1;
        targetItem.status = 0;
        // transform to camelCase
        const output: CamelTypeUserItem = snakeCaseToCamelCase(
            await this.userRepository.save(targetItem),
        ) as CamelTypeUserItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }
}
