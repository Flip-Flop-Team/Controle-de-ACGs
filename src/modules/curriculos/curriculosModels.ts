import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Curso } from "../cursos/cursosModels";

@Entity("tbl_curriculos")
export class Curriculo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  carga_horaria: number;

  @ManyToMany((type) => Curso, (curso) => curso.curriculos)
  cursos: Curso[];
}
