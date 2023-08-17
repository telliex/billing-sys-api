import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mgt_action_log", { schema: "ecloud_rick" })
export class MgtActionLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_master_id" })
  billMasterId: number;

  @Column("varchar", { name: "target", length: 30 })
  target: string;

  @Column("int", { name: "value" })
  value: number;

  @Column("varchar", {
    name: "action_type",
    comment: "Type of the action. create, update, delete",
    length: 10,
  })
  actionType: string;

  @Column("text", { name: "detail", nullable: true })
  detail: string | null;

  @Column("datetime", { name: "created_time", comment: "Time of creation" })
  createdTime: Date;
}
