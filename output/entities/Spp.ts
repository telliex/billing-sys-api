import { Column, Entity } from "typeorm";

@Entity("SPP", { schema: "ecloud_rick" })
export class Spp {
  @Column("varchar", { name: "Region", nullable: true, length: 255 })
  region: string | null;

  @Column("varchar", { name: "BillPeriod", nullable: true, length: 255 })
  billPeriod: string | null;

  @Column("varchar", { name: "PayerAccount", nullable: true, length: 255 })
  payerAccount: string | null;

  @Column("varchar", { name: "SPPName", nullable: true, length: 255 })
  sppName: string | null;

  @Column("varchar", { name: "SPMSID", nullable: true, length: 255 })
  spmsid: string | null;

  @Column("varchar", { name: "InvoiceID", nullable: true, length: 255 })
  invoiceId: string | null;

  @Column("varchar", { name: "ProductCode", nullable: true, length: 255 })
  productCode: string | null;

  @Column("varchar", { name: "LinkedAccount", nullable: true, length: 255 })
  linkedAccount: string | null;

  @Column("decimal", { name: "Sum", nullable: true, precision: 20, scale: 7 })
  sum: string | null;

  @Column("varchar", { name: "Support", nullable: true, length: 255 })
  support: string | null;

  @Column("varchar", { name: "NetNewBusiness", nullable: true, length: 255 })
  netNewBusiness: string | null;

  @Column("varchar", { name: "PartnerOriginated", nullable: true, length: 255 })
  partnerOriginated: string | null;

  @Column("varchar", { name: "Internal", nullable: true, length: 255 })
  internal: string | null;

  @Column("varchar", { name: "NoEUR", nullable: true, length: 255 })
  noEur: string | null;

  @Column("varchar", { name: "ShareShift", nullable: true, length: 255 })
  shareShift: string | null;

  @Column("varchar", { name: "Exception1", nullable: true, length: 255 })
  exception1: string | null;

  @Column("varchar", { name: "PSP", nullable: true, length: 255 })
  psp: string | null;

  @Column("varchar", { name: "BaseorBaseTech", nullable: true, length: 255 })
  baseorBaseTech: string | null;

  @Column("varchar", { name: "BRException", nullable: true, length: 255 })
  brException: string | null;

  @Column("varchar", { name: "Support2", nullable: true, length: 255 })
  support2: string | null;

  @Column("varchar", { name: "NetNewBusiness2", nullable: true, length: 255 })
  netNewBusiness2: string | null;

  @Column("varchar", {
    name: "PartnerOriginated2",
    nullable: true,
    length: 255,
  })
  partnerOriginated2: string | null;

  @Column("varchar", { name: "Internal2", nullable: true, length: 255 })
  internal2: string | null;

  @Column("varchar", { name: "NoEUR2", nullable: true, length: 255 })
  noEur2: string | null;

  @Column("varchar", { name: "ShareShift2", nullable: true, length: 255 })
  shareShift2: string | null;

  @Column("varchar", { name: "Exception2", nullable: true, length: 255 })
  exception2: string | null;

  @Column("varchar", { name: "PSP2", nullable: true, length: 255 })
  psp2: string | null;

  @Column("varchar", { name: "BaseorBaseTech2", nullable: true, length: 255 })
  baseorBaseTech2: string | null;

  @Column("varchar", { name: "BRException2", nullable: true, length: 255 })
  brException2: string | null;

  @Column("decimal", {
    name: "TotalDiscount",
    nullable: true,
    precision: 20,
    scale: 7,
  })
  totalDiscount: string | null;

  @Column("varchar", { name: "AutomatedAmount", nullable: true, length: 255 })
  automatedAmount: string | null;

  @Column("varchar", { name: "NNBStartDate", nullable: true, length: 255 })
  nnbStartDate: string | null;

  @Column("varchar", { name: "NNBEndDate", nullable: true, length: 255 })
  nnbEndDate: string | null;
}
