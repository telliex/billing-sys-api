import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_payer_account", { schema: "ecloud_rick" })
export class BillPayerAccount {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "account_no", nullable: true, length: 20 })
  accountNo: string | null;

  @Column("varchar", { name: "account_name", nullable: true, length: 32 })
  accountName: string | null;

  @Column("varchar", { name: "account_key", nullable: true, length: 32 })
  accountKey: string | null;

  @Column("varchar", { name: "account_secret", nullable: true, length: 64 })
  accountSecret: string | null;

  @Column("varchar", { name: "s3_bucket", nullable: true, length: 128 })
  s3Bucket: string | null;

  @Column("smallint", { name: "job_id", nullable: true })
  jobId: number | null;

  @Column("varchar", { name: "shared", nullable: true, length: 12 })
  shared: string | null;

  @Column("char", { name: "status", length: 1, default: () => "'n'" })
  status: string;

  @Column("char", { name: "hide", nullable: true, length: 1 })
  hide: string | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 10 })
  changeTime: string | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("char", { name: "RI_Rebilling", length: 1, default: () => "'n'" })
  riRebilling: string;

  @Column("char", {
    name: "Enterprise_Support",
    length: 1,
    default: () => "'n'",
  })
  enterpriseSupport: string;

  @Column("char", { name: "Disablecredit", length: 1, default: () => "'n'" })
  disablecredit: string;

  @Column("varchar", { name: "partnerID", nullable: true, length: 50 })
  partnerId: string | null;

  @Column("varchar", { name: "cfrc_dfrc", nullable: true, length: 200 })
  cfrcDfrc: string | null;

  @Column("varchar", { name: "note", nullable: true, length: 1000 })
  note: string | null;

  @Column("varchar", { name: "billing_block", nullable: true, length: 50 })
  billingBlock: string | null;

  @Column("varchar", { name: "edp", nullable: true, length: 20 })
  edp: string | null;

  @Column("varchar", { name: "country", length: 2 })
  country: string;

  @Column("varchar", { name: "support_plan", length: 15 })
  supportPlan: string;

  @Column("decimal", {
    name: "rebate_rate",
    nullable: true,
    precision: 8,
    scale: 5,
    default: () => "'0.07000'",
  })
  rebateRate: string | null;

  @Column("varchar", { name: "cloudtrail_bucket", nullable: true, length: 128 })
  cloudtrailBucket: string | null;

  @Column("varchar", { name: "payment_country", nullable: true, length: 2 })
  paymentCountry: string | null;

  @Column("date", {
    name: "release_date",
    comment:
      "提供Payeracocunt日期:格式為yyyy-mm-dd,1900-01-01為預設,2013-01-01為舊payer",
    default: () => "'1900-01-01'",
  })
  releaseDate: string;
}
