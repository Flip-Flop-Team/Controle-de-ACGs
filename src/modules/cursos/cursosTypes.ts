import { gql } from "apollo-server";

export default gql`
  type Curso {
    id: ID!
    nome: String!
    codigo: String!
  }
  input CursoInput {
    nome: String!
    codigo: String!
  }
  extend type Query {
    cursos: [Curso!]!
  }
  extend type Mutation {
    createCurso(dados: CursoInput): Curso
    updateCurso(id: ID!, input: CursoInput): Curso
  }
`;
