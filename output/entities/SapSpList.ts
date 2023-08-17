import { Column, Entity, Index } from "typeorm";

@Index("billperiod", ["billPeriod"], {})
@Entity("sap_sp_list", { schema: "ecloud_rick" })
export class SapSpList {
  @Column("int", {
    name: "report_close",
    comment: "對應至report_log id",
    default: () => "'0'",
  })
  reportClose: number;

  @Column("varchar", {
    primary: true,
    name: "bill_period",
    comment: "帳單月份",
    length: 10,
  })
  billPeriod: string;

  @Column("varchar", { name: "cno", comment: "客戶編號(MGT)", length: 20 })
  cno: string;

  @Column("varchar", {
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

  @Column("varchar", { name: "purchase_term", comment: "購買期限", length: 20 })
  purchaseTerm: string;

  @Column("decimal", { name: "recurring_hourly_fee", precision: 9, scale: 5 })
  recurringHourlyFee: string;

  @Column("varchar", {
    name: "savingsplans_type",
    comment: "SP分類",
    length: 40,
  })
  savingsplansType: string;

  @Column("decimal", {
    name: "upfront_fee",
    comment: "預付費用",
    precision: 17,
    scale: 2,
  })
  upfrontFee: string;

  @Column("decimal", {
    name: "utilization_percentage",
    comment: "使用率",
    precision: 9,
    scale: 5,
  })
  utilizationPercentage: string;

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
    name: "used_commitment",
    comment: "使用承諾費用",
    precision: 17,
    scale: 2,
  })
  usedCommitment: string;

  @Column("decimal", {
    name: "unused_commitment",
    comment: "未使用承諾費用",
    precision: 17,
    scale: 2,
  })
  unusedCommitment: string;

  @Column("varchar", { primary: true, name: "savingsplan_arn", length: 255 })
  savingsplanArn: string;

  @Column("varchar", { name: "payeraccount_id", comment: "付款ID", length: 20 })
  payeraccountId: string;

  @Column("varchar", {
    name: "payeraccount_list",
    nullable: true,
    comment: "付款ID歷程",
    length: 255,
  })
  payeraccountList: string | null;
}
