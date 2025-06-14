import { apiSlice } from "../../services/apiSlice";
import { ProgramaEducativoCatalogResponse } from "./types";

const programApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogoPrograma: builder.query<ProgramaEducativoCatalogResponse, void>({
      query: () => "/control-escolar/programas-educativos/",
    }),
  }),
});

export const { useGetCatalogoProgramaQuery } = programApiSlice;
