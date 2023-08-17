import { Column, Entity } from "typeorm";

@Entity("bill_support_aws_case", { schema: "ecloud_rick" })
export class BillSupportAwsCase {
  @Column("varchar", { name: "caseId", nullable: true, length: 255 })
  caseId: string | null;

  @Column("varchar", { name: "displayId", nullable: true, length: 255 })
  displayId: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "submittedBy", nullable: true, length: 255 })
  submittedBy: string | null;

  @Column("varchar", { name: "timeCreated", nullable: true, length: 255 })
  timeCreated: string | null;

  @Column("varchar", { name: "ccEmailAddress", nullable: true, length: 255 })
  ccEmailAddress: string | null;

  @Column("varchar", { name: "serviceCode", nullable: true, length: 255 })
  serviceCode: string | null;

  @Column("varchar", { name: "categoryCode", nullable: true, length: 255 })
  categoryCode: string | null;

  @Column("varchar", { name: "account", nullable: true, length: 255 })
  account: string | null;

  @Column("varchar", { name: "severityCode", nullable: true, length: 255 })
  severityCode: string | null;
}
