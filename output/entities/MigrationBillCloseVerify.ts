import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("migration_bill_close_verify", { schema: "ecloud_rick" })
export class MigrationBillCloseVerify {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("char", {
    name: "type",
    comment: "0:customer, 1:internal",
    length: 1,
  })
  type: string;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("tinyint", { name: "close_status", width: 1 })
  closeStatus: boolean;

  @Column("varchar", {
    name: "leadger_country",
    nullable: true,
    comment: "當type=customer, 不可為null;當type=internam,一律為null",
    length: 3,
  })
  leadgerCountry: string | null;

  @Column("varchar", { name: "settle_date", length: 2 })
  settleDate: string;

  @Column("char", { name: "status", length: 1 })
  status: string;

  @Column("longtext", { name: "check_out", nullable: true })
  checkOut: string | null;
}
