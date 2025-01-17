import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import { Repository, Like } from 'typeorm';

import { SettingProvider } from '@/config/setting.provider';

import { checkAndRenewToken } from '@/untils';

import { Dict } from '../../dict/entities/dict.entity';
import { HeaderParamDto } from '../../restful/dto';

import {
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
    camelCaseToSnakeCase,
} from '../../restful/helpers';
import { User } from '../../user/entities/user.entity';

import { RoleDto } from '../dto/role.dto';
import { Role } from '../entities/role.entity';
import { CamelTypeRoleItem } from '../interfaces/role.interface';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Dict)
        private dictRepository: Repository<Dict>,
        private readonly settingProvider: SettingProvider,
    ) {}

    async create(createDto: RoleDto, headers: HeaderParamDto) {
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
            this.roleRepository.create(),
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

        const output: CamelTypeRoleItem = snakeCaseToCamelCase(
            await this.roleRepository.save(newItem),
        ) as unknown as CamelTypeRoleItem;

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

        let output: any[] = await this.roleRepository.find({
            where: {
                role_name: query.roleName ? Like(`%${query.roleName}%`) : null,
                status: query.status ? query.status : null,
            },
            order: {
                sort_no: 'ASC',
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

    async findOne(id: string, headers: HeaderParamDto) {
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
        return `This action returns a #${id} role`;
    }

    async update(id: string, updateDto: RoleDto, headers: HeaderParamDto) {
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

        const targetItem = await this.roleRepository.findOneBy({ id });

        if (isNil(targetItem)) {
            throw new NotFoundException(`The role #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        // TODO
        // const target = await this.userRepository.findOneBy({ mgt_number: user });

        // TODO
        // updateItem.change_master = user;
        // updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        // updateItem.change_master_name = target.user_name;

        const output = snakeCaseToCamelCase(
            await this.roleRepository.save(updateItem),
        ) as CamelTypeRoleItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';

        const allRolesList: any[] = await this.roleRepository.find({
            where: {
                status: 1,
            },
        });
        const temp: string[] = [];
        allRolesList.forEach((item) => {
            temp.push(item.role_value);
        });

        const targetDict = await this.dictRepository.findOneBy({ dict_name: 'ROLE_LIST' });

        if (targetDict) {
            targetDict.dict_value = temp.length !== 0 ? temp.join(',') : '';
            await this.dictRepository.save(targetDict);
        }

        await this.updateUserRoles(output);

        return [output];
    }

    async setRoleStatus(id: string, status: number, headers: HeaderParamDto) {
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

        const target = await this.roleRepository.findOneBy({ id });
        // const user = String(headers['user-id']);

        if (isNil(target)) {
            throw new NotFoundException(`The role #${id} is not found.`);
        }

        target.status = status;
        // target.change_master = user;
        // TODO
        // target.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

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

        // check the role if used
        if (await this.checkRoleifUsed(id)) {
            throw new ConflictException(`The role item has already sued.`);
        }

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

        const targetItem = await this.roleRepository.findOneBy({ id });
        if (!targetItem) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeRoleItem = snakeCaseToCamelCase(
            await this.roleRepository.remove(targetItem),
            // targetItem,
        ) as CamelTypeRoleItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async updateUserRoles(role: any) {
        const target: any[] = await this.userRepository.find({
            where: {
                status: 1,
            },
        });

        target.forEach((item) => {
            let isSave = false;

            const userRoles = JSON.parse(item.roles_string);

            userRoles.forEach((sunItem: any) => {
                if (sunItem.key === role.id && sunItem.label !== role.roleValue) {
                    sunItem.label = role.roleValue;
                    sunItem.originLabel = role.roleValue;
                    isSave = true;
                }
            });

            if (isSave) {
                item.roles_string = JSON.stringify(userRoles);
                this.userRepository.save(item);
            }
        });
    }

    async checkRoleifUsed(roleId: string) {
        const target: any[] = await this.userRepository.find({
            where: {
                status: 1,
            },
        });
        let result = false;
        console.log('========target:', target);
        target.forEach((item) => {
            console.log('========item', item);
            if (!result) {
                const userRoles = item.roles_string ? JSON.parse(item.roles_string) : [];
                userRoles.forEach((sunItem: any) => {
                    if (sunItem.key === roleId) {
                        result = true;
                    }
                });
            }
        });

        return result;
    }
}
