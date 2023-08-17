import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_best_practice_rule", { schema: "ecloud_rick" })
export class MspBestPracticeRule {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "category", length: 30 })
  category: string;

  @Column("text", { name: "subcategory" })
  subcategory: string;

  @Column("varchar", { name: "importance", length: 50 })
  importance: string;

  @Column("varchar", { name: "service", length: 50 })
  service: string;

  @Column("text", { name: "ruleName" })
  ruleName: string;

  @Column("text", { name: "rule" })
  rule: string;

  @Column("text", { name: "ruleDescription" })
  ruleDescription: string;

  @Column("char", { name: "flag", length: 1 })
  flag: string;
}
