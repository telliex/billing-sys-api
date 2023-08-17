import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_region", { schema: "ecloud_rick" })
export class MspRegion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "region_name", length: 30 })
  regionName: string;

  @Column("varchar", { name: "region", length: 30 })
  region: string;

  @Column("varchar", { name: "endpoint", length: 60 })
  endpoint: string;
}
