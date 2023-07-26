import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import moment from 'moment';
import { Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';

import {
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
    camelCaseToSnakeCase,
} from '../restful/helpers';

import { User } from '../user/entities/user.entity';

import { MenuButtonDto } from './dto';
import { MenuButtons } from './entities/menu-buttons.entity';
import { CamelTypeMenuButtonItem } from './interfaces/menu-buttons.interface';

@Injectable()
export class MenuButtonsService {
    constructor(
        @InjectRepository(MenuButtons)
        private menuButtonsRepository: Repository<MenuButtons>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createDto: MenuButtonDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const newItem = Object.assign(
            this.menuButtonsRepository.create(),
            camelCaseToSnakeCase(createDto),
        );
        const user = Number(headers['user-id']);

        newItem.id = undefined;
        newItem.add_master = user;
        const targetItem = await this.userRepository.findOneBy({ mgt_number: user });
        newItem.add_master_name = targetItem.user_name;
        newItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        newItem.change_master = user;
        newItem.change_master_name = targetItem.user_name;
        newItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        console.log('newItem:', newItem);
        const output: CamelTypeMenuButtonItem = snakeCaseToCamelCase(
            await this.menuButtonsRepository.save(newItem),
        ) as unknown as CamelTypeMenuButtonItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('output:', output);
        return output;
    }

    async findAll(query: any, headers: HeaderParamDto) {
        checkHeaders(headers);
        let output: any[] = await this.menuButtonsRepository.find({
            where: {
                belong_menu: query.belongMenuId ? query.belongMenuId : null,
                status: query.status ? query.status : null,
            },
            order: {
                button_name: 'ASC',
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

        const targetMenu = await this.menuButtonsRepository.findOneBy({ id });
        if (isNil(targetMenu)) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        const output: any = snakeCaseToCamelCase(targetMenu);
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }

    async update(id: string, updateDto: MenuButtonDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const target = await this.menuButtonsRepository.findOneBy({ id });

        const user = Number(headers['user-id']);

        if (isNil(target)) {
            throw new NotFoundException(`The role #${id} is not found.`);
        }

        const updateRoleTemp = Object.assign(target, camelCaseToSnakeCase(updateDto));

        updateRoleTemp.change_master = user;
        updateRoleTemp.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        const output = snakeCaseToCamelCase(
            await this.menuButtonsRepository.save(updateRoleTemp),
        ) as CamelTypeMenuButtonItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }

    async remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);

        const target = await this.menuButtonsRepository.findOneBy({ id });
        if (!target) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeMenuButtonItem = snakeCaseToCamelCase(
            await this.menuButtonsRepository.remove(target),
        ) as CamelTypeMenuButtonItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }
}
