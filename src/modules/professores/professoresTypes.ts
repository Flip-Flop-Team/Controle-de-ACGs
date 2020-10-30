import { gql } from "apollo-server";

export default gql`
  type Professor {
    id: ID!
    nome: String!
    codigo: String!
    email: String!
    senha: String!
    cursos: [Curso!]!
  }

  input ProfessorEditInput {
    nome: String
    codigo: String
    email: String
    senha: String
    cursos: [Int!]
  }

  input ProfessorAddInput {
    nome: String!
    codigo: String!
    email: String!
    senha: String!
    cursos: [Int!]!
  }

  extend type Query {
    professor(id: ID!): Professor
    professores: [Professor!]!
  }

  extend type Mutation {
    createProfessor(data: ProfessorAddInput): Professor
    editProfessor(id: ID!, data: ProfessorEditInput): Professor
    deleteProfessor(id: ID!): Int
  }
`;
