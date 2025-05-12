import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { User, Role } from "@/redux/interface/authentication/Users";
import { Lead, Pipeline, Data } from "../interface/crm/crm";

const crmApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createMenu: builder.mutation({
    //   query: (payload) => ({
    //     url: "url/to/define",
    //     method: "POST",
    //     body: payload,
    //   }),
    // }),
    getLeads: builder.query<Lead[], void>({
      query: () => "/leads/all/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    retrieveLead: builder.query<Data, number>({
      query: (id) => `/lead/${id}/`,
    }),
    // getTabs: builder.query<TabsModulos[], void>({
    //   query: () => "/tabs/all/",
    //   transformResponse: (response) => {
    //     return Array.isArray(response) ? response : [];
    //   },
    // }),
    // getUsers: builder.query<User[], void>({
    //   query: () => "/cea/usuarios/",
    //   transformResponse: (response) => {
    //     return Array.isArray(response) ? response : [];
    //   },
    // }),
    // getUserEdit: builder.query<User, number>({
    //   query: (id) => `/cea/usuario/${id}`,
    //   // transformResponse: (response) => {
    //   //   return Array.isArray(response) ? response : [];
    //   // },
    // }),
    // editUsers: builder.mutation({
    //   query: (payload) => ({
    //     url: "/cea/usuarios/update/",
    //     method: "PATCH",
    //     body: payload,
    //   }),
    // }),
  }),
});

export const { useGetLeadsQuery, useRetrieveLeadQuery } = crmApiSlice;
