import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_price_tier", { schema: "ecloud_rick" })
export class BillPriceTier {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "tier_pair" })
  tierPair: number;

  @Column("int", { name: "tier" })
  tier: number;

  @Column("text", { name: "ItemDescription" })
  itemDescription: string;

  @Column("int", { name: "UsageQuantityGB" })
  usageQuantityGb: number;
}
