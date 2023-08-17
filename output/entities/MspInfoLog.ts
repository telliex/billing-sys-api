import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_info_log", { schema: "ecloud_rick" })
export class MspInfoLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 19 })
  changeTime: string;

  @Column("varchar", { name: "function_name", length: 50 })
  functionName: string;

  @Column("int", { name: "function_id" })
  functionId: number;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "region", length: 20 })
  region: string;

  @Column("text", { name: "message" })
  message: string;
}
