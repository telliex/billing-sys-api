import { Column, Entity } from "typeorm";

@Entity("bill_savingplan_pricinglist_tmp", { schema: "ecloud_rick" })
export class BillSavingplanPricinglistTmp {
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
}
