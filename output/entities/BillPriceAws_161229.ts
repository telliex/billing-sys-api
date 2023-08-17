import { Column, Entity } from "typeorm";

@Entity("bill_price_aws_161229", { schema: "ecloud_rick" })
export class BillPriceAws_161229 {
  @Column("varchar", { name: "SKU", nullable: true, length: 255 })
  sku: string | null;

  @Column("varchar", { name: "OfferTermCode", nullable: true, length: 255 })
  offerTermCode: string | null;

  @Column("varchar", { name: "RateCode", nullable: true, length: 255 })
  rateCode: string | null;

  @Column("varchar", { name: "TermType", nullable: true, length: 255 })
  termType: string | null;

  @Column("varchar", { name: "PriceDescription", nullable: true, length: 255 })
  priceDescription: string | null;

  @Column("varchar", { name: "EffectiveDate", nullable: true, length: 255 })
  effectiveDate: string | null;

  @Column("varchar", { name: "StartingRange", nullable: true, length: 255 })
  startingRange: string | null;

  @Column("varchar", { name: "EndingRange", nullable: true, length: 255 })
  endingRange: string | null;

  @Column("varchar", { name: "Unit", nullable: true, length: 255 })
  unit: string | null;

  @Column("varchar", { name: "PricePerUnit", nullable: true, length: 255 })
  pricePerUnit: string | null;

  @Column("varchar", { name: "Currency", nullable: true, length: 255 })
  currency: string | null;

  @Column("varchar", {
    name: "LeaseContractLength",
    nullable: true,
    length: 255,
  })
  leaseContractLength: string | null;

  @Column("varchar", { name: "PurchaseOption", nullable: true, length: 255 })
  purchaseOption: string | null;

  @Column("varchar", { name: "OfferingClass", nullable: true, length: 255 })
  offeringClass: string | null;

  @Column("varchar", { name: "ProductFamily", nullable: true, length: 255 })
  productFamily: string | null;

  @Column("varchar", { name: "serviceCode", nullable: true, length: 255 })
  serviceCode: string | null;

  @Column("varchar", { name: "Location", nullable: true, length: 255 })
  location: string | null;

  @Column("varchar", { name: "LocationType", nullable: true, length: 255 })
  locationType: string | null;

  @Column("varchar", { name: "InstanceType", nullable: true, length: 255 })
  instanceType: string | null;

  @Column("varchar", { name: "CurrentGeneration", nullable: true, length: 255 })
  currentGeneration: string | null;

  @Column("varchar", { name: "InstanceFamily", nullable: true, length: 255 })
  instanceFamily: string | null;

  @Column("varchar", { name: "vCPU", nullable: true, length: 255 })
  vCpu: string | null;

  @Column("varchar", { name: "PhysicalProcessor", nullable: true, length: 255 })
  physicalProcessor: string | null;

  @Column("varchar", { name: "ClockSpeed", nullable: true, length: 255 })
  clockSpeed: string | null;

  @Column("varchar", { name: "Memory", nullable: true, length: 255 })
  memory: string | null;

  @Column("varchar", { name: "Storage", nullable: true, length: 255 })
  storage: string | null;

  @Column("varchar", {
    name: "NetworkPerformance",
    nullable: true,
    length: 255,
  })
  networkPerformance: string | null;

  @Column("varchar", {
    name: "ProcessorArchitecture",
    nullable: true,
    length: 255,
  })
  processorArchitecture: string | null;

  @Column("varchar", { name: "StorageMedia", nullable: true, length: 255 })
  storageMedia: string | null;

  @Column("varchar", { name: "VolumeType", nullable: true, length: 255 })
  volumeType: string | null;

  @Column("varchar", { name: "MaxVolumeSize", nullable: true, length: 255 })
  maxVolumeSize: string | null;

  @Column("varchar", { name: "MaxIOPSvolume", nullable: true, length: 255 })
  maxIopSvolume: string | null;

  @Column("varchar", {
    name: "MaxIOPSBurstPerformance",
    nullable: true,
    length: 255,
  })
  maxIopsBurstPerformance: string | null;

