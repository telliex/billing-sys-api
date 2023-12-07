import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

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
}

// import {
//     Entity,
//     Column,
//     PrimaryGeneratedColumn,
//     ManyToOne,
//     // UpdateDateColumn,
//     // CreateDateColumn,
// } from 'typeorm';

// import { User } from '../../user/entities/user.entity';

// @Entity('bill_system_role')
// export class Role {
//     @PrimaryGeneratedColumn('uuid')
//     id: string;

//     @Column({ comment: 'role name', type: 'varchar', length: 255, nullable: false })
//     role_name: string;

//     @Column({ comment: 'role value', type: 'varchar', length: 255, nullable: false })
//     role_value: string;

//     @Column({ comment: 'remark', type: 'varchar', length: 255, default: '', nullable: true })
//     remark: string;

//     @Column({
//         comment: 'menu permission',
//         type: 'text',
//         nullable: true,
//     })
//     menu_permission: string;

//     @Column({ comment: 'order level', type: 'int', default: 0, nullable: false })
//     order_no: number;

//     @Column({ comment: 'status', type: 'tinyint', default: 0, nullable: false })
//     status: number;

//     @Column({ comment: 'who added', type: 'int' })
//     add_master: number;

//     @Column({ comment: 'who added by name', type: 'varchar', length: 255, nullable: false })
//     add_master_name: string;

//     @Column('datetime')
//     add_time: string;

//     @Column({ comment: 'who changed', type: 'int' })
//     change_master: number;

//     @Column({ comment: 'who changed by name', type: 'varchar', length: 255, nullable: false })
//     change_master_name: string;

//     @Column('datetime')
//     change_time: string;

//     @ManyToOne((type) => User, (user) => user.roles)
//     user: User;
// }
