import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ix1", ["billPeriod"], {})
@Index("ix2", ["billPeriod", "productRegion"], {})
@Entity("ri_suggestion", { schema: "ecloud_rick" })
export class RiSuggestion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "bill_period", nullable: true, length: 10 })
  billPeriod: string | null;

  @Column("varchar", { name: "payeraccountid", nullable: true, length: 30 })
  payeraccountid: string | null;

  @Column("varchar", { name: "linkedaccountid", nullable: true, length: 30 })
  linkedaccountid: string | null;

  @Column("varchar", { name: "product_region", nullable: true, length: 60 })
  productRegion: string | null;

  @Column("varchar", { name: "product_name", length: 80 })
  productName: string;

  @Column("varchar", { name: "odfamily", nullable: true, length: 10 })
  odfamily: string | null;

  @Column("varchar", {
    name: "hourly_odfactorhr_min",
    nullable: true,
    length: 60,
  })
  hourlyOdfactorhrMin: string | null;

  @Column("varchar", {
    name: "hourly_odfactorhr_max",
    nullable: true,
    length: 60,
  })
  hourlyOdfactorhrMax: string | null;

  @Column("varchar", {
    name: "hourly_odfactorhr_avg",
    nullable: true,
    length: 60,
  })
  hourlyOdfactorhrAvg: string | null;

  @Column("varchar", { name: "basetype", nullable: true, length: 10 })
  basetype: string | null;

  @Column("varchar", { name: "normalize_factor", nullable: true, length: 10 })
  normalizeFactor: string | null;

  @Column("varchar", { name: "hour", nullable: true, length: 30 })
  hour: string | null;

  @Column("varchar", { name: "os", nullable: true, length: 40 })
  os: string | null;

  @Column("varchar", {
    name: "product_licenseModel",
    nullable: true,
    length: 100,
  })
  productLicenseModel: string | null;

  @Column("varchar", {
    name: "product_preinstalledSW",
    nullable: true,
    length: 100,
  })
  productPreinstalledSw: string | null;

  @Column("varchar", { name: "product_tenancy", nullable: true, length: 100 })
  productTenancy: string | null;

  @Column("varchar", {
    name: "product_databaseEngine",
    nullable: true,
    length: 100,
  })
  productDatabaseEngine: string | null;

  @Column("varchar", {
    name: "product_deploymentOption",
    nullable: true,
    length: 100,
  })
  productDeploymentOption: string | null;

  @Column("varchar", {
    name: "product_databaseEdition",
    nullable: true,
    length: 100,
  })
  productDatabaseEdition: string | null;

  @Column("varchar", {
    name: "product_cacheEngine",
    nullable: true,
    length: 100,
  })
  productCacheEngine: string | null;

  @Column("varchar", {
    name: "is_payeraccount",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  isPayeraccount: string | null;
}
