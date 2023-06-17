/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-10 10:41:15
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-16 21:29:29
 */
import {
  NotFoundException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';
import * as moment from 'moment';
import { snakeCase, camelCase } from 'lodash';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}
  // private menus: Menu[] = [
  // {
  //   id: '00094545-d268-41d2-afda-a2fa613478bb',
  //   type: 'Page', v
  //   name: '回到MGT',
  //   description: '',
  //   component: 'LAYOUT',
  //   componentName: '',
  //   url: 'https://mgt-dev.ecv-billing-center.com/',
  //   sort: 1,
  //   icon: 'fa fa-book',
  //   parentId: '',
  //   isExternalLink: true,
  //   isCache: false,
  //   status: true, v
  //   addMaster: 0,
  //   addTime: '2023-03-13T06:59:55',
  //   changeMaster: 0,
  //   changeTime: '2023-03-13T06:59:55',
  // },
  // ];Menu
  async findAll(headers: any): Promise<Menu[]> {
    if (!headers['time-zone']) {
      throw new BadRequestException(`Missing UTC header.`);
    }
    if (!headers['user-id']) {
      throw new BadRequestException(`Missing user id header.`);
    }
    const output: any = await this.menuRepository.find();
    output.forEach((item) => {
      const temp = this.snakeCaseToCamelCase(item);
      temp['changeTime']
        ? this.offsetUtCTime(temp['changeTime'], headers['time-zone'])
        : '';
      temp['addTime']
        ? this.offsetUtCTime(temp['addTime'], headers['time-zone'])
        : '';
      return;
    });
    return output;
  }
  async findOne(id: string, headers: any): Promise<Menu | null> {
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
    const output: any = this.snakeCaseToCamelCase(targetMenu);
    output['changeTime'] = output['changeTime']
      ? this.offsetUtCTime(output['changeTime'], headers['time-zone'])
      : '';
    output['addTime'] = output['addTime']
      ? this.offsetUtCTime(output['addTime'], headers['time-zone'])
      : '';
    return output;
  }
  // remove menu item
  async remove(id: string, headers: any): Promise<Menu | null> {
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
    const output = this.snakeCaseToCamelCase(
      await this.menuRepository.remove(targetMenu),
    ) as Menu;

    output['changeTime'] = output['changeTime']
      ? this.offsetUtCTime(output['changeTime'], headers['time-zone'])
      : '';
    output['addTime'] = output['addTime']
      ? this.offsetUtCTime(output['addTime'], headers['time-zone'])
      : '';
    return output;
  }
  async create(menuItem: Menu, headers: any): Promise<Menu> {
    if (!headers['time-zone']) {
      throw new BadRequestException(`Missing UTC header.`);
    }
    if (!headers['user-id']) {
      throw new BadRequestException(`Missing user id header.`);
    }
    const newMenuItem = this.menuRepository.create(
      this.camelCaseToSnakeCase(menuItem),
    );

    const user = Number(headers['user-id']);
    // const number = Number(headers['time-zone'].split('UTC+')[1]);
    // const utcOffset =
    //   Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
    newMenuItem['id'] = undefined;
    newMenuItem['add_master'] = user;
    newMenuItem['add_time'] = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    newMenuItem['change_master'] = user;
    newMenuItem['change_time'] = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    const output = this.snakeCaseToCamelCase(
      await this.menuRepository.save(newMenuItem),
    ) as Menu;

    output['changeTime'] = output['changeTime']
      ? this.offsetUtCTime(output['changeTime'], headers['time-zone'])
      : '';
    output['addTime'] = output['addTime']
      ? this.offsetUtCTime(output['addTime'], headers['time-zone'])
      : '';
    return output;
  }
  async update(id: string, updateMenu: Menu, headers: any) {
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
    if (targetMenu) {
      const updateMenuTemp = this.camelCaseToSnakeCase(updateMenu);
      for (const key in updateMenuTemp) {
        if (key !== 'id') {
          targetMenu[key] = updateMenuTemp[key];
        }
      }
      targetMenu['change_master'] = user;
      targetMenu['change_time'] = moment
        .utc()
        // .utcOffset(utcOffset)
        .format('YYYY-MM-DD HH:mm:ss');

      const output = this.snakeCaseToCamelCase(
        await this.menuRepository.save(targetMenu),
      ) as Menu;
      output['changeTime'] = output['changeTime']
        ? this.offsetUtCTime(output['changeTime'], headers['time-zone'])
        : '';
      output['addTime'] = output['addTime']
        ? this.offsetUtCTime(output['addTime'], headers['time-zone'])
        : '';
      return output;
    } else {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
  }
  camelCaseToSnakeCase(targetMenu: Menu) {
    return Object.keys(targetMenu).reduce((acc, key) => {
      const wantKey = snakeCase(key);
      acc[wantKey] = targetMenu[key];
      return acc;
    }, {});
  }
  snakeCaseToCamelCase(targetMenu: Menu) {
    return Object.keys(targetMenu).reduce((acc, key) => {
      const wantKey = camelCase(key);
      acc[wantKey] = targetMenu[key];
      return acc;
    }, {});
  }
  offsetUtCTime(time, timeZone: string) {
    const number = Number(timeZone.split('UTC')[1]);
    return moment(time).add(number, 'hours').format('YYYY-MM-DD HH:mm:ss');
  }
}
