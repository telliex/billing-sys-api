import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_customer_sap", { schema: "ecloud_rick" })
export class BillCustomerSap {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("char", {
    name: "debt_type",
    comment: "automatic/manually >> A/M",
    length: 1,
  })
  debtType: string;

  @Column("varchar", { name: "sap_cno", length: 20 })
  sapCno: string;

  @Column("decimal", {
    name: "weight_range",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  weightRange: string | null;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("char", { name: "debt_finish_flag", nullable: true, length: 1 })
  debtFinishFlag: string | null;

  @Column("char", { name: "hide", length: 1 })
  hide: string;
}
