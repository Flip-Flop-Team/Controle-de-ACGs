import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { RegraAcg } from "../regrasAcg/RegrasAcgModels";

@Entity("tbl_lancamentos")
export class Lancamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  regra_acg: RegraAcg;

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
}
