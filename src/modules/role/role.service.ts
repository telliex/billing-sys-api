import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import moment from 'moment';
import { Repository, Like } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';

import {
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
    camelCaseToSnakeCase,
} from '../restful/helpers';
import { User } from '../user/entities/user.entity';

import { RoleDto } from './dto/role.dto';
import { Role } from './entities/role.entity';
import { CamelTypeRoleItem } from './interfaces/role.interface';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createDto: RoleDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const newItem = Object.assign(
            this.roleRepository.create(),
            camelCaseToSnakeCase(createDto),
        );
        const user = Number(headers['user-id']);
        const target = await this.userRepository.findOneBy({ mgt_number: user });
        newItem.id = undefined;
        newItem.add_master = user;
        newItem.add_master_name = target.user_name;
        newItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        newItem.change_master = user;
        newItem.change_master_name = target.user_name;
        newItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const output: CamelTypeRoleItem = snakeCaseToCamelCase(
            await this.roleRepository.save(newItem),
        ) as unknown as CamelTypeRoleItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('output:', output);
        return [output];
    }

    async findAll(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        let output: any[] = await this.roleRepository.find({
            where: {
                role_name: query.roleName ? Like(`%${query.roleName}%`) : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
                role_name: 'ASC',
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

    findOne(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);
        return `This action returns a #${id} role`;
    }

    async update(id: string, updateDto: RoleDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const targetItem = await this.roleRepository.findOneBy({ id });

        const user = Number(headers['user-id']);
        if (isNil(targetItem)) {
            throw new NotFoundException(`The role #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        const target = await this.userRepository.findOneBy({ mgt_number: user });

        updateItem.change_master = user;
        updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        updateItem.change_master_name = target.user_name;
        const output = snakeCaseToCamelCase(
            await this.roleRepository.save(updateItem),
        ) as CamelTypeRoleItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async setRoleStatus(id: string, status: number, headers: HeaderParamDto) {
        checkHeaders(headers);
        const target = await this.roleRepository.findOneBy({ id });
        // const user = Number(headers['user-id']);

        if (isNil(target)) {
            throw new NotFoundException(`The role #${id} is not found.`);
        }
        console.log('target:', target);

        target.status = status;
        // target.change_master = user;
        target.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        const output = snakeCaseToCamelCase(
            await this.roleRepository.save(target),
        ) as CamelTypeRoleItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);
        const targetItem = await this.roleRepository.findOneBy({ id });
        if (!targetItem) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeRoleItem = snakeCaseToCamelCase(
            await this.roleRepository.remove(targetItem),
        ) as CamelTypeRoleItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }
}
