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

import { Role } from '../role/entities/role.entity';
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
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
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
                status: query.status ? query.status : 1,
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
        return [...resultMenu, ...resultButton];

        // return [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
    }

    // show the dynimic menu list
    async findDynimicMenuList(headers: HeaderParamDto, query: any): Promise<NavItem[]> {
        checkHeaders(headers);
        const user = Number(headers['user-id']);
        // get target user roles's keys
        const targetUser = await this.userRepository.findOneBy({ mgt_number: user });

        const rolesJSONArray = targetUser.roles_string ? JSON.parse(targetUser.roles_string) : [];
        const rolesKeyArray: string[] = rolesJSONArray.map(
            (item: { fieldKey: string; fieldValue: string }) => item.fieldKey,
        );

        const rolesAll = await this.roleRepository.find({
            where: rolesKeyArray.map((item) => {
                return { id: item, status: 1 };
            }),
        });

        // const tempPlus: any[] = await this.menuRepository.find({
        //     where: {
        //         menu_name: query.menuName ? query.menuName : null,
        //         alias: query.alias ? query.alias : null,
        //         status: 1,
        //     }
        // });

        // merge all permissions
        let rolesAllPermissionsKeys: any[] = [];
        rolesAll.forEach((item) => {
            console.log('99999999:', item);
            if (item.menu_permission && item.menu_permission !== '') {
                rolesAllPermissionsKeys = [
                    ...new Set([...rolesAllPermissionsKeys, ...item.menu_permission.split(',')]),
                ];
            }
        });

        // console.log('rolesAll:', rolesAll);
        // console.log('rolesAllPermissionsKeys===============:', rolesAllPermissionsKeys);

        let temp: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? query.menuName : null,
                alias: query.alias ? query.alias : null,
                status: 1,
            },
            order: {
                order_no: 'ASC',
            },
        });

        temp = temp.filter((item) => item.type !== 'button');
        console.log('temp===============:', temp);
        const map: any = {};

        temp.forEach((item) => {
            map[item.id] = item;
        });
        const xx: any[] = [];
        const container: string[] = [];
        rolesAllPermissionsKeys.forEach((item) => {
            temp.forEach((subItem) => {
                if (item === subItem.id && subItem.type !== 'button') {
                    container.push(item);
                    //  &&  !rolesAllPermissionsKeys.includes(subItem.parent_menu
                    if (subItem.parent_menu !== '') {
                        if (!container.includes(subItem.parent_menu)) {
                            xx.push(map[subItem.parent_menu]);
                        }
                        xx.push(subItem);
                    } else {
                        xx.push(subItem);
                    }
                }
            });
        });
        console.log('xx===============:', xx);

        const newTemp = xx
            // .filter((item) => rolesAllPermissionsKeys.includes(item.id))
            // .filter((item) => item.type !== 'button')
            .map((item) => {
                return {
                    id: item.id,
                    type: item.type,
                    path: item.route_path,
                    title: item.alias,
                    name: item.alias,
                    status: item.status,
                    component: item.component,
                    isExt: item.is_ext,
                    redirect: null,
                    parentMenu: item.parent_menu,
                    caseSensitive: true,
                    meta: {
                        hideMenu: item.status === 0,
                        title: item.alias,
                        hideChildrenInMenu: false,
                        icon: item.icon,
                        ignoreKeepAlive: item.is_cache !== 1,
                    },
                    children: [],
                };
            });

        const result = this.buildMenuNestedStructure(newTemp);
        // this.processItems(result);

        // result.forEach((item) => {
        //     if (item.parentMenu === '' && item.type === 'catalog') {
        //         // menuTree.push(item);
        //     } else {
        //         result.forEach((subItem) => {
        //             if (item.parentMenu === subItem.id) {
        //                 if (subItem.children) {
        //                     subItem.children.push(item);
        //                 } else {
        //                     subItem.children = [item];
        //                 }
        //             }
        //         });
        //     }
        // });

        // staic pages
        const home = {
            id: '323ef5b1-e92e-467d-bef2-fc8e86eb3a04',
            type: 'catalog',
            path: '/home',
            name: 'Home',
            component: 'LAYOUT',
            redirect: '/home/index',
            isExt: 1,
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
        return [home, ...result];

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

    buildMenuNestedStructure(data: any[]) {
        const map: any = {}; // 用來快速查找 id 對應的物件
        const result: any[] = []; // 最終的結果

        // 將原始資料放入 map 中
        data.forEach((item) => {
            map[item.id] = item;
            item.children = undefined; // 初始化 children 屬性
        });

        // 將每個 item 放到對應的 parent 的 children 中
        data.forEach((item) => {
            if (item.parentMenu !== '') {
                const parent = map[item.parentMenu];
                if (parent) {
                    if (parent.children) {
                        parent.children.push(item);
                    } else {
                        parent.children = [item];
                    }
                }
            } else {
                result.push(item); // 沒有 parentMenu 的 item 是根節點，放到最終結果中
            }
        });

        // deal with inner link default index
        // data.forEach((item) => {
        //     if (item.children.length === 1 && item.children[0].path === 'index') {
        //         item.redirect = `${item.path}${item.children[0].path}`;
        //     }
        // });
        // this.processItems(result);
        return result;
    }

    processItems(data: any[]) {
        data.forEach((item) => {
            // Check if isExt is 0 and children is an empty array

            if (item.isExt === 0 && item.children.length === 0) {
                item.meta.hideMenu = false;
            }

            // If item has children, recursively process them
            if (item.children.length > 0) {
                this.processItems(item.children);
            }
        });
    }
}
