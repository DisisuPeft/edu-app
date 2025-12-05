import {
  Estudiante,
  Pago,
} from "@/redux/interface/control_escolar/types/pagos";
import { PaginatedResponse } from "@/redux/interface/pagination";
import { Response } from "@/redux/interface/response";
import { apiSlice } from "@/redux/services/apiSlice";

const pagosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrievePagos: builder.query<
      PaginatedResponse<Estudiante>,
      { page: number; q: string }
    >({
      query: ({ page, q }) => `/control-escolar/pagos/?page=${page}&q=${q}`,
    }),
    retrieveStudentPay: builder.query<Estudiante, { raw: string; q: string }>({
      query: ({ raw, q }) => `/control-escolar/pagos/${raw}/?q=${q}`,
    }),
    createPago: builder.mutation<string, { formData: Pago; ins: number }>({
      query: ({ formData, ins }) => ({
        url: `/control-escolar/pagos/?ins=${ins}`,
        method: "POST",
        body: formData,
      }),
    }),
    applyPago: builder.mutation<Response, { formData: Pago[]; ins: number }>({
      query: ({ formData, ins }) => ({
        url: `/control-escolar/pagos/aplicar_pago/?ins=${ins}`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRetrievePagosQuery,
  useRetrieveStudentPayQuery,
  useCreatePagoMutation,
  useApplyPagoMutation,
} = pagosApiSlice;
