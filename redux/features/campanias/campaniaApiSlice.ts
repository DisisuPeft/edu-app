import { apiSlice } from "../../services/apiSlice";
import { Programa, CampaniaResponse, CampaniaPrograma } from "./type";

const campaniaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProgramas: builder.query<Programa[], void>({
      query: () => "/control-escolar/programas/todos/",
    }),
    saveCampania: builder.mutation({
      query: (body) => ({
        url: "/plataforma/campanias/",
        method: "POST",
        body: body,
      }),
    }),
    getCampanas: builder.query<CampaniaResponse, void>({
      query: () => "/plataforma/campanias/",
    }),
    patchCampania: builder.mutation<string, { body: number; id: number }>({
      query: ({ body, id }) => ({
        url: `/plataforma/campanias/${id}/`,
        method: "PATCH",
        body: { body },
      }),
    }),
    campaniasGenericos: builder.query<CampaniaPrograma[], void>({
      query: () => "crm/genericos/campanias/",
    }),
  }),
});

export const {
  useGetProgramasQuery,
  useSaveCampaniaMutation,
  useGetCampanasQuery,
  usePatchCampaniaMutation,
  useCampaniasGenericosQuery,
} = campaniaApiSlice;
