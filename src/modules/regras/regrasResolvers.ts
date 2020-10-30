import { Regra } from "./regrasModels";

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
    regras: async (): Promise<Regra[]> => {
      return await Regra.find();
    },
  },
  Mutation: {
    createRegra: async (_: undefined, data: Regra): Promise<Regra> => {
      return await Regra.create({ ...data }).save();
    },
  },
};
