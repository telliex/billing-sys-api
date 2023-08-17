import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_rate_list", { schema: "ecloud_rick" })
export class BillRateList {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "currency", length: 5 })
  currency: string;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("decimal", { name: "rate", nullable: true, precision: 15, scale: 7 })
  rate: string | null;

  @Column("varchar", { name: "exchange_type", nullable: true, length: 10 })
  exchangeType: string | null;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
