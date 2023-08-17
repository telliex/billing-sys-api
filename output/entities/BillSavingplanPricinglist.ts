import { Column, Entity, Index } from "typeorm";

@Index("ix_bill_sp_1", ["paymentOption", "planType"], {})
@Index("ix_bill_sp_2", ["planDescription", "usageType", "operation"], {})
@Index(
  "ix_bill_sp_3",
  [
    "region",
    "tenancy",
    "operation",
    "planType",
    "paymentOption",
    "instanceType",
    "durationSeconds",
  ],
  {}
)
@Entity("bill_savingplan_pricinglist", { schema: "ecloud_rick" })
export class BillSavingplanPricinglist {
  @Column("varchar", { name: "paymentOption", nullable: true, length: 40 })
  paymentOption: string | null;

  @Column("varchar", { name: "planType", nullable: true, length: 40 })
  planType: string | null;

  @Column("int", { name: "durationSeconds", nullable: true })
  durationSeconds: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 10 })
  currency: string | null;

  @Column("varchar", { name: "planDescription", nullable: true, length: 100 })
  planDescription: string | null;

  @Column("float", {
    name: "rate",
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  rate: number | null;

  @Column("varchar", { name: "unit", nullable: true, length: 20 })
  unit: string | null;

  @Column("varchar", { name: "productType", nullable: true, length: 20 })
  productType: string | null;

  @Column("varchar", { name: "serviceCode", nullable: true, length: 20 })
  serviceCode: string | null;

  @Column("varchar", { name: "usageType", nullable: true, length: 60 })
  usageType: string | null;

  @Column("varchar", { name: "operation", nullable: true, length: 30 })
  operation: string | null;

  @Column("varchar", { name: "instanceFamily", nullable: true, length: 20 })
  instanceFamily: string | null;

  @Column("varchar", { name: "productDescription", nullable: true, length: 60 })
  productDescription: string | null;

  @Column("varchar", { name: "instanceType", nullable: true, length: 30 })
  instanceType: string | null;

  @Column("varchar", { name: "tenancy", nullable: true, length: 30 })
  tenancy: string | null;

  @Column("varchar", { name: "region", nullable: true, length: 30 })
  region: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;
}
