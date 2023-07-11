import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';

import {
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
    camelCaseToSnakeCase,
} from '../restful/helpers';

import { RoleDto } from './dto/role.dto';
import { Role } from './entities/role.entity';
import { CamelTypeRoleItem } from './interfaces/role.interface';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}

    async create(roleItem: RoleDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const newRoleItem = Object.assign(
            this.roleRepository.create(),
            camelCaseToSnakeCase(roleItem),
        );
        const user = Number(headers['user-id']);

        newRoleItem.id = undefined;
        newRoleItem.add_master = user;
        newRoleItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        newRoleItem.change_master = user;
        newRoleItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        console.log('newRoleItem:', newRoleItem);
        const output: CamelTypeRoleItem = snakeCaseToCamelCase(
            await this.roleRepository.save(newRoleItem),
        ) as unknown as CamelTypeRoleItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('output:', output);
        return output;
    }

    async findAll(headers: HeaderParamDto, query: any) {
        checkHeaders(headers);
        let output: any[] = await this.roleRepository.find({
            where: {
                role_name: query.roleName ? query.roleName : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
            },
        });
        output = output.map((item) => {
            const temp: any = snakeCaseToCamelCase(item);
            temp.changeTime ? offsetUtCTime(temp.changeTime, headers['time-zone']) : '';
            temp.addTime ? offsetUtCTime(temp.addTime, headers['time-zone']) : '';
            return temp;
        });
        console.log('output=======');
        console.log(output);
        return output;
    }

    findOne(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);
        return `This action returns a #${id} role`;
    }

    update(id: string, updateRoleDto: RoleDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        return `This action updates a #${id} role`;
    }

    remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);
        return `This action removes a #${id} role`;
    }
}
