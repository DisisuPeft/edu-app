import { apiSlice } from "@/redux/services/apiSlice";
import { UsersResponse } from "./types";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ObtainUsers: builder.query<UsersResponse, { q: string; page: number }>({
      query: ({ q, page }) => `/plataforma/retrieve-users/?page=${page}&q=${q}`,
    }),
    createUsers: builder.mutation({
      query: (payload) => ({
        url: "/plataforma/users/create",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useObtainUsersQuery, useCreateUsersMutation } = adminApiSlice;
