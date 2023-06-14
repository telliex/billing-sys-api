import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', width: 11, default: 'Page' })
  type: string;
  @Column({ type: 'varchar', width: 255, nullable: false })
  name: string;
  @Column({ type: 'varchar', width: 255, default: '' }) n;
  description: string;
  @Column({ type: 'varchar', width: 255, default: '' })
  component: string;
  @Column({ type: 'varchar', width: 100, default: '' })
  component_name: string;
  @Column({ type: 'varchar', width: 500, default: '' })
  url: string;
  @Column({ type: 'int', width: 11, default: 0 })
  sort: number;
  @Column({ type: 'varchar', width: 50, default: '' })
  icon: string;
  @Column({ type: 'varchar', width: 36, default: '' })
  parent_id: string;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_external_link: boolean;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_cache: boolean;
  @Column({ type: 'tinyint', width: 1, default: 0 })
  status: boolean;
  @Column({ type: 'int', width: 11 })
  add_master: number;
  @Column('datetime')
  add_time: string;
  @Column({ type: 'int', width: 11 })
  change_master: number;
  @Column('datetime')
  change_time: string;
}

// export class MenuDto extends OmitType(Menu, [] as const) {}
