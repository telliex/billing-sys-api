import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('mars_system_department')
export class Department extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Expose({ name: 'parentDept' })
    @Column({
        comment: 'parent dept id',
        primary: false,
        name: 'parent_dept',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    parentDept: string;

    @Expose({ name: 'deptName' })
    @Column({
        comment: '',
        primary: false,
        name: 'dept_name',
        type: 'varchar',
        // length: 1,
        width: 255,
        unique: false,
        nullable: false,
        default: null,
    })
    dept_name: string;

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
    // @Column({ comment: 'parent dept id', type: 'varchar', width: 36, default: '', nullable: false })
    // parent_dept: string;

    // @Column({ comment: 'dept name', type: 'varchar', width: 255, nullable: false })
    // dept_name: string;

    // @Column({ comment: 'order level', type: 'int', width: 11, default: 0, nullable: false })
    // order_no: number;

    // @Column({ comment: 'remark', type: 'varchar', width: 255, default: '', nullable: true })
    // remark: string;

    // @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    // status: number;

    // @Column({ comment: 'who added', type: 'int', width: 11 })
    // add_master: number;

    // @Column({ comment: 'who added by name', type: 'varchar', width: 255, nullable: false })
    // add_master_name: string;

    // @Column('datetime')
    // add_time: string;

    // @Column({ comment: 'who changed', type: 'int', width: 11 })
    // change_master: number;

    // @Column({ comment: 'who changed by name', type: 'varchar', width: 255, nullable: false })
    // change_master_name: string;

    // @Column('datetime')
    // change_time: string;

    // @OneToMany((type) => Role, (role) => role.user)
    // roles: Role[];
}
