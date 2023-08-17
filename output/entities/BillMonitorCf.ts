import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_monitor_cf", { schema: "ecloud_rick" })
export class BillMonitorCf {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("text", { name: "url" })
  url: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
