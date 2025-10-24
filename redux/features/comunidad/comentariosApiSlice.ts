import { apiSlice } from "@/redux/services/apiSlice";
import {
  ComentariosResponse,
  FormValues,
} from "@/redux/interface/comunidad/comments";

const commentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<ComentariosResponse, string>({
      query: (diplomadoId) =>
        `/plataforma/comentarios/?diplomado=${diplomadoId}`,
    }),
    createComment: builder.mutation<
      string,
      { body: FormValues; diplomadoId: string }
    >({
      query: ({ body, diplomadoId }) => ({
        method: "POST",
        url: `/plataforma/comentarios/?diplomado=${diplomadoId}`,
        body: body,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } =
  commentsApiSlice;
