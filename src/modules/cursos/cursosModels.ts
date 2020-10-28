import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Professor } from "../professores/professoresModels";
import { Curriculo } from "../curriculos/curriculosModels";

@Entity("tbl_cursos")
export class Curso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  codigo: string;

  @ManyToMany((type) => Professor, (professor) => professor.cursos)
  professores: Professor[];

  @ManyToMany((type) => Curriculo, (curriculo) => curriculo.cursos)
  @JoinTable({
    name: "tbl_cursos_curriculos",
    joinColumn: {
      name: "curriculo_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "curso_id",
      referencedColumnName: "id",
    },
  })
  curriculos: Curriculo[];
}
