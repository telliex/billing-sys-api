import { Column, Entity } from "typeorm";

@Entity("bill_support_com", { schema: "ecloud_rick" })
export class BillSupportCom {
  @Column("varchar", { name: "caseId", nullable: true, length: 254 })
  caseId: string | null;

  @Column("varchar", { name: "submittedBy", nullable: true, length: 254 })
  submittedBy: string | null;

  @Column("varchar", { name: "timeCreated", nullable: true, length: 254 })
  timeCreated: string | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @Column("int", { name: "alreadySent", nullable: true })
  alreadySent: number | null;

  @Column("varchar", { name: "RDstatus", nullable: true, length: 254 })
  rDstatus: string | null;

  @Column("varchar", { name: "displayId", nullable: true, length: 254 })
  displayId: string | null;

  @Column("varchar", { name: "cc", nullable: true, length: 500 })
  cc: string | null;

  @Column("varchar", { name: "ESSCaseId", nullable: true, length: 254 })
  essCaseId: string | null;
}
