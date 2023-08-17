import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_poc_alert", { schema: "ecloud_rick" })
export class BillPocAlert {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "send_time", nullable: true })
  sendTime: Date | null;

  @Column("smallint", { name: "level" })
  level: number;

  @Column("decimal", {
    name: "budget",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  budget: string | null;

  @Column("decimal", { name: "totalmoney", precision: 10, scale: 2 })
  totalmoney: string;

  @Column("int", { name: "customer_id" })
  customerId: number;

  @Column("varchar", { name: "cno", length: 10 })
  cno: string;

  @Column("varchar", { name: "LinkedAccountId", length: 20 })
  linkedAccountId: string;
}