  @Column("varchar", {
    name: "Maxthroughputvolume",
    nullable: true,
    length: 255,
  })
  maxthroughputvolume: string | null;

  @Column("varchar", { name: "Provisioned", nullable: true, length: 255 })
  provisioned: string | null;

  @Column("varchar", { name: "Tenancy", nullable: true, length: 255 })
  tenancy: string | null;

  @Column("varchar", { name: "EBSOptimized", nullable: true, length: 255 })
  ebsOptimized: string | null;

  @Column("varchar", { name: "OperatingSystem", nullable: true, length: 255 })
  operatingSystem: string | null;

  @Column("varchar", { name: "LicenseModel", nullable: true, length: 255 })
  licenseModel: string | null;

  @Column("varchar", { name: "pgroup", nullable: true, length: 255 })
  pgroup: string | null;

  @Column("varchar", { name: "GroupDescription", nullable: true, length: 255 })
  groupDescription: string | null;

  @Column("varchar", { name: "TransferType", nullable: true, length: 255 })
  transferType: string | null;

  @Column("varchar", { name: "FromLocation", nullable: true, length: 255 })
  fromLocation: string | null;

  @Column("varchar", { name: "FromLocationType", nullable: true, length: 255 })
  fromLocationType: string | null;

  @Column("varchar", { name: "ToLocation", nullable: true, length: 255 })
  toLocation: string | null;

  @Column("varchar", { name: "ToLocationType", nullable: true, length: 255 })
  toLocationType: string | null;

  @Column("varchar", { name: "usageType", nullable: true, length: 255 })
  usageType: string | null;

  @Column("varchar", { name: "operation", nullable: true, length: 255 })
  operation: string | null;

  @Column("varchar", { name: "Comments", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", {
    name: "DedicatedEBSThroughput",
    nullable: true,
    length: 255,
  })
  dedicatedEbsThroughput: string | null;

  @Column("varchar", {
    name: "EnhancedNetworkingSupported",
    nullable: true,
    length: 255,
  })
  enhancedNetworkingSupported: string | null;

  @Column("varchar", { name: "GPU", nullable: true, length: 255 })
  gpu: string | null;

  @Column("varchar", {
    name: "InstanceCapacity10xlarge",
    nullable: true,
    length: 255,
  })
  instanceCapacity10xlarge: string | null;

  @Column("varchar", {
    name: "InstanceCapacity2xlarge",
    nullable: true,
    length: 255,
  })
  instanceCapacity2xlarge: string | null;

  @Column("varchar", {
    name: "InstanceCapacity4xlarge",
    nullable: true,
    length: 255,
  })
  instanceCapacity4xlarge: string | null;

  @Column("varchar", {
    name: "InstanceCapacity8xlarge",
    nullable: true,
    length: 255,
  })
  instanceCapacity8xlarge: string | null;

  @Column("varchar", {
    name: "InstanceCapacitylarge",
    nullable: true,
    length: 255,
  })
  instanceCapacitylarge: string | null;

  @Column("varchar", {
    name: "InstanceCapacitymedium",
    nullable: true,
    length: 255,
  })
  instanceCapacitymedium: string | null;

  @Column("varchar", {
    name: "InstanceCapacityxlarge",
    nullable: true,
    length: 255,
  })
  instanceCapacityxlarge: string | null;

  @Column("varchar", { name: "IntelAVXAvailable", nullable: true, length: 255 })
  intelAvxAvailable: string | null;

  @Column("varchar", {
    name: "IntelAVX2Available",
    nullable: true,
    length: 255,
  })
  intelAvx2Available: string | null;

  @Column("varchar", {
    name: "IntelTurboAvailable",
    nullable: true,
    length: 255,
  })
  intelTurboAvailable: string | null;

  @Column("varchar", { name: "PhysicalCores", nullable: true, length: 255 })
  physicalCores: string | null;

  @Column("varchar", { name: "PreInstalledSW", nullable: true, length: 255 })
  preInstalledSw: string | null;

  @Column("varchar", { name: "ProcessorFeatures", nullable: true, length: 255 })
  processorFeatures: string | null;

  @Column("varchar", { name: "Sockets", nullable: true, length: 255 })
  sockets: string | null;
}
