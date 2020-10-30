import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Curso } from "../cursos/cursosModels";

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

  @ManyToMany((type) => Curso, (curso) => curso.professores)
  @JoinTable({
    name: "tbl_professores_cursos",
    joinColumn: {
      name: "professor_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "curso_id",
      referencedColumnName: "id",
    },
  })
  cursos: Curso[];
}
