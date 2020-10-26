import { Professor } from "./professoresModels";
import { UserInputError } from "apollo-server";
import { UpdateResult } from "typeorm";
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

interface IEditProfessor {
  id: number;
  nome?: string;
  codigo?: string;
  email?: string;
  senha?: string;
}

export default {
  Query: {
    professor: async (_: undefined, id: any): Promise<Professor> => {
      return await Professor.findOne({ id: id.id });
    },
  },
  Mutation: {
    createProfessor: async (_: undefined, input: any): Promise<Professor> => {
      const data: Record<string, any> = input.data;
      return await Professor.create(data).save();
    },
    editProfessor: async (
      _: undefined,
      data: IEditProfessor
    ): Promise<UpdateResult> => {
      if (!Object.prototype.hasOwnProperty.call(data, "oi"))
        throw new UserInputError("Id expected!");
      const { id } = data;
      return await Professor.update({ id }, data);
    },
  },
};
