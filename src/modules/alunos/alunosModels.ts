import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("tbl_alunos")
export class Aluno extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
