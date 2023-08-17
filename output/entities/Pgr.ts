import { Column, Entity } from "typeorm";

@Entity("PGR", { schema: "ecloud_rick" })
export class Pgr {
  @Column("varchar", { name: "AWS_ACCOUNT_ID", nullable: true, length: 255 })
  awsAccountId: string | null;

  @Column("varchar", { name: "AWS_ACCOUNT_NAME", nullable: true, length: 255 })
  awsAccountName: string | null;

  @Column("varchar", { name: "ELIGIBILITY", nullable: true, length: 255 })
  eligibility: string | null;

  @Column("varchar", {
    name: "REASON_FOR_INELIGIBILITY",
    nullable: true,
    length: 255,
  })
  reasonForIneligibility: string | null;

  @Column("varchar", { name: "BASE_QUARTER", nullable: true, length: 255 })
  baseQuarter: string | null;

  @Column("varchar", {
    name: "BASE_QUARTER_AMORTIZED_FEES",
    nullable: true,
    length: 255,
  })
  baseQuarterAmortizedFees: string | null;

  @Column("varchar", { name: "BASE_QUARTER_M1", nullable: true, length: 255 })
  baseQuarterM1: string | null;

  @Column("varchar", { name: "BASE_QUARTER_M2", nullable: true, length: 255 })
  baseQuarterM2: string | null;

  @Column("varchar", { name: "BASE_QUARTER_M3", nullable: true, length: 255 })
  baseQuarterM3: string | null;

  @Column("varchar", { name: "GROWTH_QUARTER", nullable: true, length: 255 })
  growthQuarter: string | null;

  @Column("varchar", {
    name: "GROWTH_QUARTER_AMORTIZED_FEES",
    nullable: true,
    length: 255,
  })
  growthQuarterAmortizedFees: string | null;

  @Column("varchar", { name: "GROWTH_QUARTER_M1", nullable: true, length: 255 })
  growthQuarterM1: string | null;

  @Column("varchar", { name: "GROWTH_QUARTER_M2", nullable: true, length: 255 })
  growthQuarterM2: string | null;

  @Column("varchar", { name: "GROWTH_QUARTER_M3", nullable: true, length: 255 })
  growthQuarterM3: string | null;

  @Column("varchar", { name: "YOY_GROWTH", nullable: true, length: 255 })
  yoyGrowth: string | null;

  @Column("varchar", { name: "GROWTH", nullable: true, length: 255 })
  growth: string | null;

  @Column("varchar", { name: "GROWTH_TARGET", nullable: true, length: 255 })
  growthTarget: string | null;

  @Column("varchar", { name: "GAP_TO_GOAL", nullable: true, length: 255 })
  gapToGoal: string | null;

  @Column("varchar", { name: "PGR_CREDIT", nullable: true, length: 255 })
  pgrCredit: string | null;
}
