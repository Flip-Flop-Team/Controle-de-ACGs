import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Curso } from "../cursos/cursosModels";

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

  @ManyToOne((type) => Curso)
  @JoinColumn({ name: "curso_id" })
  curso: Curso;
}
