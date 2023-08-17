import { Column, Entity } from "typeorm";

@Entity("workflow_request", { schema: "ecloud_rick" })
export class WorkflowRequest {
  @Column("varchar", { primary: true, name: "request_id", length: 255 })
  requestId: string;

  @Column("varchar", { name: "flow", length: 30 })
  flow: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("int", { name: "requester" })
  requester: number;

  @Column("varchar", { name: "status", length: 20 })
  status: string;

  @Column("datetime", { name: "create_ts" })
  createTs: Date;

  @Column("datetime", { name: "update_ts", nullable: true })
  updateTs: Date | null;

  @Column("varchar", { name: "approval_group", nullable: true, length: 255 })
  approvalGroup: string | null;

  @Column("int", { name: "approver", nullable: true })
  approver: number | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;
}
