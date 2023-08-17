import { Column, Entity } from "typeorm";

@Entity("workflow_permission", { schema: "ecloud_rick" })
export class WorkflowPermission {
  @Column("int", { primary: true, name: "user_id" })
  userId: number;

  @Column("varchar", { name: "group", nullable: true, length: 255 })
  group: string | null;

  @Column("varchar", { name: "approval_group", nullable: true, length: 255 })
  approvalGroup: string | null;
}
