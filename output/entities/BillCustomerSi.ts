import { Column, Entity } from "typeorm";

@Entity("bill_customer_si", { schema: "ecloud_rick" })
export class BillCustomerSi {
  @Column("int", { primary: true, name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "cno", nullable: true, length: 10 })
  cno: string | null;

  @Column("int", { name: "bill_customer_si", nullable: true })
  billCustomerSi: number | null;

  @Column("varchar", { name: "cname", nullable: true, length: 255 })
  cname: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "contact", nullable: true, length: 255 })
  contact: string | null;

  @Column("varchar", { name: "contact_tel", nullable: true, length: 255 })
  contactTel: string | null;

  @Column("varchar", { name: "contact_email", nullable: true, length: 255 })
  contactEmail: string | null;

  @Column("varchar", { name: "tax_no", nullable: true, length: 50 })
  taxNo: string | null;

  @Column("text", { name: "memo", nullable: true })
  memo: string | null;

  @Column("varchar", { name: "business_support", nullable: true, length: 10 })
  businessSupport: string | null;

  @Column("decimal", {
    name: "discount",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  discount: string | null;

  @Column("decimal", {
    name: "min_charge",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  minCharge: string | null;

  @Column("varchar", { name: "deadline", nullable: true, length: 10 })
  deadline: string | null;

  @Column("varchar", { name: "logo", nullable: true, length: 60 })
  logo: string | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 20 })
  changeTime: string | null;

  @Column("tinyint", {
    name: "is_hide_credit",
    nullable: true,
    comment: "Hide credit on invoice or not",
    width: 1,
    default: () => "'1'",
  })
  isHideCredit: boolean | null;
}
