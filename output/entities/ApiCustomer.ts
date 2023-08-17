import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("api_customer", { schema: "ecloud_rick" })
export class ApiCustomer {
  @PrimaryGeneratedColumn({ type: "int", name: "ac_id" })
  acId: number;

  @Column("int", { name: "ac_cid", nullable: true })
  acCid: number | null;

  @Column("varchar", { name: "ac_api_key", nullable: true, length: 32 })
  acApiKey: string | null;

  @Column("varchar", { name: "ac_api_secret", nullable: true, length: 64 })
  acApiSecret: string | null;

  @Column("smallint", { name: "ac_status", nullable: true })
  acStatus: number | null;

  @Column("datetime", { name: "add_time", nullable: true })
  addTime: Date | null;

  @Column("datetime", { name: "upd_time", nullable: true })
  updTime: Date | null;
}
