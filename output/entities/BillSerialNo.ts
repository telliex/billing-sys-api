import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_serial_no", { schema: "ecloud_rick" })
export class BillSerialNo {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("char", { name: "serial_type", comment: "i:invoice", length: 1 })
  serialType: string;

  @Column("varchar", { name: "serial_date", comment: "2017/03/31", length: 10 })
  serialDate: string;

  @Column("int", { name: "serial_no" })
  serialNo: number;

  @Column("int", { name: "bill_customer", nullable: true })
  billCustomer: number | null;

  @Column("varchar", { name: "cno", nullable: true, length: 10 })
  cno: string | null;

  @Column("varchar", { name: "bill_no", nullable: true, length: 20 })
  billNo: string | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 20 })
  changeTime: string | null;
}
