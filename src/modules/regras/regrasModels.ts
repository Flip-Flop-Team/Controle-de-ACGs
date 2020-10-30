import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Atividade } from "../atividades/atividadesModels";
import { Curriculo } from "../curriculos/curriculosModels";

@Entity("tbl_regras")
export class Regra extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: number;

  @Column()
  ehHora: boolean;

  @Column({ nullable: true })
  limite_hora_lancamento: number;

  @Column()
  hora_acg: number;

  @Column()
  hora_praticada: number;

  @Column()
  descricao: string;

  @ManyToOne((type) => Atividade)
  @JoinColumn({ name: "atividade_id" })
  atividade: Atividade;

  @ManyToOne((type) => Curriculo)
  @JoinColumn({ name: "curriculo_id" })
  curriculo: Curriculo;
}
