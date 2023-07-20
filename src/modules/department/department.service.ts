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

import { DepartmentDto } from './dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>,
    ) {}

    async create(createDto: DepartmentDto, headers: HeaderParamDto) {
        checkHeaders(headers);

        const complexItem = Object.assign(
            this.departmentRepository.create(),
            camelCaseToSnakeCase(createDto),
        );

        const user = Number(headers['user-id']);
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        complexItem.id = undefined;
        complexItem.add_master = user;
        complexItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        complexItem.change_master = user;
        complexItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        console.log('complexItem:', complexItem);
        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.departmentRepository.save(complexItem),
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
                changeTime: item.change_time,
                changeMaster: item.change_master,
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

        const updatedTargetTemp = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        updatedTargetTemp.change_master = user;
        updatedTargetTemp.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        const output = snakeCaseToCamelCase(
            await this.departmentRepository.save(updatedTargetTemp),
        ) as CamelTypeMenuItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
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
