import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    // UpdateDateColumn,
    // CreateDateColumn,
} from 'typeorm';

@Entity('bill_system_role')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: 'role name', type: 'varchar', width: 255, nullable: false })
    role_name: string;

    @Column({ comment: 'role value', type: 'varchar', width: 255, nullable: false })
    role_value: string;

    @Column({ comment: 'remark', type: 'varchar', width: 255, default: '', nullable: true })
    remark: string;

    @Column({
        comment: 'menu permission',
        type: 'varchar',
        width: 100,
        default: '',
        nullable: true,
    })
    menu_permission: string;

    @Column({ comment: 'order level', type: 'int', width: 11, default: 0, nullable: false })
    order_no: number;

    @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    status: number;

    @Column({ comment: 'who added', type: 'int', width: 11 })
    add_master: number;

    @Column('datetime')
    add_time: string;

    @Column({ comment: 'who changed', type: 'int', width: 11 })
    change_master: number;

    @Column('datetime')
    change_time: string;
}
