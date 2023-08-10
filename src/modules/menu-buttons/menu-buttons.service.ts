import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import moment from 'moment';
import { Repository } from 'typeorm';

import { Menu } from '../menu/entities/menu.entity';
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
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
    ) {}

    async create(createDto: MenuButtonDto, headers: HeaderParamDto) {
        checkHeaders(headers);
        const newItem = Object.assign(
            this.menuButtonsRepository.create(),
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
        const output: CamelTypeMenuButtonItem = snakeCaseToCamelCase(
            await this.menuButtonsRepository.save(newItem),
        ) as unknown as CamelTypeMenuButtonItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        console.log('=====createDto.belongMenu======', createDto.belongMenu);
        // write bill_system_menu [menu_buttons]
        const menu = await this.menuRepository.findOneBy({ id: createDto.belongMenu });
        console.log('=====target menu======', menu);
        const buttonList: any[] = await this.menuButtonsRepository.find({
            select: {
                button_name: true,
            },
            where: {
                belong_menu: createDto.belongMenu,
                status: 1,
            },
            order: {
                button_name: 'ASC',
            },
        });
        console.log(
            '========find button list=========',
            buttonList.map((item) => item.button_name),
        );
        menu.menu_buttons = buttonList.map((item) => item.button_name).join(',');
        this.menuRepository.save(menu);

        return [output];
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
        const targetItem = await this.menuButtonsRepository.findOneBy({ id });

        const user = Number(headers['user-id']);

        if (isNil(targetItem)) {
            throw new NotFoundException(`The role #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));
        const target = await this.userRepository.findOneBy({ mgt_number: user });

        updateItem.change_master = user;
        updateItem.change_master_name = target.user_name;
        updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        const output = snakeCaseToCamelCase(
            await this.menuButtonsRepository.save(updateItem),
        ) as CamelTypeMenuButtonItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';

        // write bill_system_menu [menu_buttons]
        const menu = await this.menuRepository.findOneBy({ id: updateDto.belongMenu });
        const buttonList: any[] = await this.menuButtonsRepository.find({
            select: {
                button_name: true,
            },
            where: {
                belong_menu: updateDto.belongMenu,
                status: 1,
            },
            order: {
                button_name: 'ASC',
            },
        });
        menu.menu_buttons = buttonList.map((item) => item.button_name).join(',');
        this.menuRepository.save(menu);

        return [output];
    }

    async remove(id: string, headers: HeaderParamDto) {
        checkHeaders(headers);

        const targetItem = await this.menuButtonsRepository.findOneBy({ id });
        if (!targetItem) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeMenuButtonItem = snakeCaseToCamelCase(
            await this.menuButtonsRepository.remove(targetItem),
        ) as CamelTypeMenuButtonItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';

        // write bill_system_menu [menu_buttons]
        const menu = await this.menuRepository.findOneBy({ id: targetItem.belong_menu });
        const buttonList: any[] = await this.menuButtonsRepository.find({
            select: {
                button_name: true,
            },
            where: {
                belong_menu: targetItem.belong_menu,
                status: 1,
            },
            order: {
                button_name: 'ASC',
            },
        });
        menu.menu_buttons = buttonList.map((item) => item.button_name).join(',');
        this.menuRepository.save(menu);

        return [output];
    }
}
