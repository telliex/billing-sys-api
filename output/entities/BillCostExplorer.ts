import { Column, Entity } from "typeorm";

@Entity("bill_cost_explorer", { schema: "ecloud_rick" })
export class BillCostExplorer {
  @Column("varchar", { name: "update_time", length: 20 })
  updateTime: string;

  @Column("varchar", { name: "payer_account_id", length: 12 })
  payerAccountId: string;

  @Column("varchar", { name: "linked_account_id", length: 12 })
  linkedAccountId: string;

  @Column("float", { name: "unblended_cost", precision: 12 })
  unblendedCost: number;
}
