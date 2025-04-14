import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { User, Role } from "@/redux/interface/authentication/Users";
import { NivelEducativo } from "../interface/catalogos/nivel_educativo";
import { TipoNivel } from "../interface/catalogos/tipo_nivel";
import { TabsModulos } from "../interface/sistema/tabs";
import { Genero } from "../interface/catalogos/genero";

const CatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNiveles: builder.query<NivelEducativo[], void>({
      query: () => "/catalogos/niveles-educativos/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    getGenero: builder.query<Genero[], void>({
      query: () => "/catalogos/generos/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    getRoles: builder.query<Role[], void>({
      query: () => "/cea/roles/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
  }),
});

export const {
  useGetNivelesQuery,
  useGetGeneroQuery,
  useGetRolesQuery
} = CatApiSlice;
