import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_inventory_rule", { schema: "ecloud_rick" })
export class MspInventoryRule {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "service", length: 50 })
  service: string;

  @Column("varchar", { name: "category", length: 50 })
  category: string;

  @Column("varchar", { name: "ruleName", length: 50 })
  ruleName: string;

  @Column("char", { name: "special", length: 1, default: () => "'n'" })
  special: string;

  @Column("varchar", { name: "specialRegion", length: 40 })
  specialRegion: string;

  @Column("varchar", { name: "color", length: 10 })
  color: string;

  @Column("varchar", { name: "sort", length: 3 })
  sort: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
