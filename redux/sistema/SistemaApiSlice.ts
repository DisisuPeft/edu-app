import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { User } from "../features/types";
import { TabsModulos, Pestanias } from "../interface/sistema/tabs";

const SistemaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrievePestanias: builder.query<Pestanias[], void>({
      query: () => "plataforma/pestanias/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    // A boorraaaar
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
    getTabs: builder.query<TabsModulos[], number | undefined>({
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

    addAccessUser: builder.mutation({
      query: (payload) => ({
        url: "/plataforma/add-access/",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useRetrievePestaniasQuery,
  useCreateMenuMutation,
  useGetMenuQuery,
  useGetTabsQuery,
  useGetUsersQuery,
  useEditUsersMutation,
  useGetUserEditQuery,
  useAddAccessUserMutation,
} = SistemaApiSlice;
