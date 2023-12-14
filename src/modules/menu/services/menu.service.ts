import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import { Repository, Like } from 'typeorm';

import { SettingProvider } from '@/config/setting.provider';
import { checkAndRenewToken } from '@/untils';

import { PaginateOptions, QueryHook } from '../../database/types';
// import { MenuButtons } from '../menu-buttons/entities/menu-buttons.entity';
import { HeaderParamDto } from '../../restful/dto';

import {
    offsetUtCTime,
    camelCaseToSnakeCase,
    snakeCaseToCamelCase,
    checkHeaders,
} from '../../restful/helpers';

import { Role } from '../../role/entities/role.entity';
import { User } from '../../user/entities/user.entity';

import { UserRoleMapping } from '../../user/entities/user.role.mapping.entity';
import { Menu } from '../entities/menu.entity';
import { NavItem, CamelTypeMenuItem } from '../interfaces/menu.interface';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(UserRoleMapping)
        private userRoleMappingRepository: Repository<UserRoleMapping>,
        private readonly settingProvider: SettingProvider,

        @InjectRepository(Role)
        private roleRepository: Repository<Role>, // @InjectRepository(MenuButtons) // private buttonRepository: Repository<MenuButtons>,
    ) {}

    async paginate(options: PaginateOptions, callback?: QueryHook<Menu>) {
        //
    }

    async findDetail(id: string, callback?: QueryHook<Menu>) {
        //
    }

    // async findTreeListWithButton(headers: HeaderParamDto, query: any) {
    //     checkHeaders(headers);

    //     const user = String(headers['user-id']);
    //     // renew login time
    //     await this.checkAndRenewToken(user, 3 * 60);

    //     const tempMenu: any[] = await this.menuRepository.find({
    //         where: {
    //             status: query.status ? query.status : 1,
    //         },
    //         order: {
    //             sort_no: 'ASC',
    //         },
    //     });

    //     const resultMenu = tempMenu
    //         // .filter((item) => item.type !== 'button')
    //         .map((item) => {
    //             return {
    //                 id: item.id,
    //                 type: item.type,
    //                 title: item.alias,
    //                 parentMenu: item.parent_menu,
    //                 children: [],
    //             };
    //         });

    //     // const catalogs = resultMenu.filter(
    //     //     (item) => item.parentMenu === '' && item.type === 'catalog',
    //     // );
    //     // const pages = resultMenu.filter(
    //     //     (item) =>
    //     //         (item.parentMenu !== '' && item.type === 'catalog') ||
    //     //         (item.parentMenu !== '' && item.type === 'page'),
    //     // );

    //     const tempButton: any[] = await this.buttonRepository.find({
    //         where: {
    //             status: 1,
    //         },
    //     });
    //     const resultButton = tempButton.map((item) => {
    //         return {
    //             id: item.id,
    //             type: 'button',
    //             title: item.button_name,
    //             parentMenu: item.belong_menu,
    //             permission: item.button_permission,
    //         };
    //     });
    //     return [...resultMenu, ...resultButton];

    //     // return [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
    // }

    // show the dynimic menu list
    async findDynimicMenuList(headers: HeaderParamDto, query: any): Promise<NavItem[]> {
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

        const mappingTarget = await this.userRoleMappingRepository.find({
            where: {
                system_user_id: userId,
            },
        });
        console.log('mappingTarget111111:', mappingTarget);

        const rolesArray: string[] = [];
        const rolesObject: any[] = [];

        for (let i = 0; i < mappingTarget.length; i++) {
            const result = await this.findRoleWithMenus(mappingTarget[i].system_role_id);
            result[0].menus.forEach((subItem) => {
                const tempId = subItem.menu.id;

                if (!rolesArray.includes(tempId)) {
                    console.log('66666:', tempId);
                    rolesArray.push(tempId);
                    rolesObject.push(subItem.menu);
                }
            });
        }
        console.log('rolesArray222222:', rolesArray);
        const newTemp = rolesObject
            // .filter((item) => rolesAllPermissionsKeys.includes(item.id))
            // .filter((item) => item.type !== 'button')
            .map((item) => {
                let typeString = 'button';
                if (item.type === 0) {
                    typeString = 'catalog';
                } else if (item.type === 1) {
                    typeString = 'page';
                }
                return {
                    id: item.id,
                    type: typeString,
                    menuName: item.menu_name,
                    // description: item.description,
                    component: item.component,
                    path: item.route_path,
                    title: item.menu_name,
                    // title: item.alias,
                    status: item.status,
                    isExt: item.is_ext,
                    redirect: null,
                    parentMenu: item.parent_menu === null ? '' : item.parent_menu,
                    caseSensitive: true,
                    meta: {
                        hideMenu: item.status === 0,
                        // title: item.alias,
                        title: item.menu_name,
                        hideChildrenInMenu: false,
                        icon: item.icon,
                        ignoreKeepAlive: item.is_cache !== 1,
                    },
                    children: [],
                };
            });
        console.log('newTemp8888888:', newTemp);

        const result = this.buildMenuNestedStructure(newTemp);
        // this.processItems(result);
        console.log('result9999999:', result);

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
            isExt: 0,
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
                        currentActiveMenu: '/home',
                        hideMenu: true,
                        hideBreadcrumb: true,
                        title: 'Home',
                        icon: 'ri:home-4-line',
                    },
                },
            ],
        };
        return [home, ...result];

        // return [dashboardRoute, authRoute, levelRoute, sysRoute, linkRoute];
    }

    async findAll(query: any, headers: HeaderParamDto): Promise<Menu[]> {
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

        let output: any[] = await this.menuRepository.find({
            where: {
                menu_name: query.menuName ? Like(`%${query.menuName}%`) : null,
                // alias: query.alias ? query.alias : null,
                status: query.status ? query.status : null,
            },
            order: {
                sort_no: 'ASC',
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

        // const user = String(headers['user-id']);
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
    ): Promise<CamelTypeMenuItem[]> {
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
            this.menuRepository.create(),
            camelCaseToSnakeCase(createDto),
        );

        // const target = await this.userRepository.findOneBy({ mgt_number: user });
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        newItem.id = undefined;
        // TODO
        // newItem.add_master = user;
        // newItem.add_master_name = target.user_name;
        // TODO
        // newItem.add_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        // TODO
        // newItem.change_master = user;
        // newItem.change_master_name = target.user_name;
        // TODO
        // newItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const output: CamelTypeMenuItem = snakeCaseToCamelCase(
            await this.menuRepository.save(newItem),
        ) as unknown as CamelTypeMenuItem;

        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async update(
        id: string,
        updateDto: CamelTypeMenuItem,
        headers: HeaderParamDto,
    ): Promise<CamelTypeMenuItem[]> {
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

        const targetItem = await this.menuRepository.findOneBy({ id });

        // const user = String(headers['user-id']);
        // const number = Number(headers['time-zone'].split('UTC+')[1]);
        // const utcOffset =
        //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
        if (isNil(targetItem)) {
            throw new NotFoundException(`The menu #${id} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(updateDto));

        // const target = await this.userRepository.findOneBy({ mgt_number: user });
        // TODO
        // updateItem.change_master = user;
        // updateItem.change_master_name = target.user_name;
        // TODO
        // updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const output = snakeCaseToCamelCase(
            await this.menuRepository.save(updateItem),
        ) as CamelTypeMenuItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    async remove(id: string, headers: HeaderParamDto): Promise<CamelTypeMenuItem[] | null> {
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
        return [output];
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

    // merge table
    async findRoleWithMenus(roleId: string) {
        return this.roleRepository
            .createQueryBuilder('role')
            .leftJoinAndSelect('role.menus', 'menuRoleMapping')
            .leftJoinAndSelect('menuRoleMapping.menu', 'menu')
            .where('role.id = :roleId', { roleId })
            .andWhere('role.hide = :hideStatus', { hideStatus: 1 })
            .andWhere('menu.hide = :hideStatus', { hideStatus: 1 })
            .getMany();
    }
}
