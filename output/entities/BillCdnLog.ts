import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_customer", ["billCustomer"], {})
@Entity("bill_cdn_log", { schema: "ecloud_rick" })
export class BillCdnLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { primary: true, name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "contract_period", length: 30 })
  contractPeriod: string;

  @Column("text", { name: "commit_region" })
  commitRegion: string;

  @Column("varchar", { name: "commit_quantity", length: 10 })
  commitQuantity: string;

  @Column("varchar", { name: "us", length: 20 })
  us: string;

  @Column("varchar", { name: "eu", length: 20 })
  eu: string;

  @Column("varchar", { name: "ap", length: 20 })
  ap: string;

  @Column("varchar", { name: "jp", length: 20 })
  jp: string;

  @Column("varchar", { name: "sa", length: 20 })
  sa: string;

  @Column("varchar", { name: "au", length: 20 })
  au: string;

  @Column("varchar", { name: "in", length: 20 })
  in: string;

  @Column("varchar", { name: "ca", nullable: true, length: 20 })
  ca: string | null;

  @Column("varchar", { name: "za", length: 20 })
  za: string;

  @Column("varchar", { name: "me", length: 20 })
  me: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
