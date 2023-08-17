import { Column, Entity } from "typeorm";

@Entity("sap_company_transaction", { schema: "ecloud_rick" })
export class SapCompanyTransaction {
  @Column("varchar", {
    primary: true,
    name: "leadger_country",
    comment: "帳本國",
    length: 3,
  })
  leadgerCountry: string;

  @Column("int", { name: "leadger_country_code", comment: "帳本國編碼(SAP)" })
  leadgerCountryCode: number;

  @Column("varchar", { name: "payment_country", comment: "付款國", length: 3 })
  paymentCountry: string;

  @Column("int", { name: "payment_country_code", comment: "付款國編碼(SAP)" })
  paymentCountryCode: number;

  @Column("decimal", {
    name: "keep_points",
    comment: "留點數(%)",
    precision: 3,
    scale: 2,
  })
  keepPoints: string;

  @Column("varchar", {
    name: "invoice_merge_no",
    comment: "發票合併碼",
    length: 10,
  })
  invoiceMergeNo: string;

  @Column("varchar", {
    name: "currency",
    comment: "公司間交易幣別",
    length: 12,
  })
  currency: string;
}
