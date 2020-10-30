import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Aluno } from "../alunos/alunosModels";
import { Regra } from "../regras/regrasModels";

@Entity("tbl_lancamentos")
export class Lancamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Regra)
  @JoinColumn({ name: "regra_id" })
  regra: string;

  @Column()
  carga_horaria_real: number;

  @Column()
  carga_horaria_acg: number;

  @Column()
  data_inicio: Date;

  @Column()
  data_fim: Date;

  @Column()
  arquivo: string;

  @Column()
  descricao: string;

  @ManyToOne((type) => Aluno)
  @JoinColumn({ name: "aluno_id" })
  aluno: Aluno;
}
