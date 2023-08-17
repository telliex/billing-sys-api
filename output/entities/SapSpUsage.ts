import { Column, Entity, Index } from "typeorm";

@Index("billperiod", ["billPeriod"], {})
@Entity("sap_sp_usage", { schema: "ecloud_rick" })
export class SapSpUsage {
  @Column("int", {
    name: "report_close",
    comment: "對應至report_log id",
    default: () => "'0'",
  })
  reportClose: number;

  @Column("varchar", { name: "leadger_country", comment: "帳本國", length: 3 })
  leadgerCountry: string;

  @Column("varchar", { name: "cno", comment: "客戶編號(MGT)", length: 20 })
  cno: string;

  @Column("varchar", { name: "sap_cno", comment: "客戶編號(SAP)", length: 15 })
  sapCno: string;

  @Column("varchar", { name: "cname", comment: "客戶名稱", length: 100 })
  cname: string;

  @Column("int", { primary: true, name: "id", comment: "AWS帳單明細ID" })
  id: number;

  @Column("varchar", { name: "bill_period", comment: "帳單月份", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_customer", comment: "客戶主檔ID" })
  billCustomer: number;

  @Column("varchar", { name: "linkedaccountid", comment: "帳號ID", length: 20 })
  linkedaccountid: string;

  @Column("varchar", { name: "settle_dept", comment: "結算部門", length: 8 })
  settleDept: string;

  @Column("varchar", { name: "bill_product", comment: "產品", length: 20 })
  billProduct: string;

  @Column("text", { name: "usage_type", comment: "產品小項" })
  usageType: string;

  @Column("varchar", { name: "lineitem_type", comment: "金額類別", length: 30 })
  lineitemType: string;

  @Column("text", { name: "item_description", comment: "產品細項" })
  itemDescription: string;

  @Column("varchar", { name: "ri_usage_description", length: 40 })
  riUsageDescription: string;

  @Column("decimal", {
    name: "totalcost",
    comment: "總成本(客戶付款給AWS)",
    precision: 17,
    scale: 2,
  })
  totalcost: string;

  @Column("decimal", {
    name: "realcost_include_upfront",
    precision: 17,
    scale: 2,
  })
  realcostIncludeUpfront: string;

  @Column("decimal", { name: "sp_amortizing", precision: 17, scale: 2 })
  spAmortizing: string;

  @Column("decimal", { name: "costsavings", precision: 17, scale: 2 })
  costsavings: string;

  @Column("decimal", {
    name: "revenue",
    comment: "收入",
    precision: 17,
    scale: 2,
  })
  revenue: string;

  @Column("decimal", {
    name: "originalcost",
    comment: "原始成本(牌價)",
    precision: 17,
    scale: 2,
  })
  originalcost: string;

  @Column("decimal", { name: "profit", precision: 17, scale: 2 })
  profit: string;

  @Column("varchar", { name: "savingsplan_arn", length: 255 })
  savingsplanArn: string;

  @Column("varchar", { name: "sp_buy_cno", length: 20 })
  spBuyCno: string;

  @Column("varchar", { name: "sp_buy_cname", length: 100 })
  spBuyCname: string;

  @Column("varchar", { name: "sp_bill_period", length: 10 })
  spBillPeriod: string;

  @Column("varchar", { name: "sp_buy_account", length: 20 })
  spBuyAccount: string;

  @Column("varchar", { name: "sp_buy_account_settle_dept", length: 8 })
  spBuyAccountSettleDept: string;

  @Column("text", { name: "sp_buy_account_name" })
  spBuyAccountName: string;

  @Column("varchar", { name: "paymentoption", comment: "付款方式", length: 20 })
  paymentoption: string;

  @Column("decimal", {
    name: "upfront_fee",
    comment: "預付費用",
    precision: 17,
    scale: 2,
  })
  upfrontFee: string;

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

  @Column("varchar", { name: "payeraccount_id", comment: "付款ID", length: 20 })
  payeraccountId: string;
}
