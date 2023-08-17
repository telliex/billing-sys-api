import { Column, Entity } from "typeorm";

@Entity("msp_rightsizing", { schema: "ecloud_rick" })
export class MspRightsizing {
  @Column("varchar", { name: "update_time", length: 19 })
  updateTime: string;

  @Column("varchar", { name: "linked_account_id", nullable: true, length: 12 })
  linkedAccountId: string | null;

  @Column("varchar", { name: "region", nullable: true, length: 22 })
  region: string | null;

  @Column("varchar", { name: "instancetype", nullable: true, length: 300 })
  instancetype: string | null;

  @Column("varchar", { name: "vcpu", nullable: true, length: 300 })
  vcpu: string | null;

  @Column("varchar", { name: "memory", nullable: true, length: 300 })
  memory: string | null;

  @Column("varchar", { name: "storage", nullable: true, length: 300 })
  storage: string | null;

  @Column("varchar", {
    name: "networkperformance",
    nullable: true,
    length: 300,
  })
  networkperformance: string | null;

  @Column("varchar", { name: "priceperunit", nullable: true, length: 300 })
  priceperunit: string | null;

  @Column("varchar", { name: "instanceid", nullable: true, length: 300 })
  instanceid: string | null;

  @Column("decimal", {
    name: "maxcpu",
    nullable: true,
    precision: 15,
    scale: 8,
  })
  maxcpu: string | null;

  @Column("decimal", {
    name: "maxiops",
    nullable: true,
    precision: 20,
    scale: 11,
  })
  maxiops: string | null;

  @Column("decimal", {
    name: "maxnetwork",
    nullable: true,
    precision: 37,
    scale: 21,
  })
  maxnetwork: string | null;

  @Column("varchar", { name: "instancetags", nullable: true, length: 1000 })
  instancetags: string | null;

  @Column("varchar", { name: "resizetype", nullable: true, length: 300 })
  resizetype: string | null;

  @Column("varchar", { name: "newvcpu", nullable: true, length: 300 })
  newvcpu: string | null;

  @Column("varchar", { name: "newmemory", nullable: true, length: 300 })
  newmemory: string | null;

  @Column("varchar", { name: "newnetwork", nullable: true, length: 300 })
  newnetwork: string | null;

  @Column("varchar", { name: "resizeprice", nullable: true, length: 300 })
  resizeprice: string | null;

  @Column("varchar", { name: "costsavedpermonth", nullable: true, length: 300 })
  costsavedpermonth: string | null;

  @Column("varchar", { name: "newstorage", nullable: true, length: 300 })
  newstorage: string | null;

  @Column("decimal", {
    name: "maxmemory",
    nullable: true,
    precision: 15,
    scale: 8,
  })
  maxmemory: string | null;

  @Column("varchar", { name: "operatingsystem", nullable: true, length: 300 })
  operatingsystem: string | null;

  @Column("varchar", { name: "preinstalledsw", nullable: true, length: 300 })
  preinstalledsw: string | null;
}
