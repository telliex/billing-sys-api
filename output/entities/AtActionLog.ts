import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("at_action_log", { schema: "ecloud_rick" })
export class AtActionLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_customer_user_id" })
  billCustomerUserId: number;

  @Column("varchar", {
    name: "action_type",
    comment: "Type of the action. create, update, delte",
    length: 10,
  })
  actionType: string;

  @Column("varchar", {
    name: "action_name",
    comment:
      "Name of the action, can be API name or page name. It is identical for user to search files for debugging",
    length: 64,
  })
  actionName: string;

  @Column("text", { name: "detail", nullable: true })
  detail: string | null;

  @Column("datetime", { name: "created_time", comment: "Time of creation" })
  createdTime: Date;
}
