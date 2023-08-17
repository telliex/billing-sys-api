import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("at_job_log", { schema: "ecloud_rick" })
export class AtJobLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "job_name",
    nullable: true,
    comment: "program name",
    length: 100,
  })
  jobName: string | null;

  @Column("varchar", { name: "job_title", nullable: true, length: 200 })
  jobTitle: string | null;

  @Column("varchar", { name: "job_start_time", nullable: true, length: 20 })
  jobStartTime: string | null;

  @Column("varchar", { name: "job_stop_time", nullable: true, length: 20 })
  jobStopTime: string | null;

  @Column("char", {
    name: "job_status",
    nullable: true,
    comment: "1:running  2:success 3:failed",
    length: 1,
  })
  jobStatus: string | null;

  @Column("text", { name: "job_result", nullable: true })
  jobResult: string | null;
}
