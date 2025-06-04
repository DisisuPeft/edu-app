import { LeadPaginationResponse } from "./../interface/crm/crm";
import {
  PipelinesResponse,
  ResponseData,
  Etapa_Lead,
  Programa_Lead,
  EstatusResponse,
  FuentesResponse,
  VendedorRespose,
  LeadResponse,
  Etapa_pipeline,
  ResponseRecentLead,
} from "./types";
import { Modulos } from "../interface/sistema/modulos";
import { apiSlice } from "../services/apiSlice";
import { User, Role } from "@/redux/interface/authentication/Users";
import { ProgramaEducativo } from "../interface/control_escolar/programa_educativo";
import {
  Empresa,
  InstitucionAcademica,
} from "../interface/catalogos/catalagos";

//   id: number | null | undefined;
// nombre: string | null | undefined;
const crmApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeads: builder.query<LeadPaginationResponse, number | void>({
      query: (page) => `/leads/all/?page=${page}`,
    }),
    retrieveRecentLeads: builder.query<ResponseRecentLead[], void>({
      query: () => "/recent/leads/",
      transformResponse: (response) => {
        return Array.isArray(response) ? response : [];
      },
    }),
    retrieveLead: builder.query<LeadResponse, number>({
      query: (id) => `/lead/${id}/`,
    }),
    createLead: builder.mutation({
      query: (payload) => ({
        url: "/registration/lead-landing/",
        method: "POST",
        body: payload,
      }),
    }),
    EstadisticsLeads: builder.query<ResponseData, void>({
      query: () => "/leads/estadistics/",
    }),
    getPipelines: builder.query<PipelinesResponse[], void>({
      query: () => "/pipeline/all/",
    }),
    createPipeline: builder.mutation({
      query: (payload) => ({
        url: "/create/pipeline/",
        method: "POST",
        body: payload,
      }),
    }),
    updatePipeline: builder.mutation({
      query: (payload) => ({
        url: `pipeline/update/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getPrograms: builder.query<ProgramaEducativo[], void>({
      query: () => "/crm/programs/",
    }),
    getUnidadesAcademicas: builder.query<InstitucionAcademica[], void>({
      query: () => "/crm/unidades-academicas/",
    }),
    getEmpresa: builder.query<Empresa[], void>({
      query: () => "/crm/empresa/",
    }),
    getFuentes: builder.query<FuentesResponse[], void>({
      query: () => "/crm/fuentes/",
    }),
    createFuente: builder.mutation({
      query: (payload) => ({
        url: "/crm/fuentes/create/",
        method: "POST",
        body: payload,
      }),
    }),
    updateFuente: builder.mutation({
      query: (payload) => ({
        url: `/crm/fuentes/update/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    // crm/fuentes/update/<int:id>
    getEstatus: builder.query<EstatusResponse[], void>({
      query: () => "/crm/estatus/",
    }),
    createEstatus: builder.mutation({
      query: (payload) => ({
        url: "/crm/estatus/create/",
        method: "POST",
        body: payload,
      }),
    }),
    updateEstatus: builder.mutation({
      query: (payload) => ({
        url: `/crm/estatus/update/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    retrieveEtapas: builder.query<Etapa_pipeline[], number>({
      query: (id) => `/crm/etapas/${id}/`,
    }),
    retrieveVendedor: builder.query<VendedorRespose[], void>({
      query: () => `/crm/vendedores/`,
    }),
    // getUserEdit: builder.query<User, number>({
    //   query: (id) => `/cea/usuario/${id}`,
    //   // transformResponse: (response) => {
    //   //   return Array.isArray(response) ? response : [];
    //   // },
    // }),
    // editUsers: builder.mutation({
    //   query: (payload) => ({
    //     url: "/cea/usuarios/update/",
    //     method: "PATCH",
    //     body: payload,
    //   }),
    // }),
  }),
});

export const {
  useGetLeadsQuery,
  useRetrieveLeadQuery,
  useCreateLeadMutation,
  useRetrieveRecentLeadsQuery,
  useEstadisticsLeadsQuery,
  useGetPipelinesQuery,
  useCreatePipelineMutation,
  useGetEmpresaQuery,
  useGetUnidadesAcademicasQuery,
  useGetProgramsQuery,
  useUpdatePipelineMutation,
  useGetEstatusQuery,
  useGetFuentesQuery,
  useCreateEstatusMutation,
  useCreateFuenteMutation,
  useUpdateEstatusMutation,
  useUpdateFuenteMutation,
  useRetrieveEtapasQuery,
  useRetrieveVendedorQuery,
} = crmApiSlice;
