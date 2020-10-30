import { gql } from "apollo-server";
export default gql`
  scalar Date

  type Lancamento {
    id: ID!
    regra: Regra!
    carga_horaria_real: Float!
    carga_horaria_acg: Float!
    data_inicio: Date!
    data_fim: Date!
    arquivo: String!
    descricao: String!
  }
  input LancamentoInput {
    regra: Int!
    carga_horaria_real: Float!
    carga_horaria_acg: Float!
    data_inicio: Date!
    data_fim: Date!
    arquivo: String!
    descricao: String!
  }
  extend type Query {
    lancamentos: [Lancamento!]!
  }
  extend type Mutation {
    createLancamento(dados: LancamentoInput): Lancamento
  }
`;
