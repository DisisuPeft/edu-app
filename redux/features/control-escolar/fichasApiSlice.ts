import { PagoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { SuccessMessage } from "@/redux/interface/response";
import { apiSlice } from "@/redux/services/apiSlice";

interface Perfil {
  nombre: string;
  apellidoP: string;
  apellidoM: string | null;
  edad: number | null;
  fechaNacimiento: string | null;
  genero: number | null;
  nivEdu: number | null;
  telefono: string | null;
}

export interface EstudianteFicha {
  curp: string;
  email: string;
  activo: number | null;
  perfil: Perfil;
  precios: PagoFormData;
}

export interface Ficha {
  inscrito: string;
  nombreAlumno: string;
  autorizado: boolean;
  comision: string;
  email: string;
  identificador_alumno: number;
  id: number;
}

export interface FichasResponse {
  fichas: Ficha[];
  totalComision: number;
}

const fichasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFichas: builder.query<
      FichasResponse,
      { fechaInicio?: string; fechaFinal?: string }
    >({
      query: ({ fechaInicio, fechaFinal }) =>
        `/control-escolar/inscripciones/fichas/?fecha_inicio=${fechaInicio}&fecha_final=${fechaFinal}`,
    }),
    authorizeFichas: builder.mutation<
      SuccessMessage,
      {
        swithValue: { value: string };
        identificador_alumno: number;
        ficha: number;
      }
    >({
      query: ({ swithValue, identificador_alumno, ficha }) => ({
        url: `/control-escolar/inscripciones/autorizar_ficha/?identificador=${identificador_alumno}&ficha=${ficha}`,
        method: "PATCH",
        body: swithValue,
      }),
    }),
  }),
});

export const { useGetFichasQuery, useAuthorizeFichasMutation } = fichasApiSlice;
