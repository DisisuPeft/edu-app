import { PlataformaImparticion } from "@/redux/interface/enlaces-clases/type";
import { apiSlice } from "../../services/apiSlice";
import { EnlaceFormData } from "@/redux/interface/enlaces-clases/type";
import { EnlacesResponse } from "@/redux/interface/enlaces-clases/type";

const linkApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlataforma: builder.query<PlataformaImparticion[], void>({
      query: () => "/plataforma/plataformas-imparticion/",
    }),
    createEnlace: builder.mutation<
      string,
      { body: EnlaceFormData; programa_id: number }
    >({
      query: ({ body, programa_id }) => ({
        url: `/plataforma/enlaces/?programa=${programa_id}`,
        method: "POST",
        body: body,
      }),
    }),
    getEnlaces: builder.query<EnlacesResponse, string>({
      query: (programaId) => `/plataforma/enlaces/?programa=${programaId}`,
    }),
  }),
});

export const {
  useGetPlataformaQuery,
  useCreateEnlaceMutation,
  useGetEnlacesQuery,
} = linkApiSlice;
