import { Column, Entity } from "typeorm";

@Entity("Ples", { schema: "ecloud_rick" })
export class Ples {
  @Column("varchar", { name: "CustomerName", nullable: true, length: 100 })
  customerName: string | null;

  @Column("varchar", { name: "Description", nullable: true, length: 100 })
  description: string | null;

  @Column("varchar", {
    name: "ChargeAllocationMethod",
    nullable: true,
    length: 100,
  })
  chargeAllocationMethod: string | null;

  @Column("varchar", { name: "ChargeAccountId", nullable: true, length: 100 })
  chargeAccountId: string | null;

  @Column("varchar", { name: "Marketplace", nullable: true, length: 100 })
  marketplace: string | null;

  @Column("varchar", { name: "ProductId", nullable: true, length: 100 })
  productId: string | null;

  @Column("varchar", { name: "TotalAWSCharges", nullable: true, length: 100 })
  totalAwsCharges: string | null;

  @Column("varchar", { name: "SupportCharges", nullable: true, length: 100 })
  supportCharges: string | null;

  @Column("varchar", {
    name: "TotalSupportCharges",
    nullable: true,
    length: 100,
  })
  totalSupportCharges: string | null;

  @Column("varchar", {
    name: "SupportChargePercentage",
    nullable: true,
    length: 100,
  })
  supportChargePercentage: string | null;

  @Column("varchar", { name: "AccountId", nullable: true, length: 100 })
  accountId: string | null;

  @Column("varchar", { name: "PayerAccountId", nullable: true, length: 100 })
  payerAccountId: string | null;

  @Column("varchar", {
    name: "AccountTotalCharges",
    nullable: true,
    length: 100,
  })
  accountTotalCharges: string | null;

  @Column("varchar", {
    name: "AccountProratedCharges",
    nullable: true,
    length: 100,
  })
  accountProratedCharges: string | null;

  @Column("varchar", {
    name: "AccountTotalSeconds",
    nullable: true,
    length: 100,
  })
  accountTotalSeconds: string | null;

  @Column("varchar", {
    name: "AccountBillableSeconds",
    nullable: true,
    length: 100,
  })
  accountBillableSeconds: string | null;

  @Column("varchar", { name: "AccountRICharges", nullable: true, length: 100 })
  accountRiCharges: string | null;

  @Column("varchar", { name: "AccountSPCharges", nullable: true, length: 100 })
  accountSpCharges: string | null;

  @Column("varchar", {
    name: "AccountLinkPeriods",
    nullable: true,
    length: 100,
  })
  accountLinkPeriods: string | null;

  @Column("varchar", {
    name: "AccountSubscriptionPeriods",
    nullable: true,
    length: 100,
  })
  accountSubscriptionPeriods: string | null;

  @Column("varchar", { name: "BillMonth", nullable: true, length: 100 })
  billMonth: string | null;
}
