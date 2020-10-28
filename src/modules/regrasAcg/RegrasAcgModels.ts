import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("tbl_regras_acg")
export class RegraAcg extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eh_evento: boolean;

  @Column()
  valor_acg: number;

  @Column()
  valor_hora: number;
}
