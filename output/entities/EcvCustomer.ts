import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ecv_customer", { schema: "ecloud_rick" })
export class EcvCustomer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_customer" })
  changeCustomer: number;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("int", { name: "ecloud_sales" })
  ecloudSales: number;

  @Column("varchar", { name: "keyname", length: 50 })
  keyname: string;

  @Column("varchar", { name: "keypassword", length: 20 })
  keypassword: string;

  @Column("varchar", { name: "keypassword_time", length: 10 })
  keypasswordTime: string;

  @Column("varchar", { name: "family", length: 10 })
  family: string;

  @Column("char", { name: "family_admin", length: 1 })
  familyAdmin: string;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "contact", length: 50 })
  contact: string;

  @Column("varchar", { name: "contact_email", length: 100 })
  contactEmail: string;

  @Column("varchar", { name: "overdue_email", length: 100 })
  overdueEmail: string;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "tel", length: 20 })
  tel: string;

  @Column("varchar", { name: "mobile", length: 20 })
  mobile: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("text", { name: "gui_contact" })
  guiContact: string;

  @Column("text", { name: "gui_tel" })
  guiTel: string;

  @Column("text", { name: "gui_email_invoice1" })
  guiEmailInvoice1: string;

  @Column("text", { name: "gui_email_invoice2" })
  guiEmailInvoice2: string;

  @Column("text", { name: "gui_email_invoice3" })
  guiEmailInvoice3: string;

  @Column("text", { name: "gui_email_einv" })
  guiEmailEinv: string;

  @Column("text", { name: "gui_address" })
  guiAddress: string;

  @Column("text", { name: "gui_memo" })
  guiMemo: string;

  @Column("char", { name: "gui_pending", length: 1, default: () => "'y'" })
  guiPending: string;

  @Column("varchar", { name: "LinkedAccountId", length: 20 })
  linkedAccountId: string;

  @Column("text", { name: "LinkedAccountName" })
  linkedAccountName: string;

  @Column("text", { name: "TaxationAddress" })
  taxationAddress: string;

  @Column("varchar", { name: "cno", comment: "客戶編號", length: 10 })
  cno: string;

  @Column("varchar", { name: "cname", nullable: true, length: 100 })
  cname: string | null;

  @Column("varchar", { name: "ubn", comment: "統一編號", length: 20 })
  ubn: string;

  @Column("varchar", { name: "sap_cno", nullable: true, length: 12 })
  sapCno: string | null;

  @Column("char", { name: "business_support_pl", nullable: true, length: 1 })
  businessSupportPl: string | null;

  @Column("varchar", { name: "business_support", length: 10 })
  businessSupport: string;

  @Column("decimal", { name: "business_support_rate", precision: 6, scale: 4 })
  businessSupportRate: string;

  @Column("int", { name: "business_support_mincharge" })
  businessSupportMincharge: number;

  @Column("int", { name: "discount_period" })
  discountPeriod: number;

  @Column("decimal", {
    name: "discount",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  discount: string;

  @Column("char", { name: "SIAccount", length: 1, default: () => "'n'" })
  siAccount: string;

  @Column("char", { name: "msp", length: 1, default: () => "'n'" })
  msp: string;

  @Column("char", { name: "msp_backup", length: 1, default: () => "'n'" })
  mspBackup: string;

  @Column("float", { name: "min_charge", precision: 12, default: () => "'0'" })
  minCharge: number;

  @Column("varchar", { name: "deadline", length: 10 })
  deadline: string;

  @Column("varchar", { name: "account", length: 20 })
  account: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("varbinary", { name: "secret", nullable: true, length: 255 })
  secret: Buffer | null;

  @Column("varbinary", { name: "accesskey", nullable: true, length: 255 })
  accesskey: Buffer | null;

  @Column("int", { name: "partnerLead" })
  partnerLead: number;

  @Column("float", {
    name: "alert_avg_high",
    precision: 12,
    default: () => "'2'",
  })
  alertAvgHigh: number;

  @Column("float", {
    name: "alert_avg_low",
    precision: 12,
    default: () => "'0.5'",
  })
  alertAvgLow: number;

  @Column("float", {
    name: "alert_max_multiplier",
    precision: 12,
    default: () => "'1.2'",
  })
  alertMaxMultiplier: number;

  @Column("float", {
    name: "alert_min_multiplier",
    precision: 12,
    default: () => "'0.8'",
  })
  alertMinMultiplier: number;

  @Column("float", {
    name: "alert_absolute_high",
    precision: 12,
    default: () => "'1000000'",
  })
  alertAbsoluteHigh: number;

  @Column("float", {
    name: "alert_absolute_low",
    precision: 12,
    default: () => "'0.0000001'",
  })
  alertAbsoluteLow: number;

  @Column("smallint", {
    name: "alert_activity",
    comment: "0:off,1:on",
    default: () => "'1'",
  })
  alertActivity: number;

  @Column("int", { name: "alert_budget", nullable: true })
  alertBudget: number | null;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;

  @Column("varchar", { name: "PayerAccountId", nullable: true, length: 20 })
  payerAccountId: string | null;

  @Column("varchar", { name: "exchange_type", nullable: true, length: 3 })
  exchangeType: string | null;

  @Column("decimal", {
    name: "tax_rate",
    nullable: true,
    comment: "營業稅率",
    precision: 3,
    scale: 3,
  })
  taxRate: string | null;

  @Column("varchar", {
    name: "currency",
    nullable: true,
    comment: "幣別  NTD:台幣/ USD:美金/ HKD:港幣/ RMB:人民幣",
    length: 5,
  })
  currency: string | null;

  @Column("varchar", { name: "currency_pay", nullable: true, length: 5 })
  currencyPay: string | null;

  @Column("varchar", {
    name: "bill_format",
    nullable: true,
    comment: "帳單格式  P:pdf/ E:excel/ C:csv",
    length: 1,
  })
  billFormat: string | null;

  @Column("varchar", {
    name: "bill_detail",
    nullable: true,
    comment: "營業稅率",
    length: 1,
  })
  billDetail: string | null;

  @Column("varchar", {
    name: "country",
    nullable: true,
    comment: "國家  tw/hk/cn",
    length: 3,
  })
  country: string | null;

  @Column("varchar", { name: "leadger_country", nullable: true, length: 3 })
  leadgerCountry: string | null;

  @Column("varchar", {
    name: "service_level",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  serviceLevel: string | null;

  @Column("char", { name: "customer_type", nullable: true, length: 1 })
  customerType: string | null;

  @Column("char", { name: "invoice_month", nullable: true, length: 1 })
  invoiceMonth: string | null;

  @Column("int", { name: "invoice_merge_no", nullable: true })
  invoiceMergeNo: number | null;

  @Column("decimal", {
    name: "reserve_amount",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  reserveAmount: string | null;

  @Column("varchar", { name: "settle_date", nullable: true, length: 2 })
  settleDate: string | null;

  @Column("varchar", { name: "settle_dept", nullable: true, length: 30 })
  settleDept: string | null;

  @Column("tinyint", { name: "ava_rpt", nullable: true, width: 1 })
  avaRpt: boolean | null;

  @Column("tinyint", { name: "inv_rpt", nullable: true, width: 1 })
  invRpt: boolean | null;

  @Column("tinyint", { name: "per_rpt", nullable: true, width: 1 })
  perRpt: boolean | null;

  @Column("tinyint", { name: "sec_rpt", nullable: true, width: 1 })
  secRpt: boolean | null;

  @Column("tinyint", { name: "rs_rpt", width: 1 })
  rsRpt: boolean;

  @Column("varchar", { name: "cn_tax", nullable: true, length: 45 })
  cnTax: string | null;

  @Column("tinyint", { name: "cpu_rpt", nullable: true, width: 1 })
  cpuRpt: boolean | null;

  @Column("char", { name: "auto_invoice", length: 1, default: () => "'n'" })
  autoInvoice: string;

  @Column("char", { name: "auto_billing_rpt", length: 1, default: () => "'n'" })
  autoBillingRpt: string;

  @Column("varchar", { name: "bank_name", nullable: true, length: 150 })
  bankName: string | null;

  @Column("varchar", { name: "bank_swift_code", nullable: true, length: 40 })
  bankSwiftCode: string | null;

  @Column("varchar", { name: "bank_account_no", nullable: true, length: 40 })
  bankAccountNo: string | null;

  @Column("varchar", { name: "bank_account_name", nullable: true, length: 100 })
  bankAccountName: string | null;
}
