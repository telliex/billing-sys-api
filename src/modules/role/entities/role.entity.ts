import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    // UpdateDateColumn,
    // CreateDateColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity('bill_system_role')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: 'role name', type: 'varchar', length: 255, nullable: false })
    role_name: string;

    @Column({ comment: 'role value', type: 'varchar', length: 255, nullable: false })
    role_value: string;

    @Column({ comment: 'remark', type: 'varchar', length: 255, default: '', nullable: true })
    remark: string;

    @Column({
        comment: 'menu permission',
        type: 'varchar',
        length: 20000,
        default: '',
        nullable: true,
    })
    menu_permission: string;

    @Column({ comment: 'order level', type: 'int', default: 0, nullable: false })
    order_no: number;

    @Column({ comment: 'status', type: 'tinyint', default: 0, nullable: false })
    status: number;

    @Column({ comment: 'who added', type: 'int' })
    add_master: number;

    @Column({ comment: 'who added by name', type: 'varchar', length: 255, nullable: false })
    add_master_name: string;

    @Column('datetime')
    add_time: string;

    @Column({ comment: 'who changed', type: 'int' })
    change_master: number;

    @Column({ comment: 'who changed by name', type: 'varchar', length: 255, nullable: false })
    change_master_name: string;

    @Column('datetime')
    change_time: string;

    @ManyToOne((type) => User, (user) => user.roles)
    user: User;
}
