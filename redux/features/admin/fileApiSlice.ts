import { apiSlice } from "@/redux/services/apiSlice";
// import { UsersResponse } from "./types";
// import { EstudianteForm } from "@/redux/interface/perfil/form-types";
// import { CursoPaginatedType } from "@/redux/control-escolar/programas-educativos/types";
import { MaterialType } from "./types";

const fileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveFiles: builder.query<MaterialType, number>({
      query: (id) => `/plataforma/materiales/?programa_id=${id}`,
    }),
    deleteFile: builder.mutation<string, number>({
      query: (id) => ({
        method: "DELETE",
        url: `/plataforma/materiales/${id}/`,
        body: id,
      }),
    }),
  }),
});

export const { useRetrieveFilesQuery, useDeleteFileMutation } = fileApiSlice;
