import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { snakeCase, camelCase, isNil } from 'lodash';
import moment from 'moment';
import { Repository } from 'typeorm';

import { PaginateOptions, QueryHook } from '../modules/database/types';

import { Menu } from './entity/menu.entity';

interface Header {
    'user-id': number;
    'time-zone': string;
}

interface SnakeTypeMenuItem {
    id: string | null;
    type: string;
    menu_name: string;
    description: string;
    permission: string;
    component: string;
    component_name: string;
    rout_path: string;
    order_no: number;
    icon: string;
    parent_menu: string;
    is_ext: number;
    is_cache: number;
    is_show: number;
    status: number;
    add_master: number;
    add_time: string;
    change_master: number;
    change_time: string;
}

interface CamelTypeMenuItem {
    id: string;
    type: string;
    menuName: string;
    description: string;
    permission: string;
    component: string;
    componentName: string;
    routPath: string;
    orderNo: number;
    icon: string;
    parentMenu: string;
    isExt: number;
    isCache: number;
    isShow: number;
    status: number;
    addMaster: number;
    addTime: string;
    changeMaster: number;
    changeTime: string;
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

    async findList(headers: Header, query: any): Promise<Menu[]> {
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
        console.log('outpu=======t');
        console.log(output);
        return output;
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
      console.log('outpu=======t');
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
