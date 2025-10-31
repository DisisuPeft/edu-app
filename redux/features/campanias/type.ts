export interface Campania {
  id: number;
  nombre: string;
  descripcion: string | null;
  fecha_inicio: string;
  fecha_fin: string;
  activo: number;
}

export interface CampaniaForm {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
  programa: number;
}

export interface Programa {
  id: number;
  nombre: string;
}

export type CampaniaPrograma = {
  id: number;
  campania: number;
  programa: number;
  campania_r: Campania;
  programa_r: Programa;
  costo_asignado: string | null;
  unidad_academica: number | null;
};

export type CampaniaResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: CampaniaPrograma[];
};
