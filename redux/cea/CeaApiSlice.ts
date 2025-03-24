import { MenuItem } from "../interface/CeaInterfaces";
import { apiSlice } from "../services/apiSlice";
import { User, Role } from "../features/authApiSlice";
const ceaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMenu: builder.mutation({
      query: (payload) => ({
        url: "url/to/define",
        method: "POST",
        body: payload,
      }),
    }),
    getMenu: builder.query<MenuItem[], void>({
      query: () => "/menu/all/",
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
  }),
});

export const { useCreateMenuMutation, useGetMenuQuery, useGetUsersQuery } =
  ceaApiSlice;
