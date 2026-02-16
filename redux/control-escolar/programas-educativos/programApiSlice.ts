import { ModulosType } from "@/redux/interface/sistema/modulos";
import { apiSlice } from "../../services/apiSlice";
import {
  CursoCardsType,
  // CursoPaginatedType,
  DiplomadoCampaniaType,
  DiplomadoCampaniaPaginatedType,
  ProgramaType,
} from "./types";

const programApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCursos: builder.query<DiplomadoCampaniaType[], void>({
      query: () => "student/cursos/",
    }),
    getPaginetedCursos: builder.query<DiplomadoCampaniaPaginatedType, number>({
      query: (page) => `student/cursos/all/?=${page}`,
    }),
    getCursoPanel: builder.query<
      CursoCardsType[],
      { id: number; accion?: string }
    >({
      query: ({ id, accion }) => `student/cursos/${id}/?accion=${accion}`,
      // transformResponse: (response: CursoCardsType) => {
      //   // Si es arreglo, lo devuelves directo
      //   // Si es objeto, lo metes en un arreglo
      //   return [response];
      // },
    }),
    getCursoPanelEstudiante: builder.query<
      CursoCardsType,
      { id: number; accion?: string }
    >({
      query: ({ id, accion }) => `/plataforma/cursos/${id}/?accion=${accion}`,
      // transformResponse: (response: CursoCardsType) => {
      //   // Si es arreglo, lo devuelves directo
      //   // Si es objeto, lo metes en un arreglo
      //   return [response];
      // },
    }),
    getModulos: builder.query<ModulosType[], { id: number; accion?: string }>({
      query: ({ id, accion }) =>
        `/plataforma/cursos/modulos/?accion=${accion}&programa=${id}`,
    }),
    getOferta: builder.query<ProgramaType[], void>({
      query: () => "/control-escolar/programas/oferta/",
    }),
    inscriptionPrograma: builder.query<[], string>({
      query: (id) =>
        `/control-escolar/inscripciones/programas_inscripcion/?identificador=${id}`,
    }),
  }),
});

export const {
  useGetCursosQuery,
  useGetPaginetedCursosQuery,
  useGetCursoPanelQuery,
  useGetCursoPanelEstudianteQuery,
  useGetModulosQuery,
  useGetOfertaQuery,
  useInscriptionProgramaQuery,
} = programApiSlice;
