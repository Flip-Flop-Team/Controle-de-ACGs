import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Curso } from "../cursos/cursosModels";
import { Curriculo } from "../curriculos/curriculosModels";

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

  @ManyToOne((type) => Curriculo)
  @JoinColumn({ name: "curriculo_id" })
  curriculo: Curriculo;
}
