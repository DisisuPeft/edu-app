import { apiSlice } from "@/redux/services/apiSlice";
import { UsersResponse } from "./types";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";
import { CursoPaginatedType } from "@/redux/control-escolar/programas-educativos/types";
import { TipoDocumento, MaterialType } from "./types";

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
      CursoPaginatedType,
      { q: string; page: number | null }
    >({
      query: ({ q, page }) => `/plataforma/programas/all/?q=${q}&page=${page}`,
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
    inscriptionStudent: builder.mutation({
      query: (body) => ({
        url: "/plataforma/programas/inscription/",
        method: "POST",
        body: body,
      }),
    }),
    getMateriales: builder.query<MaterialType, string>({
      query: (id) => `/plataforma/materiales/?programa_id=${id}`,
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
  useGetMaterialesQuery,
} = adminApiSlice;
