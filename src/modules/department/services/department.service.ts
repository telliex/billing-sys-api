import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { isNil } from 'lodash';
import moment from 'moment';
import { Repository, Like } from 'typeorm';

import { SettingProvider } from '@/config/setting.provider';
import { checkAndRenewToken } from '@/untils';

import { CamelTypeMenuItem } from '../../menu/interfaces/menu.interface';
import { HeaderParamDto } from '../../restful/dto';
import {
    camelCaseToSnakeCase,
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
} from '../../restful/helpers';
import { User } from '../../user/entities/user.entity';

import { DepartmentDto } from '../dto';
import { Department } from '../entities/department.entity';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly settingProvider: SettingProvider,
    ) {}

    async create(createDto: DepartmentDto, headers: HeaderParamDto) {
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

        const newItem = Object.assign(
            this.departmentRepository.create(),
            camelCaseToSnakeCase(createDto),
        );

        // TODO
        // const target = await this.userRepository.findOneBy({ mgt_number: user });
        newItem.id = undefined;
        // TODO
        // newItem.add_master = user;
        // newItem.add_master_name = target.user_name;
        // newItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        // newItem.change_master = user;
        // newItem.change_master_name = target.user_name;
        // newItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.departmentRepository.save(newItem),
        ) as unknown as CamelTypeMenuItem;

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

        const targetItems: any[] = await this.departmentRepository.find({
            where: {
                dept_name: query.deptName ? Like(`%${query.deptName}%`) : null,
                status: query.status ? query.status : null,
            },
            order: {
                sort_no: 'ASC',
                dept_name: 'ASC',
            },
        });

        const resultItems = targetItems.map((item) => {
            return {
                id: item.id,
                deptName: item.dept_name,
                sortNo: item.sort_no,
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

        const targetItem = await this.departmentRepository.findOneBy({ id });

        if (isNil(targetItem)) {
            throw new NotFoundException(`The dept #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));

        // TODO
        // const target = await this.userRepository.findOneBy({ mgt_number: user });

        // TODO
        updateItem.change_master = userId;
        updateItem.change_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
        const output = snakeCaseToCamelCase(
            await this.departmentRepository.save(updateItem),
        ) as CamelTypeMenuItem;
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
        return [output];
    }
}
