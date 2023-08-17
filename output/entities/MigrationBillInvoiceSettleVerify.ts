import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_bill_invoice_settle_verify_bill_close_IDX", ["billClose"], {})
@Entity("migration_bill_invoice_settle_verify", { schema: "ecloud_rick" })
export class MigrationBillInvoiceSettleVerify {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "ecloud_sales", nullable: true, length: 50 })
  ecloudSales: string | null;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("varchar", { name: "bill_period_text", length: 40 })
  billPeriodText: string;

  @Column("varchar", { name: "payer_account_id", length: 20 })
  payerAccountId: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("text", { name: "linked_account_name" })
  linkedAccountName: string;

  @Column("text", { name: "taxation_address" })
  taxationAddress: string;

  @Column("varchar", { name: "cno", length: 10 })
  cno: string;

  @Column("varchar", { name: "cname", length: 30 })
  cname: string;

  @Column("varchar", { name: "ubn", length: 20 })
  ubn: string;

  @Column("varchar", { name: "currency", nullable: true, length: 5 })
  currency: string | null;

  @Column("decimal", { name: "bill_rate", precision: 15, scale: 7 })
  billRate: string;

  @Column("decimal", { name: "totalmoney", precision: 10, scale: 2 })
  totalmoney: string;

  @Column("varchar", { name: "business_support", length: 10 })
  businessSupport: string;

  @Column("decimal", { name: "business_support_exec", precision: 8, scale: 2 })
  businessSupportExec: string;

  @Column("decimal", {
    name: "business_support_pl",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  businessSupportPl: string | null;

  @Column("decimal", { name: "totalmoney_discount", precision: 10, scale: 2 })
  totalmoneyDiscount: string;

  @Column("decimal", {
    name: "discount_rate",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  discountRate: string | null;

  @Column("decimal", {
    name: "discount",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discount: string | null;

  @Column("decimal", {
    name: "min_charge",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  minCharge: string;

  @Column("decimal", { name: "totalmoney1", precision: 10, scale: 2 })
  totalmoney1: string;

  @Column("decimal", { name: "tax", precision: 8, scale: 2 })
  tax: string;

  @Column("decimal", { name: "sum", precision: 10, scale: 2 })
  sum: string;

  @Column("decimal", {
    name: "sumrate",
    comment: "本期應繳總金額",
    precision: 17,
    scale: 2,
  })
  sumrate: string;

  @Column("varchar", { name: "deadline", length: 10 })
  deadline: string;

  @Column("decimal", { name: "data_process", precision: 10, scale: 2 })
  dataProcess: string;

  @Column("decimal", { name: "data_storage", precision: 10, scale: 2 })
  dataStorage: string;

  @Column("text", { name: "gui_email_einv", nullable: true })
  guiEmailEinv: string | null;

  @Column("varchar", { name: "leadger_country", nullable: true, length: 3 })
  leadgerCountry: string | null;

  @Column("char", { name: "invoice_month", nullable: true, length: 1 })
  invoiceMonth: string | null;

  @Column("int", { name: "invoice_merge_no", nullable: true })
  invoiceMergeNo: number | null;

  @Column("varchar", { name: "settle_date", nullable: true, length: 2 })
  settleDate: string | null;

  @Column("varchar", { name: "settle_dept", nullable: true, length: 30 })
  settleDept: string | null;

  @Column("varchar", { name: "serial_no", nullable: true, length: 12 })
  serialNo: string | null;

  @Column("decimal", {
    name: "digital_tax",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  digitalTax: string | null;

  @Column("decimal", { name: "cb_fee", nullable: true, precision: 8, scale: 2 })
  cbFee: string | null;

  @Column("int", { name: "bill_close", nullable: true })
  billClose: number | null;
}
