import { Column, Entity } from "typeorm";

@Entity("customer_temp", { schema: "ecloud_rick" })
export class CustomerTemp {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "cno", length: 10 })
  cno: string;

  @Column("varchar", { name: "cname", length: 100 })
  cname: string;

  @Column("varchar", { name: "name", length: 100 })
  name: string;
}
