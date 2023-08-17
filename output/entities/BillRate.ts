import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_rate", { schema: "ecloud_rick" })
export class BillRate {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("varchar", { name: "rate", length: 10 })
  rate: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
