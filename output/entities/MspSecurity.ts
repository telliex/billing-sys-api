import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_security", { schema: "ecloud_rick" })
export class MspSecurity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "update_time", length: 19 })
  updateTime: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("longtext", { name: "aws_config" })
  awsConfig: string;
}
