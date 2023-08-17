import { Column, Entity } from "typeorm";

@Entity("Customer", { schema: "ecloud_rick" })
export class Customer {
  @Column("varchar", { name: "Id", nullable: true, length: 3 })
  id: string | null;

  @Column("varchar", { name: "Name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "UserId", nullable: true, length: 10 })
  userId: string | null;

  @Column("datetime", { name: "Birthday", nullable: true })
  birthday: Date | null;
}
