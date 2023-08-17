import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_RIOnDemandPrice", { schema: "ecloud_rick" })
export class BillRiOnDemandPrice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Bill_Period", nullable: true, length: 10 })
  billPeriod: string | null;

  @Column("varchar", { name: "RateId", length: 10 })
  rateId: string;

  @Column("varchar", { name: "UsageType", nullable: true, length: 100 })
  usageType: string | null;

  @Column("varchar", { name: "On_Demand_hourly", length: 20 })
  onDemandHourly: string;
}
