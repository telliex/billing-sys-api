import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cost_report_idx", ["linkedAccountId", "region", "instanceId"], {})
@Entity("msp_instances", { schema: "ecloud_rick" })
export class MspInstances {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "region", length: 20 })
  region: string;

  @Column("varchar", { name: "service", length: 30 })
  service: string;

  @Column("varchar", { name: "instance_id", length: 255 })
  instanceId: string;

  @Column("varchar", { name: "instance_type", length: 20 })
  instanceType: string;

  @Column("varchar", { name: "tags", length: 50 })
  tags: string;

  @Column("varchar", { name: "platform", length: 30 })
  platform: string;

  @Column("varchar", { name: "database_engine", length: 20 })
  databaseEngine: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("varchar", { name: "start_date", length: 30 })
  startDate: string;

  @Column("varchar", { name: "end_date", length: 30 })
  endDate: string;
}
