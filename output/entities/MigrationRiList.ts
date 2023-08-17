import { Column, Entity, Index } from "typeorm";

@Index("billperiod", ["billPeriod"], {})
@Entity("migration_ri_list", { schema: "ecloud_rick" })
export class MigrationRiList {
  @Column("varchar", { name: "bill_period", comment: "帳單月份", length: 10 })
  billPeriod: string;

  @Column("varchar", { name: "bill_product", comment: "產品ID", length: 20 })
  billProduct: string;

  @Column("varchar", { name: "cno", comment: "客戶編號(MGT)", length: 20 })
  cno: string;

  @Column("varchar", {
    primary: true,
    name: "linkedaccount_id",
    comment: "帳號ID",
    length: 20,
  })
  linkedaccountId: string;

  @Column("text", { name: "linkedaccount_name", comment: "帳號名稱" })
  linkedaccountName: string;

  @Column("datetime", { name: "start_datetime", comment: "合約開始時間" })
  startDatetime: Date;

  @Column("datetime", { name: "end_datetime", comment: "合約結束時間" })
  endDatetime: Date;

  @Column("decimal", {
    name: "hourly_commitment",
    comment: "每小時承諾費用",
    precision: 9,
    scale: 5,
  })
  hourlyCommitment: string;

  @Column("varchar", {
    name: "payment_option",
    comment: "付款方式",
    length: 20,
  })
  paymentOption: string;

  @Column("varchar", { name: "purchase_term", comment: "合約年限", length: 20 })
  purchaseTerm: string;

  @Column("decimal", { name: "recurring_hourly_fee", precision: 9, scale: 5 })
  recurringHourlyFee: string;

  @Column("decimal", {
    name: "upfront_fee",
    comment: "預付費用",
    precision: 17,
    scale: 2,
  })
  upfrontFee: string;

  @Column("varchar", { primary: true, name: "subscription_id", length: 20 })
  subscriptionId: string;

  @Column("varchar", { name: "payeraccount_id", comment: "付款ID", length: 20 })
  payeraccountId: string;

  @Column("decimal", {
    name: "amortized_upfront_commitment",
    comment: "預付承諾費用",
    precision: 17,
    scale: 2,
  })
  amortizedUpfrontCommitment: string;

  @Column("decimal", {
    name: "amortized_recurring_commitment",
    comment: "非預付承諾費用",
    precision: 17,
    scale: 2,
  })
  amortizedRecurringCommitment: string;

  @Column("decimal", {
    name: "total_commitment",
    comment: "全部承諾費用",
    precision: 17,
    scale: 2,
  })
  totalCommitment: string;

  @Column("decimal", {
    name: "unused_commitment",
    comment: "未使用承諾費用",
    precision: 17,
    scale: 2,
  })
  unusedCommitment: string;

  @Column("decimal", {
    name: "used_commitment",
    comment: "使用承諾費用",
    precision: 17,
    scale: 2,
    default: () => "'0.00'",
  })
  usedCommitment: string;

  @Column("decimal", {
    name: "utilization_percentage",
    comment: "使用率",
    precision: 9,
    scale: 5,
    default: () => "'0.00000'",
  })
  utilizationPercentage: string;
}
