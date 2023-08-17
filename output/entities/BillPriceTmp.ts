import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_price_tmp", { schema: "ecloud_rick" })
export class BillPriceTmp {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Operating_System", nullable: true, length: 50 })
  operatingSystem: string | null;

  @Column("varchar", { name: "Instance_Type", nullable: true, length: 50 })
  instanceType: string | null;

  @Column("varchar", { name: "Availability_Zone", nullable: true, length: 50 })
  availabilityZone: string | null;

  @Column("varchar", { name: "On_Demand_hourly", nullable: true, length: 50 })
  onDemandHourly: string | null;

  @Column("varchar", { name: "price_per_unit", nullable: true, length: 50 })
  pricePerUnit: string | null;
}
