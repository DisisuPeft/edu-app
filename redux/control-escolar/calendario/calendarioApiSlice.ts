import { apiSlice } from "../../services/apiSlice";
import {
  CicloResponse,
  CiclosResponse,
  CiclosForQueryType,
  Ciclos,
} from "./types";

const calendarioApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCiclos: builder.query<CiclosResponse, void>({
      query: () => "/control-escolar/ciclos/all/",
    }),
    getCiclosParams: builder.query<CicloResponse[], void>({
      query: () => "/control-escolar/ciclos/get",
    }),
    getCiclo: builder.query<Ciclos, number>({
      query: (ciclo_id) => `/control-escolar/ciclo/?ciclo_id=${ciclo_id}`,
    }),
    createCiclos: builder.mutation({
      query: (payload) => ({
        url: "control-escolar/ciclos/create/",
        method: "POST",
        body: payload,
      }),
    }),
    getCiclosForQuery: builder.query<CiclosForQueryType, void>({
      query: () => "control-escolar/ciclos-query/",
    }),
  }),
});

export const {
  useGetCiclosQuery,
  useGetCicloQuery,
  useCreateCiclosMutation,
  useGetCiclosForQueryQuery,
} = calendarioApiSlice;
