import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_bill_item_sap_cost_verify_bill_close_IDX", ["billClose"], {})
@Entity("migration_bill_item_sap_cost_verify", { schema: "ecloud_rick" })
export class MigrationBillItemSapCostVerify {
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

  @Column("int", { name: "invoice_merge_no", nullable: true })
  invoiceMergeNo: number | null;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "sap_cno", length: 20, default: () => "'na'" })
  sapCno: string;

  @Column("decimal", {
    name: "weight_range",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  weightRange: string | null;

  @Column("varchar", { name: "settle_date", length: 2, default: () => "'na'" })
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

  @Column("int", { name: "sap_doc_num_cost", nullable: true })
  sapDocNumCost: number | null;

  @Column("decimal", { name: "realcost", precision: 22, scale: 7 })
  realcost: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "payer_account_id", length: 20 })
  payerAccountId: string;

  @Column("varchar", {
    name: "payer_account_country",
    length: 20,
    default: () => "'na'",
  })
  payerAccountCountry: string;

  @Column("int", { name: "bill_customer", comment: "bill_customer.id" })
  billCustomer: number;

  @Column("text", { name: "bill_customer_list" })
  billCustomerList: string;

  @Column("decimal", {
    name: "refund",
    nullable: true,
    precision: 15,
    scale: 7,
    default: () => "'0.0000000'",
  })
  refund: string | null;

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
}
