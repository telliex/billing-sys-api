import { Column, Entity } from "typeorm";

@Entity("bill_awscontract_payer", { schema: "ecloud_rick" })
export class BillAwscontractPayer {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "change_time" })
  changeTime: Date;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("datetime", { name: "add_time" })
  addTime: Date;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("varchar", { name: "PayerAccountId", length: 20 })
  payerAccountId: string;

  @Column("varchar", {
    name: "list_id",
    comment: "refer to bill_awscontract_list id",
    length: 36,
  })
  listId: string;
}
