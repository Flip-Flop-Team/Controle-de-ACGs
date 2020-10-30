import { Atividade } from "./atividadesModels";

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
    atividades: async (): Promise<Atividade[]> => {
      return await Atividade.find();
    },
  },
  Mutation: {
    createAtividade: async (
      _: undefined,
      data: Atividade
    ): Promise<Atividade> => {
      return await Atividade.create({ ...data }).save();
    },
  },
};
