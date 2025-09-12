import { apiSlice } from "@/redux/services/apiSlice";
import { UsersResponse, Estudiante } from "./types";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";

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
  }),
});

export const {
  useObtainUsersQuery,
  useCreateUsersMutation,
  useRetrieveViewUserQuery,
  useUpdateUserMutation,
} = adminApiSlice;
