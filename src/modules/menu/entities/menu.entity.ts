import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
} from 'typeorm';

import { MenuItemType } from '../../content/constants';

import { MenuRoleMapping } from './menu.role.mapping.entity';

@Entity({ name: 'mars_system_menu' })
export class Menu extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Expose()
    @Column({
        comment: '0=>catalog, 1=>page, 2=>button',
        primary: false,
        name: 'type',
        type: 'tinyint',
        // length: 1,
        width: 1,
        unique: false,
        nullable: false,
        default: MenuItemType.PAGE,
    })
    type: MenuItemType;

    @Expose({ name: 'menuName' })
    @Column({
        comment: '',
        primary: false,
        name: 'menu_name',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: true,
        nullable: false,
        default: null,
    })
    menu_name: string;

    // @Column({ comment: 'menu alias name', type: 'varchar', width: 255, nullable: false })
    // alias: string;

    // @Column({ comment: 'menu cache name', type: 'varchar', width: 255, nullable: false })
    // cache_name: string;
    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'description',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    description: string;

    // FE
    // @Column({ comment: 'permission', type: 'varchar', width: 100, default: '', nullable: true })
    // permission: string;
    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'component',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    component: string;

    @Expose({ name: 'componentName' })
    @Column({
        comment: '',
        primary: false,
        name: 'component_name',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    component_name: string;

    @Expose({ name: 'routePath' })
    @Column({
        comment: '',
        primary: false,
        name: 'route_path',
        type: 'varchar',
        // length: 1,
        width: 500,
        unique: false,
        nullable: true,
        default: null,
    })
    route_path: string;

    @Expose({ name: 'sortNo' })
    @Column({
        comment: '',
        primary: false,
        name: 'sort_no',
        type: 'int',
        // length: 100,
        width: 100,
        unique: false,
        nullable: false,
        default: 0,
    })
    sort_no: number; // order_no

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'icon',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    icon: string;

    @Expose({ name: 'parentMenu' })
    @Column({
        comment: '',
        primary: false,
        name: 'parent_menu',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: false,
        nullable: true,
        default: null,
    })
    parent_menu: string;

    @Expose({ name: 'isExt' })
    @Column({
        comment: '',
        primary: false,
        name: 'is_ext',
        type: 'tinyint',
        // length: 1,
        width: 1,
        unique: false,
        nullable: false,
        default: 0,
    })
    is_ext: number;

    // @Column({ comment: 'if has cache', type: 'tinyint', width: 1, default: 0, nullable: false })
    // is_cache: number;

    // @Column({ comment: 'show', type: 'tinyint', width: 1, default: 0, nullable: false })
    // is_show: number;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'status',
        type: 'tinyint',
        // length: 1,
        width: 1,
        unique: false,
        nullable: false,
        default: 0,
    })
    status: number;

    // @Column({ comment: 'menu button groups', type: 'varchar', nullable: true })
    // menu_buttons: string;

    @Expose({ name: 'addMaster' })
    @Column({
        comment: '',
        primary: false,
        name: 'add_master',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    add_master: string;

    // @Column({ comment: 'who added by name', type: 'varchar', width: 255, nullable: false })
    // add_master_name: string;

    @Expose({ name: 'addTime' })
    @Type(() => Date)
    @CreateDateColumn({
        comment: '',
        primary: false,
        name: 'add_time',
        type: 'datetime',
        // length: 1,
        // width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    add_time: Date;

    @Expose({ name: 'changeMaster' })
    @Column({
        comment: '',
        primary: false,
        name: 'change_master',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    change_master: string;

    // @Column({ comment: 'who changed by name', type: 'varchar', width: 255, nullable: false })
    // change_master_name: string;

    @Expose({ name: 'changeTime' })
    @Type(() => Date)
    @UpdateDateColumn({
        comment: '',
        primary: false,
        name: 'change_time',
        type: 'datetime',
        // length: 1,
        // width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    change_time: Date;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'hide',
        type: 'tinyint',
        // length: 1,
        width: 1,
        unique: false,
        nullable: false,
        default: 0,
    })
    hide: number;

    @OneToMany(() => MenuRoleMapping, (mapping) => mapping.menu)
    roles: MenuRoleMapping[];
}

// export class MenuDto extends OmitType(Menu, [] as const) {}
