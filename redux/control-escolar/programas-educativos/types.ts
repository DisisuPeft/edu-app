import { SubModulo } from "./../../interface/control_escolar/programa_educativo";
export interface ProgramaEducativo {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: number;
  institucion: number;
  duracion_horas: number;
  fecha_inicio: string;
  fecha_fin: string;
  horario: string;
  costo_inscripcion: string;
  costo_mensualidad: string;
  activo: number;
  maestro: number | null;
  modalidad: number;
  fecha_creacion: string;
  fecha_actualizacion: string | null;

  dirigido: [];
  publico_objetivo: [];
  perfil_ingreso: [];
  requisitos_actitudinales: [];
  requisitos_deseables: [];
  enfoque_pedagogico: [];
  requisito_ingreso: [];
  requisito_permanencia: [];
  requisito_egreso: [];
  perfil_egreso: [];
  resultado_aplicacion: [];
  resultado_actualizacion: [];
  resultado_crecimiento: [];
  justificacion: [];
  modulos: [];
}

export interface ProgramaEducativoCatalogResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProgramaEducativo[];
}

export type CursoCardsType = {
  activo: number | null;
  descripcion: string | null;
  duracion_horas: number | null;
  id: number | null;
  institucion: number | string | null;
  nombre: string | null;
  tipo: string | null;
  submodulos?: SubModulo[];
  modalidad?: string;
  inscrito: boolean | null;
};

export interface CursoPaginatedType {
  count: number;
  next: string | null;
  previous: string | null;
  results: CursoCardsType[];
}
