import alunosResolvers from "./alunos/alunosResolvers";
import professoresResolvers from "./professores/professoresResolvers";

// Join all resolvers
export default {
  Query: {
    ...alunosResolvers.Query,
    ...professoresResolvers.Query,
  },
  Mutation: {
    ...alunosResolvers.Mutation,
    ...professoresResolvers.Mutation,
  },
};
