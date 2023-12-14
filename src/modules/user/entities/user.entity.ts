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

import { UserRoleMapping } from './user.role.mapping.entity';

@Entity('mars_system_user')
export class User extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Expose({ name: 'displayName' })
    @Column({
        comment: '',
        primary: false,
        name: 'display_name',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: false,
        default: null,
    })
    display_name: string;

    @Expose({ name: 'avatar' })
    @Column({
        comment: '',
        primary: false,
        name: 'avatar',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    avatar: string;

    @Expose({ name: 'password' })
    @Column({
        comment: '',
        primary: false,
        name: 'password',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: false,
        default: null,
    })
    password: string;

    @Expose({ name: 'apiToken' })
    @Column({
        comment: '',
        primary: false,
        name: 'api_token',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: false,
        default: null,
    })
    api_token: string;

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

    @Expose({ name: 'lastActiveTime' })
    @Type(() => Date)
    @UpdateDateColumn({
        comment: '',
        primary: false,
        name: 'last_active_time',
        type: 'datetime',
        // length: 1,
        // width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    last_active_time: Date;

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

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'sex',
        type: 'char',
        // length: 1,
        width: 1,
        unique: false,
        nullable: true,
        default: null,
    })
    sex: string;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'birthday',
        type: 'date',
        // length: 1,
        // width: 1,
        unique: false,
        nullable: true,
        default: null,
    })
    birthday: Date;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'tel',
        type: 'varchar',
        // length: 1,
        width: 20,
        unique: false,
        nullable: true,
        default: null,
    })
    tel: string;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'mobile',
        type: 'varchar',
        // length: 1,
        width: 20,
        unique: false,
        nullable: true,
        default: null,
    })
    mobile: string;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'email',
        type: 'varchar',
        // length: 1,
        width: 50,
        unique: true,
        nullable: false,
        default: null,
    })
    email: string;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'address',
        type: 'text',
        // length: 1,
        // width: 255,
        unique: false,
        nullable: true,
        default: null,
    })
    address: string;

    @Expose()
    @Column({
        comment: '',
        primary: false,
        name: 'country',
        type: 'varchar',
        // length: 1,
        width: 3,
        unique: false,
        nullable: true,
        default: null,
    })
    country: string;

    @Expose({ name: 'passwordTime' })
    @Column({
        comment: '',
        primary: false,
        name: 'password_time',
        type: 'datetime',
        // length: 1,
        // width: 1,
        unique: false,
        nullable: true,
        default: null,
    })
    password_time: Date;

    @OneToMany(() => UserRoleMapping, (mapping) => mapping.user)
    roles: UserRoleMapping[];
}
