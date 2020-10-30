import { Professor } from "./professoresModels";
import { Curso } from "../cursos/cursosModels";
import { In, ObjectID } from "typeorm";

interface IProfessorInput {
  nome: string;
  codigo: string;
  email: string;
  senha: string;
  cursos: number[];
}
interface IEditProfessor {
  nome?: string;
  codigo?: string;
  email?: string;
  senha?: string;
  cursos?: number[];
}

interface IEditProfessorInput {
  id: number;
  data: IEditProfessor;
}

export default {
  Query: {
    professor: (_: undefined, id: ObjectID): Promise<Professor> =>
      Professor.findOne(id),
    professores: (): Promise<Professor[]> => Professor.find(),
  },
  Mutation: {
    createProfessor: async (
      _: undefined,
      data: IProfessorInput
    ): Promise<Professor> => {
      const cursos = await Curso.find({ where: In(data.cursos) });
      return Professor.create({ ...data, cursos }).save();
    },
    editProfessor: async (
      _: undefined,
      input: IEditProfessorInput
    ): Promise<Professor> => {
      const professor = await Professor.findOne(input.id);
      Object.keys(input.data).map((key: string) => {
        professor[key] = input.data[key];
      });
      if (input.data.cursos) {
        await Curso.delete(input.data.cursos);
        const cursos = [];
        input.data.cursos.forEach((id: number) =>
          Curso.findOne(id).then((curso: Curso) => cursos.push(curso))
        );
        professor.cursos = cursos;
      }
      return Professor.save(professor);
    },
    deleteProfessor: async (_: undefined, id: number): Promise<number> => {
      const deleteResult = await Professor.delete(id);
      return deleteResult.affected || 0;
    },
  },
};
