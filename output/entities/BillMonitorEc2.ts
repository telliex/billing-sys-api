import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_monitor_ec2", { schema: "ecloud_rick" })
export class BillMonitorEc2 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "instance_id", length: 15 })
  instanceId: string;

  @Column("varchar", { name: "volume_id", length: 15 })
  volumeId: string;

  @Column("text", { name: "url" })
  url: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
