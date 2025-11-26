import { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { apiSlice } from "@/redux/services/apiSlice";

const peApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    editPrograma: builder.mutation<
      string,
      { formData: ProgramaEducativoFormData; id: string }
    >({
      query: ({ formData, id }) => ({
        url: `/control-escolar/programas/${id}/`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const { useEditProgramaMutation } = peApiSlice;
