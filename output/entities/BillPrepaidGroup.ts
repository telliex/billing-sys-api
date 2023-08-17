import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_prepaid_group", { schema: "ecloud_rick" })
export class BillPrepaidGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "cno", length: 10 })
  cno: string;

  @Column("varchar", { name: "group_name", length: 50 })
  groupName: string;

  @Column("smallint", {
    name: "group_type",
    nullable: true,
    comment: "1: prepaid, 2: deposit ",
    default: () => "'1'",
  })
  groupType: number | null;

  @Column("decimal", { name: "alert_amount", precision: 18, scale: 2 })
  alertAmount: string;

  @Column("varchar", { name: "currency_pay", nullable: true, length: 10 })
  currencyPay: string | null;

  @Column("datetime", { name: "add_time", nullable: true })
  addTime: Date | null;

  @Column("datetime", { name: "change_time", nullable: true })
  changeTime: Date | null;

  @Column("int", { name: "add_master", nullable: true })
  addMaster: number | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("text", { name: "comment_text", nullable: true })
  commentText: string | null;

  @Column("text", { name: "notify_mail", nullable: true })
  notifyMail: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "0: 尚未審核 , 1:審核通過, -1 刪除/隱藏",
    default: () => "'0'",
  })
  status: number | null;
}
