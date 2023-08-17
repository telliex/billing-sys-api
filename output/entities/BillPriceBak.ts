import { Column, Entity } from "typeorm";

@Entity("bill_price_bak", { schema: "ecloud_rick" })
export class BillPriceBak {
  @Column("int", { name: "id", default: () => "'0'" })
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
