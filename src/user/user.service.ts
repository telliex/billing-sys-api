/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-10 10:55:06
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-11 14:34:15
 */
import { NotFoundException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  private users: User[] = [
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
    return this.users;
  }
  findOne(id: number) {
    const targetUser = this.users.find((item) => item.id === id);
    if (!targetUser) {
      throw new NotFoundException(`The user #${id} is not found.`);
    }
    return targetUser;
  }
  remove(id: number) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
      return `user ${id} has deleted.`;
    } else {
      throw new NotFoundException(`The user #${id} is not found.`);
    }
  }
  create(userItem: User) {
    this.users.push(userItem);
    return 'user item has created.';
  }
  update(id: number, updateUserDto: User) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    if (userIndex) {
      for (const key in updateUserDto) {
        this.users[userIndex][key] = updateUserDto[key];
      }
      return `user ${id} has updated.`;
    } else {
      throw new NotFoundException(`The user #${id} is not found.`);
    }
  }
  cover(id: number, coverUserDto: User) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    if (userIndex) {
      this.users[userIndex] = coverUserDto;
      return `user ${id} has updated.`;
    } else {
      throw new NotFoundException(`The user #${id} is not found.`);
    }
  }
}
