import { Column, Entity } from "typeorm";

@Entity("bill_support_ecloud_case", { schema: "ecloud_rick" })
export class BillSupportEcloudCase {
  @Column("varchar", { name: "account", nullable: true, length: 255 })
  account: string | null;

  @Column("varchar", { name: "caseId", nullable: true, length: 255 })
  caseId: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "submittedBy", nullable: true, length: 255 })
  submittedBy: string | null;

  @Column("datetime", { name: "timeCreated", nullable: true })
  timeCreated: Date | null;

  @Column("varchar", { name: "ccEmailAddress", nullable: true, length: 255 })
  ccEmailAddress: string | null;

  @Column("varchar", { name: "serviceType", nullable: true, length: 255 })
  serviceType: string | null;

  @Column("varchar", { name: "severityCode", nullable: true, length: 255 })
  severityCode: string | null;

  @Column("varchar", { name: "serviceCode", nullable: true, length: 255 })
  serviceCode: string | null;

  @Column("varchar", { name: "categoryCode", nullable: true, length: 255 })
  categoryCode: string | null;

  @Column("varchar", { name: "engineer", nullable: true, length: 255 })
  engineer: string | null;

  @Column("varchar", { name: "awsLinkedId", nullable: true, length: 255 })
  awsLinkedId: string | null;

  @Column("varchar", { name: "customer", nullable: true, length: 255 })
  customer: string | null;

  @Column("varchar", { name: "contact", nullable: true, length: 255 })
  contact: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 255 })
  tel: string | null;

  @Column("varchar", { name: "technicalSupport", nullable: true, length: 255 })
  technicalSupport: string | null;

  @Column("datetime", { name: "endtime", nullable: true })
  endtime: Date | null;

  @Column("datetime", { name: "tecTime", nullable: true })
  tecTime: Date | null;

  @Column("datetime", { name: "note", nullable: true })
  note: Date | null;

  @Column("varchar", { name: "double_check", nullable: true, length: 3 })
  doubleCheck: string | null;

  @Column("datetime", { name: "over_time", nullable: true })
  overTime: Date | null;

  @Column("varchar", { name: "r_assign", nullable: true, length: 5 })
  rAssign: string | null;

  @Column("varchar", { name: "r_reply", nullable: true, length: 5 })
  rReply: string | null;

  @Column("varchar", { name: "r_check", nullable: true, length: 5 })
  rCheck: string | null;

  @Column("varchar", { name: "r_resolved", nullable: true, length: 5 })
  rResolved: string | null;

  @Column("int", { name: "version", nullable: true })
  version: number | null;

  @Column("varchar", { name: "awsCaseId", nullable: true, length: 255 })
  awsCaseId: string | null;

  @Column("varchar", { name: "ticketPriority", nullable: true, length: 10 })
  ticketPriority: string | null;

  @Column("varchar", { name: "ticketType", nullable: true, length: 255 })
  ticketType: string | null;
}
