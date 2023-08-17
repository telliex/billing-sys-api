import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_job_log", { schema: "ecloud_rick" })
export class MspJobLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 19 })
  changeTime: string;

  @Column("varchar", { name: "job_name", length: 50 })
  jobName: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "status", length: 10 })
  status: string;

  @Column("text", { name: "message" })
  message: string;
}
