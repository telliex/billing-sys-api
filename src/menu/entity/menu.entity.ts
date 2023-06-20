/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-13 04:49:27
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-20 05:58:45
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // CreateDateColumn,
  // UpdateDateColumn,
} from 'typeorm';

@Entity('bill_system_menu')
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', width: 11, default: 'Page' })
  type: string;
  @Column({ type: 'varchar', width: 255, nullable: false })
  menu_name: string;
  @Column({ type: 'varchar', width: 255, default: '' })
  description: string;
  @Column({ type: 'varchar', width: 100, default: '' })
  permission: string;
  @Column({ type: 'varchar', width: 255, default: '' })
  component: string;
  @Column({ type: 'varchar', width: 100, default: '' })
  component_name: string;
  @Column({ type: 'varchar', width: 500, default: '' })
  rout_path: string;
  @Column({ type: 'int', width: 11, default: 0 })
  order_no: number;
  @Column({ type: 'varchar', width: 50, default: '' })
  icon: string;
  @Column({ type: 'varchar', width: 36, default: '' })
  parent_menu: string;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_ext: number;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_cache: number;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_show: number;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  status: number;
  @Column({ type: 'int', width: 11 })
  add_master: number;
  @Column('datetime')
  add_time: string;
  @Column({ type: 'int', width: 11 })
  change_master: number;
  @Column('datetime')
  change_time: string;
}

// export class MenuDto extends OmitType(Menu, [] as const) {}
