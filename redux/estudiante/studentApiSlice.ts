import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { Estudiante } from "../interface/estudiante/estudiante";

const studentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (payload) => ({
        url: "/student/create/",
        method: "POST",
        body: payload,
      }),
    }),
    getStudents: builder.query<Estudiante[], void>({
      query: () => "/students/all/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    // retrieveLead: builder.query<Data, number>({
    //   query: (id) => `/lead/${id}/`,
    // }),
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

export const { useCreateStudentMutation, useGetStudentsQuery } = studentsApiSlice;
