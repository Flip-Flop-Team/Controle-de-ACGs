import { Curriculo } from "./curriculosModels";

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
    curriculos: async (): Promise<Curriculo[]> => {
      return await Curriculo.find();
    },
  },
  Mutation: {
    createCurriculo: async (_: undefined, data: Curriculo): Promise<Curriculo> => {
      return await Curriculo.create({ ...data }).save();
    },
  },
};
