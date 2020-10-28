import { gql } from "apollo-server";

export default gql`
  type Curriculo {
    id: ID!
    codigo: String!
    carga_horaria: Float!
  }
  input CurriculoInput {
    codigo: String!
    carga_horaria: Float!
  }
  extend type Query {
    curriculos: [Curriculo!]!
  }
  extend type Mutation {
    createCurriculo(dados: CurriculoInput): Curriculo
    updateCurriculo(id: ID!, dados: CurriculoInput): Curriculo
  }
`;
