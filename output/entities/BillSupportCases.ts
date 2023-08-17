import { Column, Entity } from "typeorm";

@Entity("bill_support_cases", { schema: "ecloud_rick" })
export class BillSupportCases {
  @Column("varchar", { name: "account", nullable: true, length: 254 })
  account: string | null;

  @Column("varchar", { name: "caseId", nullable: true, length: 254 })
  caseId: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 1000 })
  subject: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 254 })
  status: string | null;

  @Column("varchar", { name: "submittedBy", nullable: true, length: 254 })
  submittedBy: string | null;

  @Column("varchar", { name: "timeCreated", nullable: true, length: 254 })
  timeCreated: string | null;

  @Column("varchar", { name: "ccEmailaddress", nullable: true, length: 500 })
  ccEmailaddress: string | null;

  @Column("varchar", { name: "serviceCode", nullable: true, length: 254 })
  serviceCode: string | null;

  @Column("varchar", { name: "categoryCode", nullable: true, length: 254 })
  categoryCode: string | null;

  @Column("varchar", { name: "severityCode", nullable: true, length: 254 })
  severityCode: string | null;

  @Column("varchar", { name: "displayId", nullable: true, length: 254 })
  displayId: string | null;

  @Column("varchar", { name: "RDstatus", nullable: true, length: 254 })
  rDstatus: string | null;

  @Column("int", { name: "alreadySent", nullable: true })
  alreadySent: number | null;

  @Column("varchar", { name: "ESSCaseId", nullable: true, length: 254 })
  essCaseId: string | null;
}
