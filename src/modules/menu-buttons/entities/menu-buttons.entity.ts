import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bill_system_menu_buttons')
export class MenuButtons {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: 'button name', type: 'varchar', width: 255, nullable: false })
    button_name: string;

    @Column({ comment: 'description', type: 'varchar', width: 255, default: '', nullable: true })
    description: string;

    @Column({ comment: 'description', type: 'varchar', width: 255, default: '', nullable: true })
    belong_menu: string;

    @Column({ comment: 'permission', type: 'varchar', width: 100, default: '', nullable: true })
    permission: string;

    @Column({ comment: 'show', type: 'tinyint', width: 1, default: 0, nullable: false })
    is_show: number;

    @Column({ comment: 'status', type: 'tinyint', width: 1, default: 0, nullable: false })
    status: number;

    @Column({ comment: 'who added', type: 'int', width: 11 })
    add_master: number;

    @Column({ comment: 'who added by name', type: 'varchar', width: 255, nullable: false })
    add_master_name: string;

    @Column('datetime')
    add_time: string;

    @Column({ comment: 'who changed by number', type: 'int', width: 11 })
    change_master: number;

    @Column({ comment: 'who changed by name', type: 'varchar', width: 255, nullable: false })
    change_master_name: string;

    @Column('datetime')
    change_time: string;
}
