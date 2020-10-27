import { Lancamento } from "./lancamentosModels";

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
    lancamentos: async (): Promise<Lancamento[]> => {
      return await Lancamento.find();
    },
  },
  Mutation: {
    createLancamento: async (_: undefined, data: Lancamento): Promise<Lancamento> => {
      return await Lancamento.create({ ...data }).save();
    },
  },
};
