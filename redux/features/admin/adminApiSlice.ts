import { apiSlice } from "@/redux/services/apiSlice";
import { UsersResponse } from "./types";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";
import { DiplomadoType } from "@/redux/control-escolar/programas-educativos/types";
import { TipoDocumento, FileType } from "./types";
import {
  PagoFormData,
  ProgramaEducativoFormData,
  TipoPagoResponse,
} from "@/redux/interface/control_escolar/types/programa-educativo";
import { CampaniaResponse } from "../campanias/type";
import { Response } from "@/redux/interface/response";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ObtainUsers: builder.query<UsersResponse, { q: string; page: number }>({
      query: ({ q, page }) => `/plataforma/retrieve-users/?page=${page}&q=${q}`,
    }),
    createUsers: builder.mutation({
      query: (payload) => ({
        url: "/plataforma/users/create/",
        method: "POST",
        body: payload,
      }),
    }),
    retrieveViewUser: builder.query<EstudianteForm, string>({
      query: (id) => `/plataform/edit-users/${id}/`,
    }),
    updateUser: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/plataforma/users/update/?id=${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    retrieveDiplomados: builder.query<
      DiplomadoType,
      {
        q: string;
        page: number | null;
        estudiante_id?: number | null;
        campania_programa?: number | null;
      }
    >({
      query: ({ q, page, estudiante_id, campania_programa }) =>
        `/control-escolar/programas/?q=${q}&page=${page}&estudiante_id=${estudiante_id}&campania-programa=${campania_programa}`,
    }),
    retrieveDiplomado: builder.query<ProgramaEducativoFormData, string>({
      query: (id) => `/control-escolar/programas/${id}/`,
    }),
    retrieveTypeDocumentos: builder.query<TipoDocumento[], void>({
      query: () => "/plataforma/diplomados/documentos/",
    }),
    sendDocuments: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: "/plataforma/diplomados/upload/material/",
        method: "POST",
        body: formData,
      }),
    }),
    inscriptionStudent: builder.mutation<
      Response,
      { estudiante: string; campaniaPrograma: number; body: PagoFormData }
    >({
      query: ({ estudiante, campaniaPrograma, body }) => ({
        url: `/control-escolar/inscripciones/?estudiante=${estudiante}&campania-programa=${campaniaPrograma}`,
        method: "POST",
        body: body,
      }),
    }),
    desinscripcion: builder.mutation({
      query: (body) => ({
        method: "PATCH",
        url: "/plataforma/programas/desinscribir/",
        body: body,
      }),
    }),
    getMateriales: builder.query<FileType, string>({
      query: (id) => `/plataforma/materiales/?programa_id=${id}`,
    }),
    getTipoPago: builder.query<TipoPagoResponse, void>({
      query: () => "/control-escolar/tipos-pagos/",
    }),

    downloadMaterial: builder.query<Blob, string>({
      query: (id) => ({
        url: `/plataforma/materiales/${id}/download/`,
        method: "GET",
        responseHandler: (response) => response.blob(), // <- aquí pedimos un blob
      }),
    }),
    retrieveCampaniasDiplomados: builder.query<
      CampaniaResponse,
      {
        q: string;
        page: number | null;
        estudiante_id?: number | null;
        campania_programa?: number | null;
      }
    >({
      query: ({ q, page, estudiante_id, campania_programa }) =>
        `/plataforma/campanias/?q=${q}&page=${page}&estudiante_id=${estudiante_id}&campania_programa=${campania_programa}`,
    }),
  }),
});

export const {
  useObtainUsersQuery,
  useCreateUsersMutation,
  useRetrieveViewUserQuery,
  useUpdateUserMutation,
  useRetrieveDiplomadosQuery,
  useRetrieveTypeDocumentosQuery,
  useSendDocumentsMutation,
  useInscriptionStudentMutation,
  useDesinscripcionMutation,
  useGetMaterialesQuery,
  useRetrieveDiplomadoQuery,
  useGetTipoPagoQuery,
  useLazyDownloadMaterialQuery,
  useRetrieveCampaniasDiplomadosQuery,
} = adminApiSlice;
