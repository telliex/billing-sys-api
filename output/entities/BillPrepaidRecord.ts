import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ix_bill_inv_period_customer", ["billPeriod"], {})
@Entity("bill_prepaid_record", { schema: "ecloud_rick" })
export class BillPrepaidRecord {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "bill_period", length: 7 })
  billPeriod: string;

  @Column("int", { name: "group_id" })
  groupId: number;

  @Column("smallint", {
    name: "record_type",
    nullable: true,
    comment: "1: system add 2: accounting upload",
    default: () => "'1'",
  })
  recordType: number | null;

  @Column("datetime", {
    name: "billing_date",
    nullable: true,
    comment: "立帳日 前台顯示Date",
  })
  billingDate: Date | null;

  @Column("datetime", { name: "add_time", nullable: true })
  addTime: Date | null;

  @Column("datetime", { name: "change_time", nullable: true })
  changeTime: Date | null;

  @Column("int", { name: "add_master", nullable: true })
  addMaster: number | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string | null;

  @Column("text", { name: "comment_text", nullable: true })
  commentText: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "0: 尚未審核 , 1:會計審核通過, -1 刪除/隱藏",
    default: () => "'0'",
  })
  status: number | null;
}
