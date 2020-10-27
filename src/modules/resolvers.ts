import alunosResolvers from "./alunos/alunosResolvers";
import professoresResolvers from "./professores/professoresResolvers";
import cursosResolvers from "./cursos/cursosResolvers"
import curriculosResolvers from "./curriculos/curriculosResolvers"
import lancamentosResolvers from "./lancamentos/lancamentosResolvers"

// Join all resolvers
export default {
  Query: {
    ...alunosResolvers.Query,
    ...professoresResolvers.Query,
    ...cursosResolvers.Query,
    ...curriculosResolvers.Query,
  },
  Mutation: {
    ...alunosResolvers.Mutation,
    ...professoresResolvers.Mutation,
    ...cursosResolvers.Mutation,
    ...curriculosResolvers.Mutation,
  },
};
