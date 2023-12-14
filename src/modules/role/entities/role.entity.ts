import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
} from 'typeorm';

import { MenuRoleMapping } from '../../menu/entities/menu.role.mapping.entity';
import { UserRoleMapping } from '../../user/entities/user.role.mapping.entity';

@Entity('mars_system_role')
export class Role extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Expose({ name: 'roleName' })
    @Column({
        comment: '',
        primary: false,
        name: 'role_name',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: true,
        nullable: false,
        default: null,
    })
    role_name: string;

    @Expose({ name: 'remark' })
    @Column({
        comment: '',
        primary: false,
        name: 'remark',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    remark: string;

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
        name: 'status',
        type: 'tinyint',
        // length: 1,
        width: 1,
        unique: false,
        nullable: false,
        default: 0,
    })
    status: number;

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

    // @ManyToOne((type) => User, (user) => user.roles)
    // user: User;
    @OneToMany(() => MenuRoleMapping, (mapping) => mapping.role)
    menus: MenuRoleMapping[];

    @OneToMany(() => UserRoleMapping, (mapping) => mapping.role)
    users: UserRoleMapping[];
}
