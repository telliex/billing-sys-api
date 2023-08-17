import { Column, Entity } from "typeorm";

@Entity("bill_customer_finance", { schema: "ecloud_rick" })
export class BillCustomerFinance {
  @Column("int", { primary: true, name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", {
    name: "leadger_country",
    nullable: true,
    comment: "帳本國 TW, HK, CN",
    length: 3,
  })
  leadgerCountry: string | null;

  @Column("char", {
    name: "customer_type",
    nullable: true,
    comment: "客戶型態 S,D; S:SI, D:Direct account",
    length: 1,
  })
  customerType: string | null;

  @Column("char", {
    name: "invoice_month",
    nullable: true,
    comment: "DEFAULT 0:本月開, 1:下月開, 2:預收 ",
    length: 1,
    default: () => "'0'",
  })
  invoiceMonth: string | null;

  @Column("int", {
    name: "invoice_merge_no",
    nullable: true,
    comment: "DEFAULT 0 分別開, else 合併開(cno)",
    default: () => "'0'",
  })
  invoiceMergeNo: number | null;

  @Column("decimal", {
    name: "reserve_amount",
    nullable: true,
    comment: "預收餘額",
    precision: 10,
    scale: 2,
  })
  reserveAmount: string | null;

  @Column("varchar", {
    name: "settle_date",
    nullable: true,
    comment: "結帳日期",
    length: 2,
  })
  settleDate: string | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 20 })
  changeTime: string | null;
}
