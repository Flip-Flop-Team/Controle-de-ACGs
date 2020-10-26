import { Aluno } from "./alunosModels";

// function doesPathExist(nodes, path) {
//   if (!nodes) {
//     return false;
//   }

//   const node = nodes.find((x) => x.name.value === path[0]);

//   if (!node) {
//     return false;
//   }

//   if (path.length === 1) {
//     return true;
//   }

//   return doesPathExist(node.selectionSet.selections, path.slice(1));
// }

export default {
  Query: {
    alunos: async (): Promise<Aluno[]> => {
      return await Aluno.find();
    },
  },
  Mutation: {
    createAluno: async (_: undefined, data: Aluno): Promise<Aluno> => {
      return await Aluno.create({ ...data }).save();
    },
  },
};
