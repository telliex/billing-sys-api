import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bill_system_department')
export class Department {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: 'parent dept id', type: 'varchar', width: 36, default: '', nullable: false })
    parent_dept: string;

    @Column({ comment: 'dept name', type: 'varchar', width: 255, nullable: false })
    dept_name: string;

    @Column({ comment: 'order level', type: 'int', width: 11, default: 0, nullable: false })
    order_no: number;

    @Column({ comment: 'remark', type: 'varchar', width: 255, default: '', nullable: true })
    remark: string;

    @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    status: number;

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

    // @OneToMany((type) => Role, (role) => role.user)
    // roles: Role[];
}
