import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bill_system_dict_detail')
export class DictDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: 'dict name', type: 'varchar', length: 255, nullable: false })
    dict_id: string;

    @Column({ comment: 'dict item name', type: 'varchar', length: 255, nullable: false })
    dict_item_name: string;

    @Column({ comment: 'dict item value', type: 'varchar', length: 255, nullable: false })
    dict_item_value: string;

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
