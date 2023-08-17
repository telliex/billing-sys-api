import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Index("bill_customer", ["billCustomer"], {})
@Index("bill_product", ["billProduct"], {})
@Index("migration_bill_item_settle_verify_bill_close_IDX", ["billClose"], {})
@Entity("migration_bill_item_settle_verify", { schema: "ecloud_rick" })
export class MigrationBillItemSettleVerify {
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

  @Column("varchar", { name: "linked_account_id", nullable: true, length: 20 })
  linkedAccountId: string | null;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "payer_account_id", length: 20 })
  payerAccountId: string;

  @Column("varchar", { name: "rate_id", length: 10 })
  rateId: string;

  @Column("varchar", { name: "subscription_id", nullable: true, length: 20 })
  subscriptionId: string | null;

  @Column("varchar", {
    name: "subscription_id_origin",
    nullable: true,
    length: 20,
  })
  subscriptionIdOrigin: string | null;

  @Column("text", { name: "usage_type" })
  usageType: string;

  @Column("text", { name: "operation" })
  operation: string;

  @Column("varchar", { name: "availability_zone", nullable: true, length: 30 })
  availabilityZone: string | null;

  @Column("char", { name: "reserved_instance", nullable: true, length: 1 })
  reservedInstance: string | null;

  @Column("varchar", { name: "item_description", nullable: true, length: 256 })
  itemDescription: string | null;

  @Column("varchar", { name: "usage_start_date", nullable: true, length: 30 })
  usageStartDate: string | null;

  @Column("varchar", { name: "usage_end_date", nullable: true, length: 30 })
  usageEndDate: string | null;

  @Column("varchar", { name: "usage_quantity", nullable: true, length: 40 })
  usageQuantity: string | null;

  @Column("varchar", { name: "blended_rate", nullable: true, length: 40 })
  blendedRate: string | null;

  @Column("varchar", { name: "unblended_rate", nullable: true, length: 40 })
  unblendedRate: string | null;

  @Column("varchar", { name: "credits", nullable: true, length: 40 })
  credits: string | null;

  @Column("varchar", { name: "totalcost", nullable: true, length: 20 })
  totalcost: string | null;

  @Column("varchar", { name: "unit_price", length: 30 })
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

  @Column("varchar", { name: "invoice_id", nullable: true, length: 40 })
  invoiceId: string | null;

  @Column("varchar", { name: "billing_entity", nullable: true, length: 40 })
  billingEntity: string | null;

  @Column("varchar", { name: "bill_product_name", nullable: true, length: 255 })
  billProductName: string | null;

  @Column("varchar", { name: "bill_type", nullable: true, length: 255 })
  billType: string | null;

  @Column("varchar", { name: "lineitem_type", nullable: true, length: 30 })
  lineitemType: string | null;

  @Column("varchar", { name: "pricing_term", nullable: true, length: 30 })
  pricingTerm: string | null;

  @Column("varchar", { name: "os", nullable: true, length: 20 })
  os: string | null;

  @Column("varchar", { name: "product_location", nullable: true, length: 100 })
  productLocation: string | null;

  @Column("varchar", {
    name: "pricing_lease_contract_length",
    nullable: true,
    length: 100,
  })
  pricingLeaseContractLength: string | null;

  @Column("varchar", {
    name: "pricing_offering_class",
    nullable: true,
    length: 100,
  })
  pricingOfferingClass: string | null;

  @Column("varchar", { name: "reservation_arn", nullable: true, length: 255 })
  reservationArn: string | null;

  @Column("varchar", {
    name: "reservation_start_time",
    nullable: true,
    length: 100,
  })
  reservationStartTime: string | null;

  @Column("varchar", {
    name: "reservation_end_time",
    nullable: true,
    length: 100,
  })
  reservationEndTime: string | null;

  @Column("varchar", {
    name: "reservation_modification_status",
    nullable: true,
    length: 100,
  })
  reservationModificationStatus: string | null;

  @Column("varchar", {
    name: "reservation_amortized_upfront_cost_for_usage",
    nullable: true,
    length: 100,
  })
  reservationAmortizedUpfrontCostForUsage: string | null;

  @Column("varchar", {
    name: "reservation_amortized_upfront_fee_for_billing_period",
    nullable: true,
    length: 100,
  })
  reservationAmortizedUpfrontFeeForBillingPeriod: string | null;

  @Column("varchar", {
    name: "reservation_effective_cost",
    nullable: true,
    length: 100,
  })
  reservationEffectiveCost: string | null;

  @Column("varchar", {
    name: "reservation_number_of_reservations",
    nullable: true,
    length: 100,
  })
  reservationNumberOfReservations: string | null;

  @Column("varchar", {
    name: "reservation_recurring_fee_for_usage",
    nullable: true,
    length: 100,
  })
  reservationRecurringFeeForUsage: string | null;

  @Column("varchar", {
    name: "reservation_total_reserved_units",
    nullable: true,
    length: 100,
  })
  reservationTotalReservedUnits: string | null;

  @Column("varchar", {
    name: "reservation_unused_amortized_upfront_fee_for_billing_period",
    nullable: true,
    length: 100,
  })
  reservationUnusedAmortizedUpfrontFeeForBillingPeriod: string | null;

  @Column("varchar", {
    name: "reservation_unused_normalized_unit_quantity",
    nullable: true,
    length: 100,
  })
  reservationUnusedNormalizedUnitQuantity: string | null;

  @Column("varchar", {
    name: "reservation_unused_recurring_fee",
    nullable: true,
    length: 100,
  })
  reservationUnusedRecurringFee: string | null;

  @Column("varchar", {
    name: "reservation_upfront_value",
    nullable: true,
    length: 100,
  })
  reservationUpfrontValue: string | null;

  @Column("varchar", {
    name: "normalization_size_factor",
    nullable: true,
    length: 20,
  })
  normalizationSizeFactor: string | null;

  @Column("varchar", {
    name: "product_instance_type_family",
    nullable: true,
    length: 15,
  })
  productInstanceTypeFamily: string | null;

  @Column("varchar", {
    name: "pricing_public_on_demand_rate",
    nullable: true,
    length: 100,
  })
  pricingPublicOnDemandRate: string | null;

  @Column("varchar", { name: "purchase_option", nullable: true, length: 30 })
  purchaseOption: string | null;

  @Column("varchar", { name: "unit_price_si", nullable: true, length: 30 })
  unitPriceSi: string | null;

  @Column("varchar", {
    name: "product_instance_type",
    nullable: true,
    length: 30,
  })
  productInstanceType: string | null;

  @Column("varchar", {
    name: "sum_normalized_usage_amount",
    nullable: true,
    length: 40,
  })
  sumNormalizedUsageAmount: string | null;

  @Column("varchar", {
    name: "sum_reservation_unused_quantity",
    nullable: true,
    length: 40,
  })
  sumReservationUnusedQuantity: string | null;

  @Column("varchar", { name: "originalcost", nullable: true, length: 40 })
  originalcost: string | null;

  @Column("varchar", {
    name: "realcost_exclude_upfront",
    nullable: true,
    length: 40,
  })
  realcostExcludeUpfront: string | null;

  @Column("varchar", {
    name: "realcost_include_upfront",
    nullable: true,
    length: 40,
  })
  realcostIncludeUpfront: string | null;

  @Column("varchar", { name: "cost_savings", nullable: true, length: 40 })
  costSavings: string | null;

  @Column("varchar", { name: "revenue", nullable: true, length: 40 })
  revenue: string | null;

  @Column("varchar", { name: "profit", nullable: true, length: 40 })
  profit: string | null;

  @Column("varchar", {
    name: "ri_usage_description",
    nullable: true,
    length: 40,
  })
  riUsageDescription: string | null;

  @Column("varchar", { name: "savingsplan_arn", nullable: true, length: 120 })
  savingsplanArn: string | null;

  @Column("text", { name: "item_description_ori", nullable: true })
  itemDescriptionOri: string | null;

  @Column("varchar", {
    name: "savingsplan_used_commitment",
    nullable: true,
    length: 40,
  })
  savingsplanUsedCommitment: string | null;

  @Column("varchar", {
    name: "savingsplan_effective_cost",
    nullable: true,
    length: 40,
  })
  savingsplanEffectiveCost: string | null;

  @Column("varchar", {
    name: "savingsplan_total_commitment_to_date",
    nullable: true,
    length: 40,
  })
  savingsplanTotalCommitmentToDate: string | null;

  @Column("varchar", {
    name: "savingsplan_savingsplan_rate",
    nullable: true,
    length: 40,
  })
  savingsplanSavingsplanRate: string | null;

  @Column("varchar", { name: "supplier", nullable: true, length: 40 })
  supplier: string | null;

  @Column("int", { name: "bill_close", nullable: true })
  billClose: number | null;
}
