// import {
//   Lead,
//   Pipeline,
//   // Data,
//   LeadPaginationResponse,
//   // Fuentes,
//   // Estatus,
//   Etapas,
//   Estatus,
// } from "../interface/crm/crm";

// tipos
export type ResponseData = {
  total_leads: number;
  total_lead_etapa: Etapa_Lead[] | undefined;
  total_lead_programa: Programa_Lead[] | undefined;
};
export type Etapa_Lead = {
  etapa__nombre: string | undefined;
  total: number;
};

export type Etapa_pipeline = {
  id: number;
  nombre: string | undefined;
  orden: number;
};
export type Programa_Lead = {
  interesado_en__nombre: string | undefined;
  total: number;
};
export type ResponseRecentLead = {
  estatus: string;
  etapa: string;
  id: number;
  interesado_en: string;
  nombre: string;
  vendedor_asignado: string;
};
export type EstatusResponse = {
  id: number;
  nombre: string;
  // fecha_creacion: string | null | undefined;
  // fecha_actualizacion: string | null | undefined;
};
export type FuentesResponse = {
  id: number;
  nombre: string;
  // fecha_creacion: string | null | undefined;
  // fecha_actualizacion: string | null | undefined;
};
export type PipelinesResponse = {
  id: number;
  nombre: string;
  orden: number;
  programa: {
    id: number;
    nombre: string;
  };
  unidad_academica: {
    id: number;
    nombre: string;
  };
  empresa: {
    id: number;
    nombre: string;
  };
  etapas: {
    id: number;
    nombre: string;
    orden: number;
  }[];
};
// fecha_creacion: string | null | undefined;
// fecha_actualizacion: string | null | undefined;
export type VendedorRespose = {
  id: number;
  email: string;
  perfil: {
    id: number;
    nombre_completo: string;
  };
};
export type LeadResponse = {
  lead: {
    id: number;
    fuente: string;
    etapa: string;
    etapa_id: number | undefined;
    vendedor_asignado: string | null;
    interesado_en: string;
    institucion: string | null;
    estatus: string;
    campania: string | null;
    notas: any[]; // puedes cambiar a un tipo específico si las notas tienen estructura
    nombre: string;
    correo: string;
    telefono: string;
    tiempo_primera_respuesta: string | null;
    fecha_creacion: string;
    fecha_actualizacion: string | null;
    pipeline: string | null;
    empresa: string | null;
    etapa_anterior: string | null;
  };
  pipeline: {
    id: number;
    nombre: string;
    orden: number;
    programa: {
      id: number;
      nombre: string;
    };
    unidad_academica: {
      id: number;
      nombre: string;
    };
    empresa: {
      id: number;
      nombre: string;
    };
    etapas: {
      id: number;
      nombre: string;
      orden: number;
    }[];
  }[];
  estatus: {
    id: number;
    nombre: string;
  }[];
};

export type PipelineEditable = {
  id: number | null;
  nombre: string;
  orden: number;
  programa: number;
  unidad_academica: number;
  empresa: number;
  etapas: [];
};
