import { User } from "../authentication/Users";
import { ProgramaEducativo } from "../control_escolar/programa_educativo";
import { Empresa } from "../catalogos/catalagos";
import { InstitucionAcademica } from "../catalogos/catalagos";

export type Data =
  | { lead: Lead }
  | { etapa: Etapas }
  | { fuente: Fuentes }
  | { estatus: Estatus };

export interface Fuentes {
  id: number | null | undefined;
  nombre: string | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}

export interface Estatus {
  id: number | null | undefined;
  nombre: string | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}

export interface Etapas {
  id: number | null | undefined;
  nombre: string;
  descripcion: string | null | undefined;
  orden: number | null | undefined;
  Pipline: Pipeline | undefined | null;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}

export interface Lead {
  id: number | null | undefined;
  nombre: string | null | undefined;
  correo: string | null | undefined;
  telefono: string | null | undefined;
  interesado_en: ProgramaEducativo | string | number | null | undefined;
  estatus: Estatus | string | number | null | undefined;
  etapa: Etapas | string | number | null | undefined;
  fuente: Fuentes | string | number | null | undefined;
  vendedor_asignado: User | string | number | null | undefined;
  tiempo_primera_respuesta: number | null | undefined;
  empresa: Empresa | string | number | null | undefined;
  institucion: InstitucionAcademica | string | number | null | undefined;
  etapa_anterior: Etapas | string | number | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
  acciones: string;
}

export interface Pipeline {
  id: number | null;
  nombre: string;
  orden: number;
  fecha_creacion: string | null;
  etapas: Etapas | string | null;
  fecha_actualizacion: string | null;
  programa: string | null | undefined | ProgramaEducativo;
  unidad_academica: string | null | undefined | InstitucionAcademica;
  empresa: string | null | undefined | Empresa;
}

export interface LeadPaginationResponse {
  count: number;
  next: string;
  previous: string;
  results: Lead[];
}
