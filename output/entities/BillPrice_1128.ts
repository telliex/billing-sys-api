import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_price_1128", { schema: "ecloud_rick" })
export class BillPrice_1128 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("text", { name: "Operating_System" })
  operatingSystem: string;

  @Column("text", { name: "Billing_OS" })
  billingOs: string;

  @Column("varchar", { name: "Type", length: 20 })
  type: string;

  @Column("varchar", { name: "Instance_Type", length: 30 })
  instanceType: string;

  @Column("varchar", { name: "Availability_Zone", length: 30 })
  availabilityZone: string;

  @Column("varchar", { name: "On_Demand_hourly", length: 20 })
  onDemandHourly: string;
}
