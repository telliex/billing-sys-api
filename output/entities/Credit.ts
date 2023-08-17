import { Column, Entity } from "typeorm";

@Entity("Credit", { schema: "ecloud_rick" })
export class Credit {
  @Column("varchar", { name: "cno", nullable: true, length: 255 })
  cno: string | null;

  @Column("varchar", { name: "cname", nullable: true, length: 255 })
  cname: string | null;

  @Column("varchar", {
    name: "linkedaccount_name",
    nullable: true,
    length: 255,
  })
  linkedaccountName: string | null;

  @Column("varchar", { name: "leadger_country", nullable: true, length: 255 })
  leadgerCountry: string | null;

  @Column("varchar", { name: "ecloud_sales_name", nullable: true, length: 255 })
  ecloudSalesName: string | null;

  @Column("varchar", { name: "bill_customer", nullable: true, length: 255 })
  billCustomer: string | null;

  @Column("varchar", { name: "payeraccount_id", nullable: true, length: 255 })
  payeraccountId: string | null;

  @Column("varchar", {
    name: "credit_owner_account",
    nullable: true,
    length: 255,
  })
  creditOwnerAccount: string | null;

  @Column("decimal", {
    name: "credits",
    nullable: true,
    precision: 20,
    scale: 7,
  })
  credits: string | null;

  @Column("varchar", { name: "item_description", nullable: true, length: 255 })
  itemDescription: string | null;

  @Column("varchar", { name: "settle_dept", nullable: true, length: 255 })
  settleDept: string | null;

  @Column("varchar", { name: "payment_country", nullable: true, length: 255 })
  paymentCountry: string | null;
}
