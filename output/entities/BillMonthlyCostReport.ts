import { Column, Entity } from "typeorm";

@Entity("bill_monthly_cost_report", { schema: "ecloud_rick" })
export class BillMonthlyCostReport {
  @Column("varchar", { name: "update_time", nullable: true, length: 20 })
  updateTime: string | null;

  @Column("varchar", { name: "bill_period", nullable: true, length: 7 })
  billPeriod: string | null;

  @Column("varchar", { name: "InvoiceID", nullable: true, length: 50 })
  invoiceId: string | null;

  @Column("varchar", { name: "PayerAccountId", nullable: true, length: 20 })
  payerAccountId: string | null;

  @Column("varchar", { name: "LinkedAccountId", nullable: true, length: 20 })
  linkedAccountId: string | null;

  @Column("varchar", { name: "RecordType", nullable: true, length: 20 })
  recordType: string | null;

  @Column("varchar", { name: "RecordID", nullable: true, length: 50 })
  recordId: string | null;

  @Column("varchar", {
    name: "BillingPeriodStartDate",
    nullable: true,
    length: 20,
  })
  billingPeriodStartDate: string | null;

  @Column("varchar", {
    name: "BillingPeriodEndDate",
    nullable: true,
    length: 20,
  })
  billingPeriodEndDate: string | null;

  @Column("varchar", { name: "InvoiceDate", nullable: true, length: 20 })
  invoiceDate: string | null;

  @Column("varchar", { name: "PayerAccountName", nullable: true, length: 255 })
  payerAccountName: string | null;

  @Column("varchar", { name: "LinkedAccountName", nullable: true, length: 255 })
  linkedAccountName: string | null;

  @Column("text", { name: "TaxationAddress", nullable: true })
  taxationAddress: string | null;

  @Column("varchar", { name: "PayerPONumber", nullable: true, length: 20 })
  payerPoNumber: string | null;

  @Column("varchar", { name: "ProductCode", nullable: true, length: 255 })
  productCode: string | null;

  @Column("varchar", { name: "ProductName", nullable: true, length: 255 })
  productName: string | null;

  @Column("varchar", { name: "SellerOfRecord", nullable: true, length: 255 })
  sellerOfRecord: string | null;

  @Column("text", { name: "UsageType", nullable: true })
  usageType: string | null;

  @Column("varchar", { name: "Operation", nullable: true, length: 255 })
  operation: string | null;

  @Column("varchar", { name: "RateId", nullable: true, length: 15 })
  rateId: string | null;

  @Column("text", { name: "ItemDescription", nullable: true })
  itemDescription: string | null;

  @Column("varchar", { name: "UsageStartDate", nullable: true, length: 20 })
  usageStartDate: string | null;

  @Column("varchar", { name: "UsageEndDate", nullable: true, length: 20 })
  usageEndDate: string | null;

  @Column("varchar", { name: "UsageQuantity", nullable: true, length: 20 })
  usageQuantity: string | null;

  @Column("varchar", { name: "BlendedRate", nullable: true, length: 15 })
  blendedRate: string | null;

  @Column("varchar", { name: "CurrencyCode", nullable: true, length: 10 })
  currencyCode: string | null;

  @Column("varchar", { name: "CostBeforeTax", nullable: true, length: 20 })
  costBeforeTax: string | null;

  @Column("varchar", { name: "Credits", nullable: true, length: 20 })
  credits: string | null;

  @Column("varchar", { name: "TaxAmount", nullable: true, length: 20 })
  taxAmount: string | null;

  @Column("varchar", { name: "TaxType", nullable: true, length: 10 })
  taxType: string | null;

  @Column("varchar", { name: "TotalCost", nullable: true, length: 20 })
  totalCost: string | null;
}
