import { gql } from "apollo-server";

export default gql`
  type Curso {
    id: ID!
    regra_acg: RegraAcg!
    carga_horaria_real: Float!
    carga_horaria_acg: Float!
    data_inicio: DateTime!
    data_fim: DateTime!
    arquivo: String!
    descricao: String!;
  }
  extend type Query {
    lancamentos: [Lancamento!]!
  }
  extend type Mutation {
    createLancamento(dados: LancamentoInput): Lancamento
  }
`;
