import { gql } from "apollo-server";

export default gql`
  type Regra {
    id: ID!
    nome: String!
    codigo: String!
  }
  input RegraInput {
    ome: String!
    codigo: String!
  }
  extend type Query {
    regras: [Regra!]!
  }
  extend type Mutation {
    createRegra(dados: RegraInput): Regra
  }
`;
