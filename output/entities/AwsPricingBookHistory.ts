import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("aws_pricing_book_history", { schema: "ecloud_rick" })
export class AwsPricingBookHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "sku", length: 20 })
  sku: string;

  @Column("varchar", { name: "rate_code", length: 64 })
  rateCode: string;

  @Column("varchar", { name: "term_type", length: 20 })
  termType: string;

  @Column("varchar", { name: "product_family", length: 30 })
  productFamily: string;

  @Column("varchar", { name: "service_code", length: 20 })
  serviceCode: string;

  @Column("varchar", { name: "location", length: 30 })
  location: string;

  @Column("varchar", { name: "instance_type", nullable: true, length: 100 })
  instanceType: string | null;

  @Column("varchar", { name: "tenancy", length: 20 })
  tenancy: string;

  @Column("varchar", { name: "operating_system", length: 20 })
  operatingSystem: string;

  @Column("varchar", { name: "license_model", length: 30 })
  licenseModel: string;

  @Column("varchar", { name: "pre_installed_sw", length: 30 })
  preInstalledSw: string;

  @Column("varchar", { name: "database_engine", length: 20 })
  databaseEngine: string;

  @Column("varchar", { name: "database_edition", length: 20 })
  databaseEdition: string;

  @Column("varchar", { name: "deployment_option", length: 30 })
  deploymentOption: string;

  @Column("varchar", { name: "cache_engine", length: 30 })
  cacheEngine: string;

  @Column("varchar", { name: "usage_type", nullable: true, length: 255 })
  usageType: string | null;

  @Column("decimal", {
    name: "price_per_unit_old",
    nullable: true,
    precision: 20,
    scale: 10,
  })
  pricePerUnitOld: string | null;

  @Column("decimal", {
    name: "price_per_unit",
    nullable: true,
    precision: 20,
    scale: 10,
  })
  pricePerUnit: string | null;

  @Column("varchar", { name: "description", length: 128 })
  description: string;

  @Column("varchar", {
    name: "upd_time",
    nullable: true,
    comment: "yyyy/mm/dd hh:mi:ss",
    length: 20,
  })
  updTime: string | null;
}
