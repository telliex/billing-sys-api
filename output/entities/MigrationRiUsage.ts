import { Column, Entity, Index } from "typeorm";

@Index("billperiod", ["billPeriod"], {})
@Entity("migration_ri_usage", { schema: "ecloud_rick" })
export class MigrationRiUsage {
  @Column("int", { primary: true, name: "id", comment: "項目明細表ID" })
  id: number;

  @Column("varchar", { name: "leadger_country", comment: "帳本國", length: 3 })
  leadgerCountry: string;

  @Column("varchar", { name: "bill_period", comment: "帳單月份", length: 10 })
  billPeriod: string;

  @Column("varchar", { name: "payeraccount_id", comment: "付款ID", length: 20 })
  payeraccountId: string;

  @Column("int", { name: "bill_customer", comment: "客戶主檔ID" })
  billCustomer: number;

  @Column("varchar", { name: "linkedaccountid", comment: "帳號ID", length: 20 })
  linkedaccountid: string;

  @Column("varchar", { name: "cno", comment: "客戶編號(MGT)", length: 20 })
  cno: string;

  @Column("varchar", {
    name: "sap_cno",
    nullable: true,
    comment: "客戶編號(SAP)",
    length: 15,
  })
  sapCno: string | null;

  @Column("varchar", { name: "settle_dept", comment: "結算部門", length: 8 })
  settleDept: string;

  @Column("varchar", { name: "cname", comment: "客戶名稱(MGT)", length: 100 })
  cname: string;

  @Column("text", { name: "linkedaccount_name", comment: "帳號名稱" })
  linkedaccountName: string;

  @Column("varchar", {
    name: "ecloud_sales_name",
    comment: "ECV業務員名稱",
    length: 100,
  })
  ecloudSalesName: string;

  @Column("varchar", { name: "bill_product", comment: "產品ID", length: 20 })
  billProduct: string;

  @Column("varchar", {
    name: "bill_product_name",
    comment: "產品名稱",
    length: 200,
  })
  billProductName: string;

  @Column("decimal", {
    name: "originalcost",
    comment: "原始成本(牌價)",
    precision: 17,
    scale: 2,
  })
  originalcost: string;

  @Column("decimal", {
    name: "realcost",
    comment: "成本(客戶實際使用的成本)",
    precision: 17,
    scale: 2,
  })
  realcost: string;

  @Column("decimal", { name: "costsavings", precision: 17, scale: 2 })
  costsavings: string;

  @Column("decimal", {
    name: "revenue",
    comment: "收入",
    precision: 17,
    scale: 2,
  })
  revenue: string;

  @Column("decimal", { name: "profit", precision: 17, scale: 2 })
  profit: string;

  @Column("varchar", {
    name: "ri_usage_description",
    comment: "RI使用分類",
    length: 40,
  })
  riUsageDescription: string;

  @Column("decimal", {
    name: "rebate_rate",
    comment: "退傭率",
    precision: 17,
    scale: 2,
  })
  rebateRate: string;

  @Column("decimal", {
    name: "estimate_rebate",
    comment: "退傭金額",
    precision: 17,
    scale: 2,
  })
  estimateRebate: string;

  @Column("varchar", { name: "is_c0_use_hk_ri", length: 1 })
  isC0UseHkRi: string;

  @Column("varchar", { name: "subscription_id", length: 20 })
  subscriptionId: string;

  @Column("decimal", {
    name: "ri_amortizing",
    comment: "RI分攤金額",
    precision: 17,
    scale: 2,
  })
  riAmortizing: string;

  @Column("varchar", {
    name: "ri_buy_account",
    comment: "購買RI 帳號ID",
    length: 20,
  })
  riBuyAccount: string;

  @Column("varchar", {
    name: "ri_buy_cno",
    comment: "購買RI 客戶編號",
    length: 20,
  })
  riBuyCno: string;

  @Column("varchar", {
    name: "ri_buy_account_settle_dept",
    comment: "購買RI 帳號ID結算部門",
    length: 8,
  })
  riBuyAccountSettleDept: string;
}
