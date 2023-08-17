import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_price_aws", { schema: "ecloud_rick" })
export class BillPriceAws {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("text", { name: "SKU" })
  sku: string;

  @Column("text", { name: "OfferTermCode" })
  offerTermCode: string;

  @Column("text", { name: "RateCode" })
  rateCode: string;

  @Column("text", { name: "TermType" })
  termType: string;

  @Column("text", { name: "PriceDescription" })
  priceDescription: string;

  @Column("text", { name: "Unit" })
  unit: string;

  @Column("text", { name: "PricePerUnit" })
  pricePerUnit: string;

  @Column("text", { name: "Currency" })
  currency: string;

  @Column("text", { name: "LeaseContractLength" })
  leaseContractLength: string;

  @Column("text", { name: "PurchaseOption" })
  purchaseOption: string;

  @Column("text", { name: "ProductFamily" })
  productFamily: string;

  @Column("text", { name: "serviceCode" })
  serviceCode: string;

  @Column("text", { name: "Location" })
  location: string;

  @Column("text", { name: "InstanceType" })
  instanceType: string;

  @Column("text", { name: "CurrentGeneration" })
  currentGeneration: string;

  @Column("text", { name: "InstanceFamily" })
  instanceFamily: string;

  @Column("text", { name: "vCPU" })
  vCpu: string;

  @Column("text", { name: "PhysicalProcessor" })
  physicalProcessor: string;

  @Column("text", { name: "ClockSpeed" })
  clockSpeed: string;

  @Column("text", { name: "Memory" })
  memory: string;

  @Column("text", { name: "Storage" })
  storage: string;

  @Column("text", { name: "NetworkPerformance" })
  networkPerformance: string;

  @Column("text", { name: "ProcessorArchitecture" })
  processorArchitecture: string;

  @Column("text", { name: "Tenancy" })
  tenancy: string;

  @Column("text", { name: "EBSOptimized" })
  ebsOptimized: string;

  @Column("text", { name: "OperatingSystem" })
  operatingSystem: string;

  @Column("text", { name: "LicenseModel" })
  licenseModel: string;

  @Column("text", { name: "usageType" })
  usageType: string;

  @Column("text", { name: "operation" })
  operation: string;

  @Column("text", { name: "PreInstalled" })
  preInstalled: string;

  @Column("text", { name: "ProcessorFeatures" })
  processorFeatures: string;
}
