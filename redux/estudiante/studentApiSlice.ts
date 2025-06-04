import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { Estudiante, EstudianteView } from "./types";

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
    retrieveStudent: builder.query<EstudianteView, number>({
      query: (id) => `/student/${id}/`,
    }),
    retrieveEditStudent: builder.query<Estudiante, number>({
      query: (id) => `/student/edit/${id}/`,
    }),
    // student/update/<int:id>
    updateStudent: builder.mutation({
      query: (payload) => ({
        url: `/student/update/`,
        method: "PATCH",
        body: payload,
      }),
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

export const {
  useCreateStudentMutation,
  useGetStudentsQuery,
  useRetrieveStudentQuery,
  useRetrieveEditStudentQuery,
  useUpdateStudentMutation,
} = studentsApiSlice;
