import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    // UpdateDateColumn,
    // CreateDateColumn,
} from 'typeorm';

import { Role } from '../../role/entities/role.entity';

@Entity('bill_system_user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: 'MGT number', type: 'int', width: 10, nullable: false })
    mgt_number: number;

    @Column({ comment: 'user name', type: 'varchar', width: 255, nullable: false })
    user_name: string;

    @Column({ comment: 'real name', type: 'varchar', width: 255, nullable: false })
    real_name: string;

    @Column({ comment: 'nickname', type: 'varchar', width: 255, nullable: false })
    nickname: string;

    @Column({ comment: 'Email', type: 'varchar', width: 255, nullable: false })
    email: string;

    @Column({ comment: 'avatar', type: 'varchar', width: 255, default: '', nullable: true })
    avatar: string;

    @Column({
        comment: 'remark',
        type: 'varchar',
        width: 255,
        default: '',
        nullable: true,
    })
    remark: string;

    @Column({ comment: 'password', type: 'varchar', width: 255, nullable: false })
    password: string;

    @Column({ comment: 'token', type: 'varchar', width: 255, nullable: false })
    token: string;

    @Column({ comment: 'dept', type: 'varchar', width: 255, default: '', nullable: true })
    dept: string;

    @Column({
        comment: 'homePath',
        type: 'varchar',
        width: 255,
        default: '',
        nullable: true,
    })
    home_path: string;

    @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    status: number;

    @Column({ comment: 'if removed', type: 'tinyint', width: 1, default: 0, nullable: false })
    isRemoved: number;

    @Column({ comment: 'who added', type: 'int', width: 11 })
    add_master: number;

    @Column({ comment: 'who added by name', type: 'varchar', width: 255, nullable: false })
    add_master_name: string;

    @Column('datetime')
    add_time: string;

    @Column({ comment: 'who changed', type: 'int', width: 11 })
    change_master: number;

    @Column({ comment: 'who changed by name', type: 'varchar', width: 255, nullable: false })
    change_master_name: string;

    @Column('datetime')
    change_time: string;

    @OneToMany((type) => Role, (role) => role.user)
    roles: Role[];
}