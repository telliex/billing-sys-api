/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-10 10:41:15
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-14 06:39:35
 */
import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../entity/menu.entity';
import * as moment from 'moment';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}
  // private menus: Menu[] = [
  // {
  //   id: '00094545-d268-41d2-afda-a2fa613478bb',
  //   type: 'Page',
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
  //   status: true,
  //   addMaster: 0,
  //   addTime: '2023-03-13T06:59:55',
  //   changeMaster: 0,
  //   changeTime: '2023-03-13T06:59:55',
  // },
  // ];Menu
  async findAll(): Promise<Menu[]> {
    console.log('utc:', moment.utc().format('YYYY-MM-DD HH:mm:ss'));
    console.log(
      'utc+:',
      moment.utc().utcOffset('+08').format('YYYY-MM-DD HH:mm:ss'),
    );
    return await this.menuRepository.find();
  }
  async findOne(id: string): Promise<Menu | null> {
    const targetMenu = await this.menuRepository.findOneBy({ id });
    if (!targetMenu) {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
    return targetMenu;
  }
  async remove(id: string): Promise<Menu | null> {
    const targetMenu = await this.menuRepository.findOneBy({ id });
    if (!targetMenu) {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
    await this.menuRepository.delete(id);
    return targetMenu;
  }
  async create(menuItem: Menu, headers: any): Promise<Menu> {
    console.log('headers:', headers);
    const user = Number(headers['user-id']);
    const number = Number(headers['time-zone'].split('UTC+')[1]);
    const utcOffset =
      Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
    const newMenuItem = new Menu();
    for (const key in menuItem) {
      if (key !== 'id') {
        newMenuItem[key] = menuItem[key];
      }
    }
    newMenuItem['add_master'] = user;
    newMenuItem['add_time'] = moment
      .utc()
      .utcOffset(utcOffset)
      .format('YYYY-MM-DD HH:mm:ss');
    newMenuItem['change_master'] = user;
    newMenuItem['change_time'] = moment
      .utc()
      .utcOffset(utcOffset)
      .format('YYYY-MM-DD HH:mm:ss');
    return await this.menuRepository.save(newMenuItem);
  }
  async update(id: string, updateMenuDto: Menu, headers: any) {
    const user = Number(headers['user-id']);
    const number = Number(headers['time-zone'].split('UTC+')[1]);
    const utcOffset =
      Math.floor(number / 10) === 0 ? `+0${number}:00` : `+${number}:00`;
    const targetMenu = await this.menuRepository.findOneBy({ id });
    console.log('targetMenu:', targetMenu);
    if (targetMenu) {
      for (const key in updateMenuDto) {
        if (key !== 'id') {
          targetMenu[key] = updateMenuDto[key];
        }
      }
      targetMenu['change_master'] = user;
      targetMenu['change_time'] = moment
        .utc()
        .utcOffset(utcOffset)
        .format('YYYY-MM-DD HH:mm:ss');
      await this.menuRepository.save(targetMenu);
      return targetMenu;
    } else {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
  }
  // cover(id: string, coverMenuDto: Menu) {
  //   const targetMenu = await this.menuRepository.findOneBy({ id });
  //   if (targetMenu) {
  //     this.menus[menuIndex] = coverMenuDto;
  //   } else {
  //     throw new NotFoundException(`The menu #${id} is not found.`);
  //   }
  // }
}
