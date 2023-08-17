import { Column, Entity } from "typeorm";

@Entity("bill_price_new", { schema: "ecloud_rick" })
export class BillPriceNew {
  @Column("varchar", { name: "InstanceType", nullable: true, length: 255 })
  instanceType: string | null;

  @Column("varchar", { name: "location", nullable: true, length: 255 })
  location: string | null;

  @Column("varchar", { name: "Region", nullable: true, length: 20 })
  region: string | null;

  @Column("varchar", { name: "OperatingSystem", nullable: true, length: 255 })
  operatingSystem: string | null;

  @Column("decimal", { name: "p1", nullable: true, precision: 6, scale: 4 })
  p1: string | null;
}
