import { Expose, Type } from 'class-transformer';
import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { Role } from '../../role/entities/role.entity';

import { User } from './user.entity';

@Entity('mars_system_user_role_mapping')
export class UserRoleMapping extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Expose({ name: 'systemUserId' })
    @Column({
        comment: '',
        primary: false,
        // name: 'system_user_id',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    system_user_id: string;

    @Expose({ name: 'systemRoleId' })
    @Column({
        comment: '',
        primary: false,
        // name: 'system_role_id',
        type: 'varchar',
        // length: 1,
        width: 36,
        unique: false,
        nullable: false,
        default: null,
    })
    system_role_id: string;

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

    @ManyToOne(() => User, (user) => user.roles)
    @JoinColumn({ name: 'system_user_id' })
    user: User;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: 'system_role_id' })
    role: Role;
}
