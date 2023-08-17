import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_close", { schema: "ecloud_rick" })
export class BillClose {
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

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("tinyint", { name: "close_status", width: 1 })
  closeStatus: boolean;

  @Column("varchar", { name: "leadger_country", length: 3 })
  leadgerCountry: string;

  @Column("varchar", { name: "settle_date", length: 2 })
  settleDate: string;

  @Column("char", { name: "status", length: 1 })
  status: string;
}
