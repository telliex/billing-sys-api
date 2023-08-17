import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_product", ["billProduct"], {})
@Entity("bill_invoice_detail", { schema: "ecloud_rick" })
export class BillInvoiceDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_invoice" })
  billInvoice: number;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "RateId", length: 10 })
  rateId: string;

  @Column("varchar", { name: "SubscriptionId", length: 20 })
  subscriptionId: string;

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
}
