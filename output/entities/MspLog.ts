import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_log", { schema: "ecloud_rick" })
export class MspLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "project", length: 20 })
  project: string;

  @Column("varchar", { name: "action", length: 20 })
  action: string;

  @Column("varchar", { name: "region_cron", length: 20 })
  regionCron: string;

  @Column("varchar", { name: "cron", length: 30 })
  cron: string;

  @Column("text", { name: "conf" })
  conf: string;
}
