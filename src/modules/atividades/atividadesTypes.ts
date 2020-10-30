import { gql } from "apollo-server";

export default gql`
  type Atividade {
    id: ID!
    nome: String!
    limite_hora: Int!
  }
  input AtividadeInput {
    nome: String!
    limite_hora: Int!
  }
  extend type Query {
    atividades: [Atividade!]!
  }
  extend type Mutation {
    createAtividade(dados: AtividadeInput): Atividade
  }
`;
