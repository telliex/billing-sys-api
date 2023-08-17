import { Column, Entity, Index } from "typeorm";

@Index("ix_pods", ["name"], {})
@Entity("ecs_pods", { schema: "ecloud_rick" })
export class EcsPods {
  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("int", { name: "job_count", nullable: true })
  jobCount: number | null;
}
