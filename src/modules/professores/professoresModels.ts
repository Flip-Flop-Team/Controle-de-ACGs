import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("tbl_professores")
export class Professor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  codigo: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
