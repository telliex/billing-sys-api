import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

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

    @Expose({ name: 'sex' })
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

    @Expose({ name: 'birthday' })
    @Column({
        comment: '',
        primary: false,
        name: 'birthday',
        type: 'date',
        // length: 1,
        width: 1,
        unique: false,
        nullable: true,
        default: null,
    })
    birthday: Date;

    @Expose({ name: 'tel' })
    @Column({
        comment: '',
        primary: false,
        name: 'tel',
        type: 'varchar',
        // length: 1,
        width: 40,
        unique: false,
        nullable: true,
        default: null,
    })
    tel: string;

    @Expose({ name: 'mobile' })
    @Column({
        comment: '',
        primary: false,
        name: 'mobile',
        type: 'varchar',
        // length: 1,
        width: 40,
        unique: false,
        nullable: true,
        default: null,
    })
    mobile: string;

    @Expose({ name: 'email' })
    @Column({
        comment: '',
        primary: false,
        name: 'email',
        type: 'varchar',
        // length: 1,
        width: 40,
        unique: true,
        nullable: false,
        default: null,
    })
    email: string;

    @Expose({ name: 'address' })
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

    @Expose({ name: 'country' })
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

    // @Column({ comment: 'MGT number', type: 'int', width: 10, nullable: false })
    // mgt_number: number;

    // @Column({ comment: 'user name', type: 'varchar', width: 255, nullable: false })
    // user_name: string; // MGT keyname

    // @Column({ comment: 'real name', type: 'varchar', width: 255, nullable: false })
    // real_name: string; //

    // @Column({ comment: 'nickname', type: 'varchar', width: 255, nullable: false })
    // nickname: string;

    // @Column({ comment: 'keyname', type: 'varchar', width: 255, nullable: false })
    // keyname: string;

    // @Column({ comment: 'avatar', type: 'varchar', width: 255, default: null, nullable: true })
    // avatar: string;

    // @Column({
    //     comment: 'remark',
    //     type: 'varchar',
    //     width: 255,
    //     default: '',
    //     nullable: true,
    // })
    // remark: string;

    // @Column({ comment: 'password', type: 'varchar', width: 255, nullable: false })
    // password: string; // MGT keypassword

    // @Column({ comment: 'keypassword', type: 'varchar', width: 255, nullable: false })
    // keypassword: string; // MGT keypassword

    // @Column({ comment: 'token', type: 'varchar', width: 255, nullable: false })
    // token: string;

    // @Column({ comment: 'role string', type: 'varchar', length: 10000, nullable: false })
    // roles_string: string;

    // @Column({ comment: 'dept', type: 'varchar', width: 255, default: '', nullable: false })
    // dept: string;

    // @Column({
    //     comment: 'dept',
    //     type: 'varchar',
    //     width: 255,
    //     default: 'ECloudValley',
    //     nullable: false,
    // })
    // company: string;

    // @Column({ comment: 'dept', type: 'varchar', width: 255, default: 'CRS', nullable: false })
    // platform: string;

    // @Column({
    //     comment: 'homePath',
    //     type: 'varchar',
    //     width: 255,
    //     default: '',
    //     nullable: true,
    // })
    // home_path: string;

    // @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    // status: number;

    // @Column({ comment: 'if removed', type: 'tinyint', width: 1, default: 0, nullable: false })
    // isRemoved: number;

    // @Column({ comment: 'who added', type: 'int', width: 11 })
    // add_master: number;

    // @Column({ comment: 'who added by name', type: 'varchar', width: 255, nullable: false })
    // add_master_name: string;

    // @Column('datetime')
    // add_time: string;

    // @Column({ type: 'datetime', nullable: true, default: null })
    // last_active_time: string;

    // @Column({ comment: 'who changed', type: 'int', width: 11 })
    // change_master: number;

    // @Column({ comment: 'who changed by name', type: 'varchar', width: 255, nullable: false })
    // change_master_name: string;

    // @Column('datetime')
    // change_time: string;

    // @OneToMany((type) => Role, (role) => role.user)
    // roles: Role[];
}
