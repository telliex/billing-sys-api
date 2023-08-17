import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ecv_customer_user", { schema: "ecloud_rick" })
export class EcvCustomerUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_customer", nullable: true })
  billCustomer: number | null;

  @Column("blob", { name: "email", nullable: true })
  email: Buffer | null;

  @Column("varchar", { name: "password", nullable: true, length: 80 })
  password: string | null;

  @Column("blob", { name: "name", nullable: true })
  name: Buffer | null;

  @Column("varchar", { name: "change_pwd_time", nullable: true, length: 20 })
  changePwdTime: string | null;

  @Column("varchar", { name: "forgotpassword_time", length: 20 })
  forgotpasswordTime: string;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 20 })
  changeTime: string | null;

  @Column("char", { name: "hide", nullable: true, length: 1 })
  hide: string | null;
}
