import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_conf", { schema: "ecloud_rick" })
export class MspConf {
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

  @Column("varchar", { name: "start_date", length: 30 })
  startDate: string;

  @Column("varchar", { name: "cron", length: 30 })
  cron: string;

  @Column("text", { name: "conf" })
  conf: string;

  @Column("float", { name: "keepdays", precision: 12 })
  keepdays: number;

  @Column("varchar", { name: "cross_region", length: 30 })
  crossRegion: string;

  @Column("int", { name: "cross_region_keepdays" })
  crossRegionKeepdays: number;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
