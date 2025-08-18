import { apiSlice } from "@/redux/services/apiSlice";
import { UsersResponse } from "./types";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ObtainUsers: builder.query<UsersResponse, { q: string; page: number }>({
      query: ({ q, page }) => `/plataforma/retrieve-users/?page=${page}&q=${q}`,
    }),
  }),
});

export const { useObtainUsersQuery } = adminApiSlice;
