import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Index("bill_customer", ["billCustomer"], {})
@Index("bill_product", ["billProduct"], {})
@Index("ix_bill_item_period", ["billPeriod"], {})
@Index("ix_bill_item_period_customer", ["billPeriod", "billCustomer"], {})
@Index(
  "ix_bill_period_payer_linked",
  ["billPeriod", "payerAccountId", "linkedaccountid"],
  {}
)
@Index("ix_bill_item_lineitem_type", ["lineitemType"], {})
@Index("ix_billing_entity", ["billingEntity"], {})
@Entity("bill_item", { schema: "ecloud_rick" })
export class BillItem {
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

  @Column("varchar", { name: "SubscriptionId", length: 20 })
  subscriptionId: string;

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

  @Column("varchar", { name: "AvailabilityZone", length: 30 })
  availabilityZone: string;

  @Column("char", { name: "ReservedInstance", length: 1 })
  reservedInstance: string;

  @Column("text", { name: "ItemDescription" })
  itemDescription: string;

  @Column("varchar", { name: "UsageStartDate", length: 30 })
  usageStartDate: string;

  @Column("varchar", { name: "UsageEndDate", length: 30 })
  usageEndDate: string;

  @Column("varchar", { name: "UsageQuantity", length: 20 })
  usageQuantity: string;

  @Column("varchar", { name: "BlendedRate", length: 20 })
  blendedRate: string;

  @Column("varchar", { name: "UnBlendedRate", length: 20 })
  unBlendedRate: string;

  @Column("varchar", { name: "Credits", length: 20 })
  credits: string;

  @Column("varchar", { name: "TotalCost", length: 20 })
  totalCost: string;

  @Column("varchar", { name: "UnitPrice", length: 10 })
  unitPrice: string;

  @Column("char", { name: "DOP", comment: "difference of prices", length: 1 })
  dop: string;

  @Column("varchar", { name: "d01", length: 20 })
  d01: string;

  @Column("varchar", { name: "d02", length: 20 })
  d02: string;

  @Column("varchar", { name: "d03", length: 20 })
  d03: string;

  @Column("varchar", { name: "d04", length: 20 })
  d04: string;

  @Column("varchar", { name: "d05", length: 20 })
  d05: string;

  @Column("varchar", { name: "d06", length: 20 })
  d06: string;

  @Column("varchar", { name: "d07", length: 20 })
  d07: string;

  @Column("varchar", { name: "d08", length: 20 })
  d08: string;

  @Column("varchar", { name: "d09", length: 20 })
  d09: string;

  @Column("varchar", { name: "d10", length: 20 })
  d10: string;

  @Column("varchar", { name: "d11", length: 20 })
  d11: string;

  @Column("varchar", { name: "d12", length: 20 })
  d12: string;

  @Column("varchar", { name: "d13", length: 20 })
  d13: string;

  @Column("varchar", { name: "d14", length: 20 })
  d14: string;

  @Column("varchar", { name: "d15", length: 20 })
  d15: string;

  @Column("varchar", { name: "d16", length: 20 })
  d16: string;

  @Column("varchar", { name: "d17", length: 20 })
  d17: string;

  @Column("varchar", { name: "d18", length: 20 })
  d18: string;

  @Column("varchar", { name: "d19", length: 20 })
  d19: string;

  @Column("varchar", { name: "d20", length: 20 })
  d20: string;

  @Column("varchar", { name: "d21", length: 20 })
  d21: string;

  @Column("varchar", { name: "d22", length: 20 })
  d22: string;

  @Column("varchar", { name: "d23", length: 20 })
  d23: string;

  @Column("varchar", { name: "d24", length: 20 })
  d24: string;

  @Column("varchar", { name: "d25", length: 20 })
  d25: string;

  @Column("varchar", { name: "d26", length: 20 })
  d26: string;

  @Column("varchar", { name: "d27", length: 20 })
  d27: string;

  @Column("varchar", { name: "d28", length: 20 })
  d28: string;

  @Column("varchar", { name: "d29", length: 20 })
  d29: string;

  @Column("varchar", { name: "d30", length: 20 })
  d30: string;

  @Column("varchar", { name: "d31", length: 20 })
  d31: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;

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

  @Column("varchar", { name: "supplier", nullable: true, length: 40 })
  supplier: string | null;
}
