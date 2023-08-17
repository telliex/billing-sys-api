import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ix_bill_item_sap_cost_biil_period", ["billPeriod"], {})
@Entity("bill_item_sap_cost", { schema: "ecloud_rick" })
export class BillItemSapCost {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_close", default: () => "'0'" })
  billClose: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "sap_cno", length: 20 })
  sapCno: string;

  @Column("text", { name: "bill_customer_list", nullable: true })
  billCustomerList: string | null;

  @Column("decimal", {
    name: "weight_range",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  weightRange: string | null;

  @Column("varchar", { name: "settle_date", length: 2 })
  settleDate: string;

  @Column("char", { name: "origin_data_flag", length: 1, default: () => "'y'" })
  originDataFlag: string;

  @Column("int", { name: "sap_doc_num", nullable: true })
  sapDocNum: number | null;

  @Column("char", { name: "invoice_flag", length: 1, default: () => "'n'" })
  invoiceFlag: string;

  @Column("decimal", { name: "bill_rate", precision: 15, scale: 7 })
  billRate: string;

  @Column("decimal", { name: "line_total", precision: 22, scale: 7 })
  lineTotal: string;

  @Column("decimal", {
    name: "over_short_price",
    precision: 22,
    scale: 7,
    default: () => "'0.0000000'",
  })
  overShortPrice: string;

  @Column("int", { name: "sap_doc_num_cost" })
  sapDocNumCost: number;

  @Column("decimal", { name: "totalcost", precision: 15, scale: 7 })
  totalcost: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
