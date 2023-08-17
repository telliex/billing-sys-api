import { Column, Entity } from "typeorm";

@Entity("bill_support_sales_case", { schema: "ecloud_rick" })
export class BillSupportSalesCase {
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

  @Column("varchar", { name: "engineer", nullable: true, length: 255 })
  engineer: string | null;

  @Column("varchar", { name: "awsLinkedId", nullable: true, length: 255 })
  awsLinkedId: string | null;

  @Column("varchar", { name: "customer", nullable: true, length: 255 })
  customer: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 255 })
  tel: string | null;

  @Column("varchar", { name: "contact", nullable: true, length: 255 })
  contact: string | null;

  @Column("varchar", { name: "technicalSupport", nullable: true, length: 255 })
  technicalSupport: string | null;

  @Column("datetime", { name: "endtime", nullable: true })
  endtime: Date | null;

  @Column("varchar", { name: "categoryCode", nullable: true, length: 255 })
  categoryCode: string | null;

  @Column("datetime", { name: "tecTime", nullable: true })
  tecTime: Date | null;

  @Column("datetime", { name: "note", nullable: true })
  note: Date | null;

  @Column("varchar", { name: "double_check", nullable: true, length: 3 })
  doubleCheck: string | null;

  @Column("int", { name: "version", nullable: true })
  version: number | null;
}
