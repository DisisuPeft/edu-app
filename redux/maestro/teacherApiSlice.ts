// import { Maestro } from "./../interface/maestro/maestro";
import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { Estudiante } from "../interface/estudiante/estudiante";
import { MaestroView, Maestro } from "./types";
const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTeacher: builder.mutation({
      query: (payload) => ({
        url: "/teacher/create/",
        method: "POST",
        body: payload,
      }),
    }),
    getTeachers: builder.query<Maestro[], void>({
      query: () => "/teachers/all/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    retrieveTeacher: builder.query<MaestroView, number>({
      query: (id) => `/teacher/${id}/`,
    }),
    retrieveEditTeacher: builder.query<Maestro, number>({
      query: (id) => `/teacher/edit/${id}/`,
    }),
    updateTeacher: builder.mutation({
      query: (payload) => ({
        url: `/teacher/update/${payload.id}`,
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
  useCreateTeacherMutation,
  useGetTeachersQuery,
  useRetrieveTeacherQuery,
  useRetrieveEditTeacherQuery,
  useUpdateTeacherMutation,
} = teacherApiSlice;
