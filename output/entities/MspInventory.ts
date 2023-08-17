import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_inventory", { schema: "ecloud_rick" })
export class MspInventory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "msp_inventory_rule" })
  mspInventoryRule: number;

  @Column("varchar", { name: "update_time", length: 19 })
  updateTime: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "region", length: 20 })
  region: string;

  @Column("int", { name: "count" })
  count: number;
}
