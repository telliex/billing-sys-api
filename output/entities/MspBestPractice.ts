import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_best_practice", { schema: "ecloud_rick" })
export class MspBestPractice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "category", length: 30 })
  category: string;

  @Column("varchar", { name: "rule", length: 100 })
  rule: string;

  @Column("text", { name: "content" })
  content: string;
}
