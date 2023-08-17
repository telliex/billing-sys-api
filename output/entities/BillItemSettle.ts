import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Index("bill_customer", ["billCustomer"], {})
@Index("bill_product", ["billProduct"], {})
@Index("ix_bill_item_settle_bill_period", ["billPeriod"], {})
@Entity("bill_item_settle", { schema: "ecloud_rick" })
export class BillItemSettle {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "linkedaccountid", nullable: true, length: 20 })
  linkedaccountid: string | null;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "PayerAccountId", length: 20 })
  payerAccountId: string;

  @Column("varchar", { name: "RateId", length: 10 })
  rateId: string;

  @Column("varchar", { name: "SubscriptionId", nullable: true, length: 20 })
  subscriptionId: string | null;

  @Column("varchar", {
    name: "SubscriptionId_origin",
    nullable: true,
    length: 20,
  })
  subscriptionIdOrigin: string | null;

  @Column("text", { name: "UsageType" })
  usageType: string;

  @Column("text", { name: "Operation" })
  operation: string;

  @Column("varchar", { name: "AvailabilityZone", nullable: true, length: 30 })
  availabilityZone: string | null;

  @Column("char", { name: "ReservedInstance", nullable: true, length: 1 })
  reservedInstance: string | null;

  @Column("varchar", { name: "ItemDescription", nullable: true, length: 256 })
  itemDescription: string | null;

  @Column("varchar", { name: "UsageStartDate", nullable: true, length: 30 })
  usageStartDate: string | null;

  @Column("varchar", { name: "UsageEndDate", nullable: true, length: 30 })
  usageEndDate: string | null;

  @Column("varchar", { name: "UsageQuantity", nullable: true, length: 40 })
  usageQuantity: string | null;

  @Column("varchar", { name: "BlendedRate", nullable: true, length: 40 })
  blendedRate: string | null;

  @Column("varchar", { name: "UnBlendedRate", nullable: true, length: 40 })
  unBlendedRate: string | null;

  @Column("varchar", { name: "Credits", nullable: true, length: 40 })
  credits: string | null;

  @Column("varchar", { name: "TotalCost", nullable: true, length: 40 })
  totalCost: string | null;

  @Column("varchar", { name: "UnitPrice", length: 30 })
  unitPrice: string;

  @Column("varchar", { name: "dop", length: 2 })
  dop: string;

  @Column("varchar", { name: "d01", nullable: true, length: 40 })
  d01: string | null;

  @Column("varchar", { name: "d02", nullable: true, length: 40 })
  d02: string | null;

  @Column("varchar", { name: "d03", nullable: true, length: 40 })
  d03: string | null;

  @Column("varchar", { name: "d04", nullable: true, length: 40 })
  d04: string | null;

  @Column("varchar", { name: "d05", nullable: true, length: 40 })
  d05: string | null;

  @Column("varchar", { name: "d06", nullable: true, length: 40 })
  d06: string | null;

  @Column("varchar", { name: "d07", nullable: true, length: 40 })
  d07: string | null;

  @Column("varchar", { name: "d08", nullable: true, length: 40 })
  d08: string | null;

  @Column("varchar", { name: "d09", nullable: true, length: 40 })
  d09: string | null;

  @Column("varchar", { name: "d10", nullable: true, length: 40 })
  d10: string | null;

  @Column("varchar", { name: "d11", nullable: true, length: 40 })
  d11: string | null;

  @Column("varchar", { name: "d12", nullable: true, length: 40 })
  d12: string | null;

  @Column("varchar", { name: "d13", nullable: true, length: 40 })
  d13: string | null;

  @Column("varchar", { name: "d14", nullable: true, length: 40 })
  d14: string | null;

  @Column("varchar", { name: "d15", nullable: true, length: 40 })
  d15: string | null;

  @Column("varchar", { name: "d16", nullable: true, length: 40 })
  d16: string | null;

  @Column("varchar", { name: "d17", nullable: true, length: 40 })
  d17: string | null;

  @Column("varchar", { name: "d18", nullable: true, length: 40 })
  d18: string | null;

  @Column("varchar", { name: "d19", nullable: true, length: 40 })
  d19: string | null;

  @Column("varchar", { name: "d20", nullable: true, length: 40 })
  d20: string | null;

  @Column("varchar", { name: "d21", nullable: true, length: 40 })
  d21: string | null;

  @Column("varchar", { name: "d22", nullable: true, length: 40 })
  d22: string | null;

  @Column("varchar", { name: "d23", nullable: true, length: 40 })
  d23: string | null;

  @Column("varchar", { name: "d24", nullable: true, length: 40 })
  d24: string | null;

  @Column("varchar", { name: "d25", nullable: true, length: 40 })
  d25: string | null;

  @Column("varchar", { name: "d26", nullable: true, length: 40 })
  d26: string | null;

  @Column("varchar", { name: "d27", nullable: true, length: 40 })
  d27: string | null;

  @Column("varchar", { name: "d28", nullable: true, length: 40 })
  d28: string | null;

  @Column("varchar", { name: "d29", nullable: true, length: 40 })
  d29: string | null;

  @Column("varchar", { name: "d30", nullable: true, length: 40 })
  d30: string | null;

  @Column("varchar", { name: "d31", nullable: true, length: 40 })
  d31: string | null;

  @Column("char", {
    name: "hide",
    nullable: true,
    length: 1,
    default: () => "'n'",
  })
  hide: string | null;

  @Column("varchar", { name: "invoiceid", nullable: true, length: 40 })
  invoiceid: string | null;

  @Column("varchar", { name: "billing_entity", nullable: true, length: 40 })
  billingEntity: string | null;

  @Column("varchar", { name: "bill_product_name", nullable: true, length: 255 })
  billProductName: string | null;

  @Column("varchar", { name: "billtype", nullable: true, length: 255 })
  billtype: string | null;

  @Column("varchar", { name: "lineitem_type", nullable: true, length: 30 })
  lineitemType: string | null;

  @Column("varchar", { name: "pricing_term", nullable: true, length: 30 })
  pricingTerm: string | null;

  @Column("varchar", { name: "os", nullable: true, length: 20 })
  os: string | null;

  @Column("varchar", { name: "product_location", nullable: true, length: 100 })
  productLocation: string | null;

  @Column("varchar", {
    name: "pricing_LeaseContractLength",
    nullable: true,
    length: 100,
  })
  pricingLeaseContractLength: string | null;

  @Column("varchar", {
    name: "pricing_OfferingClass",
    nullable: true,
    length: 100,
  })
  pricingOfferingClass: string | null;

  @Column("varchar", { name: "reservation_arn", nullable: true, length: 255 })
  reservationArn: string | null;

  @Column("varchar", {
    name: "reservation_StartTime",
    nullable: true,
    length: 100,
  })
  reservationStartTime: string | null;

  @Column("varchar", {
    name: "reservation_EndTime",
    nullable: true,
    length: 100,
  })
  reservationEndTime: string | null;

  @Column("varchar", {
    name: "reservation_ModificationStatus",
    nullable: true,
    length: 100,
  })
  reservationModificationStatus: string | null;

  @Column("varchar", {
    name: "reservation_AmortizedUpfrontCostForUsage",
    nullable: true,
    length: 100,
  })
  reservationAmortizedUpfrontCostForUsage: string | null;

  @Column("varchar", {
    name: "reservation_AmortizedUpfrontFeeForBillingPeriod",
    nullable: true,
    length: 100,
  })
  reservationAmortizedUpfrontFeeForBillingPeriod: string | null;

  @Column("varchar", {
    name: "reservation_EffectiveCost",
    nullable: true,
    length: 100,
  })
  reservationEffectiveCost: string | null;

  @Column("varchar", {
    name: "reservation_NumberOfReservations",
    nullable: true,
    length: 100,
  })
  reservationNumberOfReservations: string | null;

  @Column("varchar", {
    name: "reservation_RecurringFeeForUsage",
    nullable: true,
    length: 100,
  })
  reservationRecurringFeeForUsage: string | null;

  @Column("varchar", {
    name: "reservation_TotalReservedUnits",
    nullable: true,
    length: 100,
  })
  reservationTotalReservedUnits: string | null;

  @Column("varchar", {
    name: "reservation_UnusedAmortizedUpfrontFeeForBillingPeriod",
    nullable: true,
    length: 100,
  })
  reservationUnusedAmortizedUpfrontFeeForBillingPeriod: string | null;

  @Column("varchar", {
    name: "reservation_UnusedNormalizedUnitQuantity",
    nullable: true,
    length: 100,
  })
  reservationUnusedNormalizedUnitQuantity: string | null;

  @Column("varchar", {
    name: "reservation_UnusedRecurringFee",
    nullable: true,
    length: 100,
  })
  reservationUnusedRecurringFee: string | null;

  @Column("varchar", {
    name: "reservation_UpfrontValue",
    nullable: true,
    length: 100,
  })
  reservationUpfrontValue: string | null;

  @Column("varchar", {
    name: "normalizationsizefactor",
    nullable: true,
    length: 20,
  })
  normalizationsizefactor: string | null;

  @Column("varchar", {
    name: "product_instancetypefamily",
    nullable: true,
    length: 15,
  })
  productInstancetypefamily: string | null;

  @Column("varchar", {
    name: "pricing_publicOnDemandRate",
    nullable: true,
    length: 100,
  })
  pricingPublicOnDemandRate: string | null;

  @Column("varchar", { name: "purchaseoption", nullable: true, length: 30 })
  purchaseoption: string | null;

  @Column("varchar", { name: "unitprice_si", nullable: true, length: 30 })
  unitpriceSi: string | null;

  @Column("varchar", {
    name: "product_instanceType",
    nullable: true,
    length: 30,
  })
  productInstanceType: string | null;

  @Column("varchar", {
    name: "sum_normalizedUsageAmount",
    nullable: true,
    length: 40,
  })
  sumNormalizedUsageAmount: string | null;

  @Column("varchar", {
    name: "sum_reservation_UnusedQuantity",
    nullable: true,
    length: 40,
  })
  sumReservationUnusedQuantity: string | null;

  @Column("varchar", { name: "OriginalCost", nullable: true, length: 40 })
  originalCost: string | null;

  @Column("varchar", {
    name: "RealCostExcludeUpfront",
    nullable: true,
    length: 40,
  })
  realCostExcludeUpfront: string | null;

  @Column("varchar", {
    name: "RealCostIncludeUpfront",
    nullable: true,
    length: 40,
  })
  realCostIncludeUpfront: string | null;

  @Column("varchar", { name: "CostSavings", nullable: true, length: 40 })
  costSavings: string | null;

  @Column("varchar", { name: "Revenue", nullable: true, length: 40 })
  revenue: string | null;

  @Column("varchar", { name: "Profit", nullable: true, length: 40 })
  profit: string | null;

  @Column("varchar", { name: "RIUsageDescription", nullable: true, length: 40 })
  riUsageDescription: string | null;

  @Column("varchar", { name: "savingsplan_arn", nullable: true, length: 120 })
  savingsplanArn: string | null;

  @Column("text", { name: "itemdescription_ori", nullable: true })
  itemdescriptionOri: string | null;

  @Column("varchar", {
    name: "savingsPlan_UsedCommitment",
    nullable: true,
    length: 40,
  })
  savingsPlanUsedCommitment: string | null;

  @Column("varchar", {
    name: "savingsPlanEffectiveCost",
    nullable: true,
    length: 40,
  })
  savingsPlanEffectiveCost: string | null;

  @Column("varchar", {
    name: "savingsPlan_TotalCommitmentToDate",
    nullable: true,
    length: 40,
  })
  savingsPlanTotalCommitmentToDate: string | null;

  @Column("varchar", {
    name: "savingsPlan_SavingsPlanRate",
    nullable: true,
    length: 40,
  })
  savingsPlanSavingsPlanRate: string | null;
}
