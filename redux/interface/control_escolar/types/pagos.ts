/**
 * 
 *        ('pendiente', 'Pendiente'),
        ('completado', 'Completado'),
        ('parcial', 'Parcial'),
        ('vencido', 'Vencido'),
        ('cancelado', 'Cancelado'),
 * 
 * 
 */

export type Pago = {
  id: string;
  estudiante: string;
  inscripcion: number;
  monto: string | null;
  referencia: string | null;
  periodo: string | null;
  notas: string | null;
  tipo_pago: number | null;
  tipo_pago_r: string | null;
  fecha_pago: string | null;
  fecha_vencimiento: string | null;
  metodo_pago: "efectivo" | "tarjeta" | "transferencia";
  estado: "pendiente" | "completado" | "parcial" | "vencido" | "cancelado";
  numero_pago: string | null;
  concepto: string | null;
};

// export type FormularioPagoData = {
//   alumnoId: string;
//   alumnoNombre: string;
//   concepto: string;
//   monto: number;
//   fecha: string;
//   metodoPago: "efectivo" | "tarjeta" | "transferencia";
//   estado: "pendiente" | "pagado" | "cancelado";
// };

export type PagoPagination = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pago[];
};

type CampaniaPrograma = {
  campania: string;
  costo_asignado: string | null;
  programa: string | null;
  unidad_academica: string | null;
};

export type Estudiante = {
  activo: number;
  curp: string | null;
  direccion: string | null;
  especialidad: string | null;
  municipio: string | null;
  perfil: string | null;
  rfc: string | null;
  total_inscripciones: number | null;
  inscripciones: Inscripciones[];
  id: number;
};

export type Inscripciones = {
  campania_programa_r: CampaniaPrograma;
  estado: number;
  fecha_inscripcion: string;
  id: number;
  pagos: Pago[];
  pagos_completados: Pago[];
  saldo_pendiente: string;
  total_pagado: string;
  costo_inscripcion_acordado: number;
  costo_mensualidad_acordado: number;
  costo_documentacion_acordado: number;
  notas_precio_custom: string | null;
  tiene_precio_custom: boolean | null;
};
