import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_region", { schema: "ecloud_rick" })
export class BillRegion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "RegionCode", length: 10 })
  regionCode: string;

  @Column("varchar", { name: "RegionName", length: 50 })
  regionName: string;

  @Column("varchar", { name: "Location", length: 30 })
  location: string;

  @Column("varchar", { name: "Region", length: 20 })
  region: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
