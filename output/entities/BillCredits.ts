import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ix_bill_item_period", ["billPeriod"], {})
@Entity("bill_credits", { schema: "ecloud_rick" })
export class BillCredits {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("varchar", { name: "linkedaccountid", length: 20 })
  linkedaccountid: string;

  @Column("decimal", { name: "credits", precision: 16, scale: 6 })
  credits: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
