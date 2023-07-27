import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import moment from 'moment';
import { Repository, Like } from 'typeorm';

import { PaginateOptions, QueryHook } from '../database/types';
import { MenuButtons } from '../menu-buttons/entities/menu-buttons.entity';
import { HeaderParamDto } from '../restful/dto';

import {
    offsetUtCTime,
    camelCaseToSnakeCase,
    snakeCaseToCamelCase,
    checkHeaders,
} from '../restful/helpers';

import { User } from '../user/entities/user.entity';

import { Menu } from './entities/menu.entity';
import { NavItem, CamelTypeMenuItem } from './interfaces/menu.interface';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(MenuButtons)
        private buttonRepository: Repository<MenuButtons>,
    ) {}

    async paginate(options: PaginateOptions, callback?: QueryHook<Menu>) {
        //
    }

    async findDetail(id: string, callback?: QueryHook<Menu>) {
        //
    }

    async findTreeListWithButton(headers: HeaderParamDto, query: any) {
        checkHeaders(headers);

        const tempMenu: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? query.menuName : null,
                alias: query.alias ? query.alias : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
            },
        });

        const resultMenu = tempMenu
            // .filter((item) => item.type !== 'button')
            .map((item) => {
                return {
                    id: item.id,
                    type: item.type,
                    title: item.alias,
                    parentMenu: item.parent_menu,
                    children: [],
                };
            });

        console.log('resultMenu========', resultMenu);

        // const catalogs = resultMenu.filter(
        //     (item) => item.parentMenu === '' && item.type === 'catalog',
        // );
        // const pages = resultMenu.filter(
        //     (item) =>
        //         (item.parentMenu !== '' && item.type === 'catalog') ||
        //         (item.parentMenu !== '' && item.type === 'page'),
        // );

        const tempButton: any[] = await this.buttonRepository.find({
            where: {
                status: 1,
            },
        });
        const resultButton = tempButton.map((item) => {
            return {
                id: item.id,
                type: 'button',
                title: item.button_name,
                parentMenu: item.belong_menu,
                permission: item.button_permission,
            };
        });

        console.log('resultButton=======', resultButton);

        return [...resultMenu, ...resultButton];

        // return [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
    }

    async findNavList(headers: HeaderParamDto, query: any): Promise<NavItem[]> {
        checkHeaders(headers);

        const temp: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? query.menuName : null,
                alias: query.alias ? query.alias : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
            },
        });

        const result = temp
            .filter((item) => item.type !== 'button')
            .map((item) => {
                return {
                    id: item.id,
                    type: item.type,
                    path: item.route_path,
                    name: item.alias,
                    component: item.component,
                    redirect: item.parent_menu === '' ? item.route_path : null,
                    parentMenu: item.parent_menu,
                    caseSensitive: true,
                    meta: {
                        hideMenu: item.status === 0,
                        title: item.alias,
                        hideChildrenInMenu: false,
                        icon: item.icon,
                    },
                    children: [],
                };
            });

        result.forEach((item) => {
            if (item.parentMenu === '' && item.type === 'catalog') {
                // menuTree.push(item);
            } else {
                result.forEach((subItem) => {
                    if (item.parentMenu === subItem.id) {
                        if (subItem.children) {
                            subItem.children.push(item);
                        } else {
                            subItem.children = [item];
                        }
                    }
                });
            }
        });
        const home = {
            id: '323ef5b1-e92e-467d-bef2-fc8e86eb3a04',
            type: 'catalog',
            path: '/home',
            name: 'Home',
            component: 'LAYOUT',
            redirect: '/home/index',
            parentMenu: '',
            caseSensitive: true,
            meta: {
                hideMenu: true,
                title: 'Home',
                hideChildrenInMenu: true,
                icon: 'bx:bx-home',
                orderNo: 100,
            },
            children: [
                {
                    id: 'b4c5d583-310d-4c27-b0b2-62303eab613d',
                    type: 'page',
                    path: 'index',
                    name: 'HomePage',
                    component: '/frontpage/index',
                    parentMenu: '323ef5b1-e92e-467d-bef2-fc8e86eb3a04',
                    meta: {
                        hideMenu: true,
                        hideBreadcrumb: true,
                        title: 'home',
                    },
                },
            ],
        };
        const menuTree = result.filter((item) => item.parentMenu === '' && item.type === 'catalog');
        menuTree.forEach((item) => {
            item.redirect = `${item.path}${
                item.children && item.children.length >= 1 ? `/${item.children[0].path}` : ''
            }`;
            item.meta.hideChildrenInMenu = item.children && item.children.length <= 1;
        });
        menuTree.unshift(home);

        return menuTree;

        // return [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
    }

    async findAll(query: any, headers: HeaderParamDto): Promise<Menu[]> {
        checkHeaders(headers);

        let output: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? Like(`%${query.menuName}%`) : null,
                alias: query.alias ? query.alias : null,
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
        return output;
    }

    async findOne(id: string, headers: HeaderParamDto): Promise<Menu | null> {
        checkHeaders(headers);

        const targetMenu = await this.menuRepository.findOneBy({ id });
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

    // remove menu item

    async create(
        createDto: CamelTypeMenuItem,
        headers: HeaderParamDto,
    ): Promise<CamelTypeMenuItem> {
        checkHeaders(headers);

        const newItem = Object.assign(
            this.menuRepository.create(),
            camelCaseToSnakeCase(createDto),
        );

        const user = Number(headers['user-id']);
        const target = await this.userRepository.findOneBy({ mgt_number: user });
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        newItem.id = undefined;
        newItem.add_master = user;
        newItem.add_master_name = target.user_name;
        newItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        newItem.change_master = user;
        newItem.change_master_name = target.user_name;
        newItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.menuRepository.save(newItem),
        ) as unknown as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }

    async update(
        id: string,
        updateDto: CamelTypeMenuItem,
        headers: HeaderParamDto,
    ): Promise<CamelTypeMenuItem> {
        checkHeaders(headers);
        const targetItem = await this.menuRepository.findOneBy({ id });

        const user = Number(headers['user-id']);
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        if (isNil(targetItem)) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));

        const target = await this.userRepository.findOneBy({ mgt_number: user });
        updateItem.change_master = user;
        updateItem.change_master_name = target.user_name;
        updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const output = snakeCaseToCamelCase(
            await this.menuRepository.save(updateItem),
        ) as CamelTypeMenuItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }

    async remove(id: string, headers: HeaderParamDto): Promise<CamelTypeMenuItem | null> {
        checkHeaders(headers);
        const targetItem = await this.menuRepository.findOneBy({ id });

        if (!targetItem) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.menuRepository.remove(targetItem),
        ) as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return output;
    }
}
