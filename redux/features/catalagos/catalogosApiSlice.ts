import {
  TipoProgramaPaginated,
  InstitutoPaginated,
} from "@/redux/interface/catalogos/catalagos";
import { apiSlice } from "@/redux/services/apiSlice";

const catalagoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveTiposPrograma: builder.query<TipoProgramaPaginated, void>({
      query: () => "/control-escolar/tipos-programas/",
    }),
    retrieveInstituto: builder.query<InstitutoPaginated, void>({
      query: () => "/catalagos/institutos/",
    }),
  }),
});

export const { useRetrieveInstitutoQuery, useRetrieveTiposProgramaQuery } =
  catalagoApiSlice;
