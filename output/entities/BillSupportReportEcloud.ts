import { Column, Entity } from "typeorm";

@Entity("bill_support_report_ecloud", { schema: "ecloud_rick" })
export class BillSupportReportEcloud {
  @Column("varchar", { name: "caseId", length: 255 })
  caseId: string;

  @Column("date", { name: "time", nullable: true })
  time: string | null;

  @Column("varchar", { name: "r_assign", nullable: true, length: 5 })
  rAssign: string | null;

  @Column("varchar", { name: "r_reply", nullable: true, length: 5 })
  rReply: string | null;

  @Column("varchar", { name: "r_check", nullable: true, length: 5 })
  rCheck: string | null;

  @Column("varchar", { name: "r_resolved", nullable: true, length: 5 })
  rResolved: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;
}
