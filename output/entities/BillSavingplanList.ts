import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("linkedaccountid", ["linkedaccountid"], {})
@Index("bill_period", ["billPeriod"], {})
@Index("SavingsPlanARN", ["savingsPlanArn"], {})
@Index("PayerAccountId", ["payerAccountId"], {})
@Index("bill_period_and_SP_ARN_IDX", ["billPeriod", "savingsPlanArn"], {})
@Index(
  "bill_period_and_SP_ARN_and_payeraccount_IDX",
  ["payerAccountId", "billPeriod", "savingsPlanArn"],
  {}
)
@Entity("bill_savingplan_list", { schema: "ecloud_rick" })
export class BillSavingplanList {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "PayerAccountId", length: 20 })
  payerAccountId: string;

  @Column("varchar", { name: "linkedaccountid", nullable: true, length: 20 })
  linkedaccountid: string | null;

  @Column("text", { name: "LinkedAccountName" })
  linkedAccountName: string;

  @Column("varchar", { name: "bill_period", nullable: true, length: 20 })
  billPeriod: string | null;

  @Column("varchar", { name: "StartDateTime", nullable: true, length: 30 })
  startDateTime: string | null;

  @Column("varchar", { name: "EndDateTime", nullable: true, length: 30 })
  endDateTime: string | null;

  @Column("varchar", { name: "HourlyCommitment", nullable: true, length: 20 })
  hourlyCommitment: string | null;

  @Column("varchar", { name: "InstanceFamily", nullable: true, length: 20 })
  instanceFamily: string | null;

  @Column("varchar", { name: "PaymentOption", nullable: true, length: 20 })
  paymentOption: string | null;

  @Column("varchar", { name: "PurchaseTerm", nullable: true, length: 20 })
  purchaseTerm: string | null;

  @Column("varchar", { name: "RecurringHourlyFee", nullable: true, length: 20 })
  recurringHourlyFee: string | null;

  @Column("varchar", { name: "Region", nullable: true, length: 100 })
  region: string | null;

  @Column("varchar", { name: "SavingsPlanARN", nullable: true, length: 255 })
  savingsPlanArn: string | null;

  @Column("varchar", { name: "SavingsPlansType", nullable: true, length: 40 })
  savingsPlansType: string | null;

  @Column("varchar", { name: "UpfrontFee", nullable: true, length: 20 })
  upfrontFee: string | null;

  @Column("varchar", { name: "TotalCommitment", nullable: true, length: 20 })
  totalCommitment: string | null;

  @Column("varchar", { name: "UsedCommitment", nullable: true, length: 20 })
  usedCommitment: string | null;

  @Column("varchar", { name: "UnusedCommitment", nullable: true, length: 20 })
  unusedCommitment: string | null;

  @Column("varchar", {
    name: "UtilizationPercentage",
    nullable: true,
    length: 40,
  })
  utilizationPercentage: string | null;

  @Column("varchar", { name: "NetSavings", nullable: true, length: 20 })
  netSavings: string | null;

  @Column("varchar", {
    name: "OnDemandCostEquivalent",
    nullable: true,
    length: 20,
  })
  onDemandCostEquivalent: string | null;

  @Column("varchar", {
    name: "AmortizedRecurringCommitment",
    nullable: true,
    length: 20,
  })
  amortizedRecurringCommitment: string | null;

  @Column("varchar", {
    name: "AmortizedUpfrontCommitment",
    nullable: true,
    length: 20,
  })
  amortizedUpfrontCommitment: string | null;

  @Column("varchar", {
    name: "TotalAmortizedCommitment",
    nullable: true,
    length: 20,
  })
  totalAmortizedCommitment: string | null;

  @Column("datetime", {
    name: "create_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;
}
