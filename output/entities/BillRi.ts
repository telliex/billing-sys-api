import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_ri", { schema: "ecloud_rick" })
export class BillRi {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "Payer_Account_Id", length: 50 })
  payerAccountId: string;

  @Column("varchar", { name: "Linked_Account_Id", length: 50 })
  linkedAccountId: string;

  @Column("varchar", { name: "Service", length: 50 })
  service: string;

  @Column("varchar", { name: "Begin_Date", length: 50 })
  beginDate: string;

  @Column("varchar", { name: "End_Date", length: 50 })
  endDate: string;

  @Column("varchar", { name: "Offering_Type_Description", length: 50 })
  offeringTypeDescription: string;

  @Column("varchar", { name: "Instance_Type", length: 50 })
  instanceType: string;

  @Column("varchar", { name: "Fixed_Price", length: 50 })
  fixedPrice: string;

  @Column("varchar", { name: "Product_Description", length: 50 })
  productDescription: string;

  @Column("varchar", { name: "External_Az", length: 50 })
  externalAz: string;

  @Column("varchar", { name: "Billing_Subscription_Id", length: 50 })
  billingSubscriptionId: string;

  @Column("varchar", { name: "Lease_Term", length: 50 })
  leaseTerm: string;

  @Column("varchar", { name: "State", length: 50 })
  state: string;

  @Column("varchar", { name: "Lease_Id", length: 50 })
  leaseId: string;

  @Column("varchar", { name: "Instance_Count", length: 50 })
  instanceCount: string;

  @Column("varchar", { name: "Charge_Amount_Before_Tax", length: 50 })
  chargeAmountBeforeTax: string;

  @Column("varchar", { name: "Region", length: 50 })
  region: string;

  @Column("varchar", { name: "Usage_Price", length: 50 })
  usagePrice: string;

  @Column("varchar", { name: "Tenancy", length: 10 })
  tenancy: string;

  @Column("text", { name: "Usage_Type" })
  usageType: string;
}
