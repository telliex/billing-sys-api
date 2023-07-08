import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { snakeCase, camelCase, isNil } from 'lodash';
import moment from 'moment';
import { Repository } from 'typeorm';

import { PaginateOptions, QueryHook } from '../modules/database/types';

import { Menu } from './entity/menu.entity';
import { NavItem, SnakeTypeMenuItem, CamelTypeMenuItem } from './interfaces/menu.interface';

interface Header {
    'user-id': number;
    'time-zone': string;
}

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
    ) {}

    camelCaseToSnakeCase(targetMenu: CamelTypeMenuItem): SnakeTypeMenuItem {
        const snakeTypeMenu = Object.keys(targetMenu).reduce((acc, key) => {
            const wantKey = snakeCase(key) as keyof SnakeTypeMenuItem;
            // @ts-ignore
            acc[wantKey] = targetMenu[key] as SnakeTypeMenuItem[keyof SnakeTypeMenuItem];
            return acc;
        }, {} as SnakeTypeMenuItem);

        return snakeTypeMenu;
    }

    snakeCaseToCamelCase(targetMenu: SnakeTypeMenuItem): CamelTypeMenuItem {
        return Object.keys(targetMenu).reduce((acc, key) => {
            const wantKey = camelCase(key) as keyof CamelTypeMenuItem;
            // @ts-ignore
            acc[wantKey] = targetMenu[key] as CamelTypeMenuItem[keyof CamelTypeMenuItem];
            return acc;
        }, {} as CamelTypeMenuItem);
    }

    offsetUtCTime(time: string, timeZone: string) {
        const offsetTime = Number(timeZone.split('UTC')[1]);
        return moment(time).add(offsetTime, 'hours').format('YYYY-MM-DD HH:mm:ss');
    }

    async paginate(options: PaginateOptions, callback?: QueryHook<Menu>) {
        //
    }

    async findDetail(id: string, callback?: QueryHook<Menu>) {
        //
    }

    async findNavList(headers: Header, query: any): Promise<NavItem[]> {
        if (!headers['time-zone']) {
            throw new BadRequestException(`Missing UTC header.`);
        }
        if (!headers['user-id']) {
            throw new BadRequestException(`Missing user id header.`);
        }

        const temp: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? query.menuName : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
            },
        });

        const result = temp.map((item) => {
            return {
                id: item.id,
                type: item.type,
                path: item.rout_path,
                name: item.alias,
                component: item.component,
                redirect: item.parent_menu === '' ? item.rout_path : null,
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
        console.log('result1:', result);

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
        console.log('result2:', result);
        const menuTree = result.filter((item) => item.parentMenu === '' && item.type === 'catalog');
        menuTree.forEach((item) => {
            item.redirect = `${item.path}${
                item.children && item.children.length >= 1 ? `/${item.children[0].path}` : ''
            }`;
            item.meta.hideChildrenInMenu = item.children && item.children.length <= 1;
        });
        console.log('menuTree:', menuTree);

        // single
        const dashboardRoute = {
            path: '/dashboard',
            name: 'Dashboard',
            component: 'LAYOUT',
            redirect: '/dashboard/analysis',
            meta: {
                title: 'routes.dashboard.dashboard',
                hideChildrenInMenu: true,
                icon: 'bx:bx-home',
            },
            children: [
                {
                    path: 'analysis',
                    name: 'Analysis',
                    component: '/dashboard/analysis/index',
                    meta: {
                        hideMenu: true,
                        hideBreadcrumb: true,
                        title: 'routes.dashboard.analysis',
                        currentActiveMenu: '/dashboard',
                        icon: 'bx:bx-home',
                    },
                },
                {
                    path: 'workbench',
                    name: 'Workbench',
                    component: '/dashboard/workbench/index',
                    meta: {
                        hideMenu: true,
                        hideBreadcrumb: true,
                        title: 'routes.dashboard.workbench',
                        currentActiveMenu: '/dashboard',
                        icon: 'bx:bx-home',
                    },
                },
            ],
        };

        const backRoute = {
            path: 'back',
            name: 'PermissionBackDemo',
            meta: {
                title: 'routes.demo.permission.back',
            },

            children: [
                {
                    path: 'page',
                    name: 'BackAuthPage',
                    component: '/demo/permission/back/index',
                    meta: {
                        title: 'routes.demo.permission.backPage',
                    },
                },
                {
                    path: 'btn',
                    name: 'BackAuthBtn',
                    component: '/demo/permission/back/Btn',
                    meta: {
                        title: 'routes.demo.permission.backBtn',
                    },
                },
            ],
        };

        const authRoute = {
            path: '/permission',
            name: 'Permission',
            component: 'LAYOUT',
            redirect: '/permission/front/page',
            meta: {
                icon: 'carbon:user-role',
                title: 'routes.demo.permission.permission',
            },
            children: [backRoute],
        };

        const levelRoute = {
            path: '/level',
            name: 'Level',
            component: 'LAYOUT',
            redirect: '/level/menu1/menu1-1',
            meta: {
                icon: 'carbon:user-role',
                title: 'routes.demo.level.level',
            },

            children: [
                {
                    path: 'menu1',
                    name: 'Menu1Demo',
                    meta: {
                        title: 'Menu1',
                    },
                    children: [
                        {
                            path: 'menu1-1',
                            name: 'Menu11Demo',
                            meta: {
                                title: 'Menu1-1',
                            },
                            children: [
                                {
                                    path: 'menu1-1-1',
                                    name: 'Menu111Demo',
                                    component: '/demo/level/Menu111',
                                    meta: {
                                        title: 'Menu111',
                                    },
                                },
                            ],
                        },
                        {
                            path: 'menu1-2',
                            name: 'Menu12Demo',
                            component: '/demo/level/Menu12',
                            meta: {
                                title: 'Menu1-2',
                            },
                        },
                    ],
                },
                {
                    path: 'menu2',
                    name: 'Menu2Demo',
                    component: '/demo/level/Menu2',
                    meta: {
                        title: 'Menu2',
                    },
                },
            ],
        };

        const sysRoute = {
            path: '/system',
            name: 'System',
            component: 'LAYOUT',
            redirect: '/system/account',
            meta: {
                icon: 'ion:settings-outline',
                title: 'routes.demo.system.moduleName',
            },
            children: [
                {
                    path: 'account',
                    name: 'AccountManagement',
                    meta: {
                        title: 'routes.demo.system.account',
                        ignoreKeepAlive: true,
                    },
                    component: '/demo/system/account/index',
                },
                {
                    path: 'account_detail/:id',
                    name: 'AccountDetail',
                    meta: {
                        hideMenu: true,
                        title: 'routes.demo.system.account_detail',
                        ignoreKeepAlive: true,
                        showMenu: false,
                        currentActiveMenu: '/system/account',
                    },
                    component: '/demo/system/account/AccountDetail',
                },
                {
                    path: 'role',
                    name: 'RoleManagement',
                    meta: {
                        title: 'routes.demo.system.role',
                        ignoreKeepAlive: true,
                    },
                    component: '/demo/system/role/index',
                },

                {
                    path: 'menu',
                    name: 'MenuManagement',
                    meta: {
                        title: 'routes.demo.system.menu',
                        ignoreKeepAlive: true,
                    },
                    component: '/sys/menu/index',
                },
                {
                    path: 'dept',
                    name: 'DeptManagement',
                    meta: {
                        title: 'routes.demo.system.dept',
                        ignoreKeepAlive: true,
                    },
                    component: '/demo/system/dept/index',
                },
                {
                    path: 'changePassword',
                    name: 'ChangePassword',
                    meta: {
                        title: 'routes.demo.system.password',
                        ignoreKeepAlive: true,
                    },
                    component: '/demo/system/password/index',
                },
            ],
        };

        const linkRoute = {
            path: '/link',
            name: 'Link',
            component: 'LAYOUT',
            meta: {
                icon: 'ion:tv-outline',
                title: 'routes.demo.iframe.frame',
            },
            children: [
                {
                    path: 'doc',
                    name: 'Doc',
                    meta: {
                        title: 'routes.demo.iframe.doc',
                        frameSrc: 'https://doc.vvbin.cn/',
                    },
                },
                {
                    path: 'https://doc.vvbin.cn/',
                    name: 'DocExternal',
                    component: 'LAYOUT',
                    meta: {
                        title: 'routes.demo.iframe.docExternal',
                    },
                },
            ],
        };

        // let output: any[] = await this.menuRepository.find({
        //     where: {
        //         menu_name: query.menuName ? query.menuName : null,
        //         status: query.status ? query.status : null,
        //     },
        //     order: {
        //         order_no: 'ASC',
        //     },
        // });
        // output = output.map((item) => {
        //     const temp: any = this.snakeCaseToCamelCase(item);
        //     temp.changeTime ? this.offsetUtCTime(temp.changeTime, headers['time-zone']) : '';
        //     temp.addTime ? this.offsetUtCTime(temp.addTime, headers['time-zone']) : '';
        //     return temp;
        // });
        // console.log('outpu=======t');
        // console.log(output);
        console.log('menu:', [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute]);
        return menuTree;

        // return [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
    }

    async findAll(headers: Header, query: any): Promise<Menu[]> {
        if (!headers['time-zone']) {
            throw new BadRequestException(`Missing UTC header.`);
        }
        if (!headers['user-id']) {
            throw new BadRequestException(`Missing user id header.`);
        }

        let output: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? query.menuName : null,
                status: query.status ? query.status : null,
            },
            order: {
                order_no: 'ASC',
            },
        });
        output = output.map((item) => {
            const temp: any = this.snakeCaseToCamelCase(item);
            temp.changeTime ? this.offsetUtCTime(temp.changeTime, headers['time-zone']) : '';
            temp.addTime ? this.offsetUtCTime(temp.addTime, headers['time-zone']) : '';
            return temp;
        });
        console.log('output=======');
        console.log(output);
        return output;
    }

    async findOne(id: string, headers: Header): Promise<Menu | null> {
        if (!headers['time-zone']) {
            throw new BadRequestException(`Missing UTC header.`);
        }
        if (!headers['user-id']) {
            throw new BadRequestException(`Missing user id header.`);
        }
        const targetMenu = await this.menuRepository.findOneBy({ id });
        if (isNil(targetMenu)) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        const output: any = this.snakeCaseToCamelCase(targetMenu);
        output.changeTime = output.changeTime
            ? this.offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime
            ? this.offsetUtCTime(output.addTime, headers['time-zone'])
            : '';
        return output;
    }

    // remove menu item
    async remove(id: string, headers: Header): Promise<CamelTypeMenuItem | null> {
        if (!headers['time-zone']) {
            throw new BadRequestException(`Missing UTC header.`);
        }
        if (!headers['user-id']) {
            throw new BadRequestException(`Missing user id header.`);
        }
        const targetMenu = await this.menuRepository.findOneBy({ id });

        if (!targetMenu) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }
        // transform to camelCase
        const output: CamelTypeMenuItem = this.snakeCaseToCamelCase(
            await this.menuRepository.remove(targetMenu),
        ) as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? this.offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime
            ? this.offsetUtCTime(output.addTime, headers['time-zone'])
            : '';
        return output;
    }

    async create(menuItem: CamelTypeMenuItem, headers: Header): Promise<CamelTypeMenuItem> {
        if (!headers['time-zone']) {
            throw new BadRequestException(`Missing UTC header.`);
        }
        if (!headers['user-id']) {
            throw new BadRequestException(`Missing user id header.`);
        }
        console.log('menuItem1:', menuItem);
        console.log('menuItem2:', this.camelCaseToSnakeCase(menuItem));

        const newMenuItem = Object.assign(
            this.menuRepository.create(),
            this.camelCaseToSnakeCase(menuItem),
        );

        const user = Number(headers['user-id']);
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        newMenuItem.id = undefined;
        newMenuItem.add_master = user;
        newMenuItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        newMenuItem.change_master = user;
        newMenuItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        console.log('newMenuItem:', newMenuItem);
        const output: CamelTypeMenuItem = this.snakeCaseToCamelCase(
            await this.menuRepository.save(newMenuItem),
        ) as unknown as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? this.offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime
            ? this.offsetUtCTime(output.addTime, headers['time-zone'])
            : '';
        console.log('output:', output);
        return output;
    }

    async update(
        id: string,
        updateMenu: CamelTypeMenuItem,
        headers: Header,
    ): Promise<CamelTypeMenuItem> {
        if (!headers['time-zone']) {
            throw new BadRequestException(`Missing UTC header.`);
        }
        if (!headers['user-id']) {
            throw new BadRequestException(`Missing user id header.`);
        }
        const targetMenu = await this.menuRepository.findOneBy({ id });

        const user = Number(headers['user-id']);
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        if (isNil(targetMenu)) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }

        const updateMenuTemp = Object.assign(targetMenu, this.camelCaseToSnakeCase(updateMenu));

        // for (const key in updateMenuTemp) {
        //     if (key !== 'id') {
        //         // @ts-ignore
        //         targetMenu[key as keyof SnakeTypeMenuItem] =
        //             updateMenuTemp[key as keyof SnakeTypeMenuItem];
        //     }
        // }
        updateMenuTemp.change_master = user;
        updateMenuTemp.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');

        console.log('updateMenuTemp:', updateMenuTemp);

        const output = this.snakeCaseToCamelCase(await this.menuRepository.save(updateMenuTemp));
        output.changeTime = output.changeTime
            ? this.offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime
            ? this.offsetUtCTime(output.addTime, headers['time-zone'])
            : '';
        return output;
    }
}
