import { Column, Entity } from "typeorm";

@Entity("Report7", { schema: "ecloud_rick" })
export class Report7 {
  @Column("varchar", { name: "payeraccount_id", nullable: true, length: 255 })
  payeraccountId: string | null;

  @Column("varchar", { name: "linkedaccountid", nullable: true, length: 255 })
  linkedaccountid: string | null;

  @Column("decimal", {
    name: "estimate_rebate",
    nullable: true,
    precision: 20,
    scale: 7,
  })
  estimateRebate: string | null;

  @Column("decimal", {
    name: "spp_rebate",
    nullable: true,
    precision: 20,
    scale: 7,
  })
  sppRebate: string | null;

  @Column("decimal", {
    name: "atlas_rebate_diff",
    nullable: true,
    precision: 20,
    scale: 7,
  })
  atlasRebateDiff: string | null;
}
