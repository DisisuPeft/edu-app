import { apiSlice } from "../../services/apiSlice";
import { Estudiante, EstudianteView, totalCount } from "./types";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";

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
    retrieveEditProfileStudent: builder.query<EstudianteForm, number>({
      query: (id) => `/student/profile/${id}/`,
    }),
    // student/update/<int:id>
    updateStudentProfile: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/student/update/profile/${id}/`,
        method: "PATCH",
        body: payload,
      }),
    }),
    retrieveTotalCursos: builder.query<totalCount, void>({
      query: () => "/student/total-programs/",
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useGetStudentsQuery,
  useRetrieveStudentQuery,
  useRetrieveEditProfileStudentQuery,
  useUpdateStudentProfileMutation,
  useRetrieveTotalCursosQuery,
} = studentsApiSlice;
