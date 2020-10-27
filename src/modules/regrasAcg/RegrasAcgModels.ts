import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("tbl_regrasAcg")
export class RegraAcg extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
