import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpRecommendation } from "./SpRecommendation";

@Index("sp_recommendation_idx", ["sprId"], {})
@Entity("sp_recommendation_detail", { schema: "ecloud_rick" })
export class SpRecommendationDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "spr_id" })
  sprId: number;

  @Column("varchar", {
    name: "type",
    comment: "Type of calculation\ne.g. min, max, avg, p25, p50, p75",
    length: 10,
  })
  type: string;

  @Column("float", {
    name: "cost_recommend",
    comment: "Recommendation cost. Format: #.00",
    precision: 12,
  })
  costRecommend: number;

  @Column("float", {
    name: "cost_on_demand",
    comment: "Cost base on current type. Format: #.00",
    precision: 12,
  })
  costOnDemand: number;

  @Column("float", {
    name: "total_sp_cost",
    comment: "Total savings plan cost. Format: #.00",
    precision: 12,
  })
  totalSpCost: number;

  @ManyToOne(
    () => SpRecommendation,
    (spRecommendation) => spRecommendation.spRecommendationDetails,
    { onDelete: "CASCADE", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "spr_id", referencedColumnName: "id" }])
  spr: SpRecommendation;
}
