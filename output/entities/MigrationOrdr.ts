import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_ordr_bill_close_IDX", ["billClose"], {})
@Entity("migration_ordr", { schema: "ecloud_rick" })
export class MigrationOrdr {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_close", default: () => "'0'" })
  billClose: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("int", { name: "year" })
  year: number;

  @Column("int", { name: "month" })
  month: number;

  @Column("varchar", {
    name: "leadger_country",
    length: 3,
    default: () => "'na'",
  })
  leadgerCountry: string;

  @Column("int", { name: "doc_num", comment: "流水號" })
  docNum: number;

  @Column("varchar", { name: "doc_type", nullable: true, length: 20 })
  docType: string | null;

  @Column("date", { name: "doc_date", comment: "文件日期/SAP開票日期" })
  docDate: string;

  @Column("date", { name: "doc_due_date", comment: "付款到期日" })
  docDueDate: string;

  @Column("date", { name: "tax_date", comment: "稅日期/SAP過帳日期" })
  taxDate: string;

  @Column("varchar", { name: "card_code", nullable: true, length: 15 })
  cardCode: string | null;

  @Column("varchar", { name: "num_at_card", length: 1 })
  numAtCard: string;

  @Column("varchar", { name: "doc_currency", length: 3 })
  docCurrency: string;

  @Column("decimal", {
    name: "doc_rate",
    nullable: true,
    precision: 10,
    scale: 5,
  })
  docRate: string | null;

  @Column("varchar", { name: "sales_person_code", length: 10 })
  salesPersonCode: string;

  @Column("varchar", { name: "u_in_bs_ty1", nullable: true, length: 20 })
  uInBsTy1: string | null;

  @Column("varchar", { name: "u_in_bs_inv", nullable: true, length: 20 })
  uInBsInv: string | null;

  @Column("varchar", { name: "u_in_bs_dat", nullable: true, length: 20 })
  uInBsDat: string | null;

  @Column("varchar", { name: "u_in_bs_crd", nullable: true, length: 20 })
  uInBsCrd: string | null;

  @Column("varchar", { name: "u_in_bs_not", nullable: true, length: 20 })
  uInBsNot: string | null;

  @Column("varchar", { name: "u_in_bs_amn", nullable: true, length: 20 })
  uInBsAmn: string | null;

  @Column("varchar", { name: "u_in_bs_tax", nullable: true, length: 20 })
  uInBsTax: string | null;

  @Column("varchar", { name: "u_in_bs_amt", nullable: true, length: 20 })
  uInBsAmt: string | null;

  @Column("varchar", { name: "u_gui_email", nullable: true, length: 255 })
  uGuiEmail: string | null;

  @Column("varchar", { name: "u_bs_plt", nullable: true, length: 10 })
  uBsPlt: string | null;

  @Column("varchar", { name: "u_self_note", nullable: true, length: 100 })
  uSelfNote: string | null;

  @Column("date", { name: "u_due_date", nullable: true })
  uDueDate: string | null;

  @Column("varchar", { name: "u_linked_account_id", length: 20 })
  uLinkedAccountId: string;

  @Column("varchar", { name: "u_atlas_invoice_key", length: 50 })
  uAtlasInvoiceKey: string;

  @Column("varchar", { name: "mgt_cno", length: 20 })
  mgtCno: string;

  @Column("varchar", { name: "customer_type", nullable: true, length: 1 })
  customerType: string | null;

  @Column("varchar", { name: "industry", nullable: true, length: 2 })
  industry: string | null;

  @Column("varchar", { name: "sub_org", nullable: true, length: 100 })
  subOrg: string | null;

  @Column("decimal", { name: "sum_rate", precision: 17, scale: 2 })
  sumRate: string;

  @Column("varchar", { name: "source", nullable: true, length: 1 })
  source: string | null;
}
