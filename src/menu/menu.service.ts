/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-10 10:41:15
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-11 16:34:54
 */
import { NotFoundException, Injectable } from '@nestjs/common';
import { Menu } from './entities/menu.entity';
@Injectable()
export class MenuService {
  private menus: Menu[] = [
    {
      add_master: 144,
      add_time: '2023-06-10',
      address: '台北市忠孝東路一段1號',
      birthday: '2000-06-10',
      change_master: 144,
      change_time: '2023-06-10',
      country: 'TW',
      email: 'Gladys@gmail.com',
      family: '',
      hide: 'Y',
      id: 1,
      keyname: 'Gladys',
      keypassword: '123456',
      keypassword_time: '2023-06-10',
      leave: 'Y',
      memo: 'This is Gladys',
      mobile: '09123456789',
      name: 'Gladys',
      role_id: '144',
      sap_emp_no: '1123456789',
      sex: 'F',
      tel: '',
      title: '',
    },
  ];
  findAll() {
    return this.menus;
  }
  findOne(id: number) {
    const targetMenu = this.menus.find((item) => item.id === id);
    if (!targetMenu) {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
    return targetMenu;
  }
  remove(id: number) {
    const menuIndex = this.menus.findIndex((item) => item.id === id);
    if (menuIndex >= 0) {
      this.menus.splice(menuIndex, 1);
      return `menu ${id} has deleted.`;
    } else {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
  }
  create(menuItem: Menu) {
    this.menus.push(menuItem);
    return 'menu item has created.';
  }
  update(id: number, updateMenuDto: Menu) {
    const menuIndex = this.menus.findIndex((item) => item.id === id);
    if (menuIndex) {
      for (const key in updateMenuDto) {
        this.menus[menuIndex][key] = updateMenuDto[key];
      }
      return `menu ${id} has updated.`;
    } else {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
  }
  cover(id: number, coverMenuDto: Menu) {
    const menuIndex = this.menus.findIndex((item) => item.id === id);
    if (menuIndex) {
      this.menus[menuIndex] = coverMenuDto;
      return `menu ${id} has updated.`;
    } else {
      throw new NotFoundException(`The menu #${id} is not found.`);
    }
  }
}
