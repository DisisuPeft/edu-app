import { apiSlice } from "../../services/apiSlice";
import { CursoCardsType, CursoPaginatedType } from "./types";

const programApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCursos: builder.query<CursoCardsType[], void>({
      query: () => "student/cursos/",
    }),
    getPaginetedCursos: builder.query<CursoPaginatedType, number>({
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
  }),
});

export const {
  useGetCursosQuery,
  useGetPaginetedCursosQuery,
  useGetCursoPanelQuery,
} = programApiSlice;
