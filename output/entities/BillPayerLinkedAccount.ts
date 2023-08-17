import { Column, Entity } from "typeorm";

@Entity("bill_payer_linked_account", { schema: "ecloud_rick" })
export class BillPayerLinkedAccount {
  @Column("varchar", { name: "PayerAccountId", nullable: true, length: 20 })
  payerAccountId: string | null;

  @Column("varchar", { name: "LinkedAccountId", nullable: true, length: 20 })
  linkedAccountId: string | null;
}
