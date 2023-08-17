import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_exchange", { schema: "ecloud_rick" })
export class BillExchange {
  @PrimaryGeneratedColumn({ type: "int", name: "ex_id" })
  exId: number;

  @Column("varchar", { name: "ex_currency", nullable: true, length: 3 })
  exCurrency: string | null;

  @Column("varchar", { name: "ex_type", nullable: true, length: 4 })
  exType: string | null;

  @Column("datetime", { name: "ex_date", nullable: true })
  exDate: Date | null;

  @Column("decimal", {
    name: "ex_rate",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  exRate: string | null;

  @Column("datetime", { name: "change_time", nullable: true })
  changeTime: Date | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("char", { name: "hide", nullable: true, length: 1 })
  hide: string | null;
}
