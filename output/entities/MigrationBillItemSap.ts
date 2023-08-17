import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_bill_item_sap_bill_close_IDX", ["billClose"], {})
@Index("period_close_customer", ["billPeriod", "billClose", "billCustomer"], {})
@Entity("migration_bill_item_sap", { schema: "ecloud_rick" })
export class MigrationBillItemSap {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_close", default: () => "'0'" })
  billClose: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", {
    name: "invoice_merge_no",
    nullable: true,
    comment: "bill_customer.invoice_merge_no",
  })
  invoiceMergeNo: number | null;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "sap_cno", length: 20 })
  sapCno: string;

  @Column("decimal", {
    name: "weight_range",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  weightRange: string | null;

  @Column("varchar", { name: "settle_date", length: 2 })
  settleDate: string;

  @Column("char", { name: "origin_data_flag", length: 1, default: () => "'y'" })
  originDataFlag: string;

  @Column("int", { name: "sap_doc_num", nullable: true })
  sapDocNum: number | null;

  @Column("char", { name: "invoice_flag", length: 1, default: () => "'n'" })
  invoiceFlag: string;

  @Column("decimal", { name: "bill_rate", precision: 15, scale: 7 })
  billRate: string;

  @Column("decimal", { name: "line_total", precision: 22, scale: 7 })
  lineTotal: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("int", { name: "bill_customer", comment: "bill_customer.id" })
  billCustomer: number;

  @Column("text", { name: "bill_customer_list" })
  billCustomerList: string;

  @Column("decimal", {
    name: "discount_amount",
    precision: 15,
    scale: 7,
    default: () => "'0.0000000'",
  })
  discountAmount: string;

  @Column("varchar", { name: "mgt_cno", length: 20 })
  mgtCno: string;

  @Column("varchar", { name: "customer_type", nullable: true, length: 1 })
  customerType: string | null;

  @Column("varchar", {
    name: "industry",
    nullable: true,
    comment: "bill_customer.industry，總共2位數，前方補0",
    length: 2,
  })
  industry: string | null;

  @Column("varchar", { name: "sub_org", length: 100 })
  subOrg: string;

  @Column("decimal", {
    name: "sumrate",
    comment: "本期應繳總金額",
    precision: 10,
    scale: 2,
  })
  sumrate: string;

  @Column("char", {
    name: "divide_bill_flag",
    comment: "y/n",
    length: 1,
    default: () => "'n'",
  })
  divideBillFlag: string;

  @Column("varchar", {
    name: "leadger_country",
    length: 3,
    default: () => "'na'",
  })
  leadgerCountry: string;

  @Column("decimal", {
    name: "over_short_price",
    nullable: true,
    precision: 22,
    scale: 7,
  })
  overShortPrice: string | null;
}
