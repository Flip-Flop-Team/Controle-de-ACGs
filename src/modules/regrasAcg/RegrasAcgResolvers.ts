import { RegraAcg } from "./RegrasAcgModels";

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
    regrasAcg: async (): Promise<RegraAcg[]> => {
      return await RegraAcg.find();
    },
  },
  Mutation: {
    createRegraAcg: async (_: undefined, data: RegraAcg): Promise<RegraAcg> => {
      return await RegraAcg.create({ ...data }).save();
    },
  },
};
