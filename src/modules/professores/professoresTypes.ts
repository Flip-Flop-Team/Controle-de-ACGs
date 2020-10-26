import { gql } from "apollo-server";

export default gql`
  type Professor {
    id: ID!
    nome: String!
    codigo: String!
    email: String!
    senha: String!
  }
  input ProfessorInput {
    nome: String
    codigo: String
    email: String
    senha: String
  }
  extend type Query {
    professor(id: ID!): Professor
  }
  extend type Mutation {
    createProfessor(data: ProfessorInput): Professor
    editProfessor(id: ID!, data: ProfessorInput): Professor
  }
`;
