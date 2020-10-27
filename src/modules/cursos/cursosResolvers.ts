import { Curso } from "./cursosModels";

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
    cursos: async (): Promise<Curso[]> => {
      return await Curso.find();
    },
  },
  Mutation: {
    createCurso: async (_: undefined, data: Curso): Promise<Curso> => {
      return await Curso.create({ ...data }).save();
    },
  },
};
