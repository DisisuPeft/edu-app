import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { User, Role } from "@/redux/interface/authentication/Users";
import { NivelEducativo } from "../interface/catalogos/nivel_educativo";
import { TipoNivel } from "../interface/catalogos/tipo_nivel";
import { TabsModulos } from "../interface/sistema/tabs";

const SistemaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMenu: builder.mutation({
      query: (payload) => ({
        url: "url/to/define",
        method: "POST",
        body: payload,
      }),
    }),
    getMenu: builder.query<Modulos[], void>({
      query: () => "/menu/all/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    getTabs: builder.query<TabsModulos[], number>({
      query: (id) => `/tabs/all/${id}`,
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    getUsers: builder.query<User[], void>({
      query: () => "/cea/usuarios/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    getUserEdit: builder.query<User, number>({
      query: (id) => `/cea/usuario/${id}`,
      // transformResponse: (response) => {
      //   return Array.isArray(response) ? response : [];
      // },
    }),
    editUsers: builder.mutation({
      query: (payload) => ({
        url: "/cea/usuarios/update/",
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useCreateMenuMutation,
  useGetMenuQuery,
  useGetTabsQuery,
  useGetUsersQuery,
  useEditUsersMutation,
  useGetUserEditQuery,
} = SistemaApiSlice;
