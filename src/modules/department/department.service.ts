import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { isNil } from 'lodash';
import moment from 'moment';
import { Repository, Like } from 'typeorm';

import { CamelTypeMenuItem } from '../menu/interfaces/menu.interface';
import { HeaderParamDto } from '../restful/dto';
import {
    camelCaseToSnakeCase,
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
} from '../restful/helpers';
import { User } from '../user/entities/user.entity';

import { DepartmentDto } from './dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createDto: DepartmentDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const newItem = Object.assign(
            this.departmentRepository.create(),
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

        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.departmentRepository.save(newItem),
        ) as unknown as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('output:', output);
        return output;
    }

    async findAll(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        const targetItems: any[] = await this.departmentRepository.find({
            where: {
                dept_name: query.deptName ? Like(`%${query.deptName}%`) : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
                dept_name: 'ASC',
            },
        });

        const resultItems = targetItems.map((item) => {
            return {
                id: item.id,
                deptName: item.dept_name,
                orderNo: item.order_no,
                remark: item.remark,
                parentDept: item.parent_dept,
                children: undefined,
                status: item.status,
                addTime: item.add_time,
                addMaster: item.add_master,
                addMasterName: item.add_master_name,
                changeTime: item.change_time,
                changeMaster: item.change_master,
                changeMasterName: item.change_master_name,
            };
        });

        resultItems.forEach((item) => {
            if (item.parentDept === '') {
                // deptTree.push(item);
            } else {
                resultItems.forEach((subItem) => {
                    if (item.parentDept === subItem.id) {
                        if (subItem.children) {
                            subItem.children.push(item);
                        } else {
                            subItem.children = [item];
                        }
                    }
                });
            }
        });

        const output = resultItems.map((item) => {
            const tempItem: any = snakeCaseToCamelCase(item);
            tempItem.changeTime ? offsetUtCTime(tempItem.changeTime, headers['time-zone']) : '';
            tempItem.addTime ? offsetUtCTime(tempItem.addTime, headers['time-zone']) : '';
            return tempItem;
        });
        const deptTree = output.filter((item) => item.parentDept === '');
        return deptTree;
    }

    findOne(id: string, headers: HeaderParamDto) {
        return `This action returns a #${id} department`;
    }

    async update(id: string, updateDto: DepartmentDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const targetItem = await this.departmentRepository.findOneBy({ id });

        const user = Number(headers['user-id']);
        if (isNil(targetItem)) {
            throw new NotFoundException(`The dept #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        const target = await this.userRepository.findOneBy({ mgt_number: user });

        updateItem.change_master = user;
        updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        updateItem.change_master_name = target.user_name;
        const output = snakeCaseToCamelCase(
            await this.departmentRepository.save(updateItem),
        ) as CamelTypeMenuItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('=========dept output:', output);
        return output;
    }

    async remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);
        const targetItem = await this.departmentRepository.findOneBy({ id });

        if (!targetItem) {
            throw new NotFoundException(`The dept #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.departmentRepository.remove(targetItem),
        ) as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }
}