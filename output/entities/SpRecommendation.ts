import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpRecommendationDetail } from "./SpRecommendationDetail";

@Index(
  "idx_for_select",
  [
    "billPeriod",
    "linkedAccount",
    "planType",
    "paymentOption",
    "durationSeconds",
  ],
  {}
)
@Index("idx_for_delete", ["billPeriod", "linkedAccount", "planType"], {})
@Entity("sp_recommendation", { schema: "ecloud_rick" })
export class SpRecommendation {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "bill_period",
    comment: "Month of the recommendation. Format: yyyy/MM",
    length: 10,
  })
  billPeriod: string;

  @Column("varchar", {
    name: "linked_account",
    comment: "linkedAccount",
    length: 20,
  })
  linkedAccount: string;

  @Column("varchar", {
    name: "plan_type",
    comment: "Type of the plan\ne.g. compute, ec2",
    length: 20,
  })
  planType: string;

  @Column("varchar", {
    name: "instance_type_family",
    nullable: true,
    comment: "Family of instance\ne.g. c4, t2",
    length: 10,
  })
  instanceTypeFamily: string | null;

  @Column("varchar", {
    name: "location",
    nullable: true,
    comment: "Region name\ne.g. US East (N. Virginia)gon",
    length: 45,
  })
  location: string | null;

  @Column("varchar", {
    name: "payment_option",
    comment: "Option of payment\ne.g. All Upfront, No Upfront, Partial Upfront",
    length: 45,
  })
  paymentOption: string;

  @Column("int", {
    name: "duration_seconds",
    comment: "Term duration in Epoch\ne.g. 31536000",
  })
  durationSeconds: number;

  @Column("float", {
    name: "total_on_demand_cost",
    comment: "Total on-demand cost. Format: #.00",
    precision: 12,
  })
  totalOnDemandCost: number;

  @Column("int", { name: "total_hours", comment: "Total usage hours" })
  totalHours: number;

  @Column("float", {
    name: "usage_rate",
    comment: "Total usage rate",
    precision: 12,
  })
  usageRate: number;

  @Column("timestamp", {
    name: "created_datetime",
    comment: "Datetime of creation",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdDatetime: Date;

  @Column("timestamp", {
    name: "updated_datetime",
    comment: "Datetime of modification",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedDatetime: Date;

  @OneToMany(
    () => SpRecommendationDetail,
    (spRecommendationDetail) => spRecommendationDetail.spr
  )
  spRecommendationDetails: SpRecommendationDetail[];
}
