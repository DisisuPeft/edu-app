export type Ciclos = {
  id: number;
  name: string;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  estados: number | null;
};

export interface CiclosResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ciclos[];
}

// export type ProgramaEducativoCatalog = {
//   id: number;
//   nombre: string;
//   descripcion?: string;
//   tipo?: number | null;
//   institucion?: number | null;
//   duracion_horas?: number;
//   fecha_inicio?: string;
//   fecha_fin?: string;
//   horario?: string;
//   costo_inscripcion?: string;
//   costo_mensualidad?: string;
//   activo: number;
//   maestro?: number | null;
//   modalidad?: number | null;
//   fecha_creacion: string;
//   fecha_actualizacion?: string;
// };
