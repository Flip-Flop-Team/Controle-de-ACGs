import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("tbl_atividade")
export class Atividade extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: number;

  @Column({ nullable: true })
  limite_hora: number;
}
