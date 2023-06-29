import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    // UpdateDateColumn,
    // CreateDateColumn,
} from 'typeorm';

import { MenuItemType } from '../../modules/content/constants';

@Entity('bill_system_menu')
export class Menu {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        comment: 'menu type',
        type: 'enum',
        enum: MenuItemType,
        default: MenuItemType.PAGE,
        nullable: false,
    })
    type: MenuItemType;

    @Column({ comment: 'menu name', type: 'varchar', width: 255, nullable: false })
    menu_name: string;

    @Column({ comment: 'menu name', type: 'varchar', width: 255, nullable: false })
    alias: string;

    @Column({ comment: 'description', type: 'varchar', width: 255, default: '', nullable: true })
    description: string;

    @Column({ comment: 'permission', type: 'varchar', width: 100, default: '', nullable: true })
    permission: string;

    @Column({ comment: 'component', type: 'varchar', width: 255, default: '', nullable: true })
    component: string;

    @Column({ comment: 'component name', type: 'varchar', width: 100, default: '', nullable: true })
    component_name: string;

    @Column({ comment: 'path', type: 'varchar', width: 500, default: '', nullable: true })
    rout_path: string;

    @Column({ comment: 'order level', type: 'int', width: 11, default: 0, nullable: false })
    order_no: number;

    @Column({ comment: 'icon name', type: 'varchar', width: 50, default: '', nullable: true })
    icon: string;

    @Column({ comment: 'parent menu id', type: 'varchar', width: 36, default: '', nullable: false })
    parent_menu: string;

    @Column({ comment: 'if has ext-link', type: 'tinyint', width: 1, default: 0, nullable: false })
    is_ext: number;

    @Column({ comment: 'if has cache', type: 'tinyint', width: 1, default: 0, nullable: false })
    is_cache: number;

    @Column({ comment: 'show', type: 'tinyint', width: 1, default: 0, nullable: false })
    is_show: number;

    @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    status: number;

    @Column({ comment: 'who added', type: 'int', width: 11 })
    add_master: number;

    @Column('datetime')
    add_time: string;
    // @CreateDateColumn({ comment: 'created date' })
    // add_time: Date;

    @Column({ comment: 'who changed', type: 'int', width: 11 })
    change_master: number;

    @Column('datetime')
    change_time: string;
    // @UpdateDateColumn({ comment: 'change date' })
    // change_time: Date;
}

// export class MenuDto extends OmitType(Menu, [] as const) {}
