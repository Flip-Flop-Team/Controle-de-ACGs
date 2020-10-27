import alunosTypeDefs from "./alunos/alunosTypes";
import professoresTypeDefs from "./professores/professoresTypes";
import cursosTypeDefs from "./cursos/cursosTypes";
import curriculosTypeDefs from "./curriculos/curriculosTypes";
import lancamentosTypeDefs from "./lancamentos/lancamentosTypes";
import { gql } from "apollo-server";

// Join all typedefs
export default gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${alunosTypeDefs}
  ${professoresTypeDefs}
  ${cursosTypeDefs}
  ${curriculosTypeDefs}
`;
