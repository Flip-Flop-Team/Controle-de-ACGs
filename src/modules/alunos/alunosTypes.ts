import { gql } from "apollo-server";

export default gql`
  type Aluno {
    id: ID!
    nome: String!
    matricula: String!
    email: String!
    senha: String!
  }
  extend type Query {
    alunos: [Aluno!]!
  }
  extend type Mutation {
    createAluno(nome: String!): Aluno
  }
`;
