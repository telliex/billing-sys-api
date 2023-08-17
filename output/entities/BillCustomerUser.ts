import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_customer_user", { schema: "ecloud_rick" })
export class BillCustomerUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_customer", nullable: true })
  billCustomer: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 80 })
  password: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "account_type", length: 10 })
  accountType: string;

  @Column("varchar", { name: "change_pwd_time", nullable: true, length: 20 })
  changePwdTime: string | null;

  @Column("varchar", { name: "forgotpassword_time", length: 20 })
  forgotpasswordTime: string;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 20 })
  changeTime: string | null;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("char", { name: "hide", nullable: true, length: 1 })
  hide: string | null;

  @Column("datetime", { name: "datetime_of_change_pwd_time", nullable: true })
  datetimeOfChangePwdTime: Date | null;

  @Column("datetime", { name: "datetime_of_change_time", nullable: true })
  datetimeOfChangeTime: Date | null;

  @Column("datetime", {
    name: "datetime_of_forgotpassword_time",
    nullable: true,
  })
  datetimeOfForgotpasswordTime: Date | null;

  @Column("datetime", { name: "datetime_of_add_time", nullable: true })
  datetimeOfAddTime: Date | null;
}
