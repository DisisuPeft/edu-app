import { MenuItem } from "../interface/CatalogosInterfaces";
import { apiSlice } from "../services/apiSlice";

const catalogosApiSlice = apiSlice.injectEndpoints({
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
  }),
});

export const { useCreateMenuMutation, useGetMenuQuery } = catalogosApiSlice;
