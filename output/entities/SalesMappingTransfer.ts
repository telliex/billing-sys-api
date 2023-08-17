import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sales_mapping_transfer", { schema: "ecloud_rick" })
export class SalesMappingTransfer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("varchar", { name: "r_sap_emp_no", length: 11 })
  rSapEmpNo: string;

  @Column("int", { name: "r_name_id" })
  rNameId: number;

  @Column("varchar", { name: "r_name", nullable: true, length: 100 })
  rName: string | null;

  @Column("varchar", { name: "v_sap_emp_no", length: 11 })
  vSapEmpNo: string;

  @Column("int", { name: "v_name_id" })
  vNameId: number;

  @Column("varchar", { name: "v_name", nullable: true, length: 100 })
  vName: string | null;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
