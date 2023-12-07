import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { Role } from '../../role/entities/role.entity';

import { Menu } from './menu.entity';

@Entity({ name: 'mars_system_menu_role_mapping' })
export class MenuRoleMapping extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Expose({ name: 'systemMenuId' })
    @Column({
        comment: '',
        primary: false,
        name: 'system_menu_id',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: true,
        nullable: false,
        default: null,
    })
    system_menu_id: string;

    @Expose({ name: 'systemRoleId' })
    @Column({
        comment: '',
        primary: true,
        name: 'system_role_id',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: true,
        nullable: false,
        default: null,
    })
    system_role_id: string;

    @ManyToOne(() => Menu)
    @JoinColumn({ name: 'system_menu_id' })
    menu: Menu;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'system_role_id' })
    role: Role;

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
}

// export class MenuDto extends OmitType(Menu, [] as const) {}
