import { PagoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
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
}

const fichasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFichas: builder.query<Ficha[], void>({
      query: () => "/control-escolar/inscripciones/fichas/",
    }),
  }),
});

export const { useGetFichasQuery } = fichasApiSlice;
