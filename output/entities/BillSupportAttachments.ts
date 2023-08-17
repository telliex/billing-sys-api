import { Column, Entity } from "typeorm";

@Entity("bill_support_attachments", { schema: "ecloud_rick" })
export class BillSupportAttachments {
  @Column("varchar", { name: "caseId", nullable: true, length: 254 })
  caseId: string | null;

  @Column("varchar", { name: "fileName", nullable: true, length: 254 })
  fileName: string | null;

  @Column("varchar", { name: "attachmentId", nullable: true, length: 500 })
  attachmentId: string | null;

  @Column("varchar", { name: "userfileName", nullable: true, length: 254 })
  userfileName: string | null;

  @Column("datetime", { name: "timeCreated", nullable: true })
  timeCreated: Date | null;
}
