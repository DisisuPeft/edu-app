// Tipos para el formulario de programa educativo
export interface ProgramaEducativoFormData {
  // Información básica
  nombre: string;
  descripcion: string;
  tipo: string;
  institucion: string;

  // Duración y fechas
  duracion_horas: number | null;
  fecha_inicio: string;
  fecha_fin: string;
  duracion_meses: number | null;
  periodo_imparticion: string;
  horario: string;

  // Costos
  costo_inscripcion: number | null;
  costo_mensualidad: number | null;
  costo_documentacion: number | null;

  // Configuración
  activo: number;
  maestro: string[];
  modalidad: string;

  // Recursos visuales
  imagen_url: string;
  banner_url: string;
}

export interface StepConfig {
  id: number;
  title: string;
  description: string;
}

export interface PagoFormData {
  tipo_pago: string[];
  monto: number;
  fecha_vencimiento?: string | null;
  metodo_pago?: string;
  notas?: string;
  concepto: string;
  tiene_precio_custom: boolean;
  precios_custom: {
    costo_inscripcion: number;
    costo_mensualidad: number;
    costo_documentacion: number;
  };
  razon_precio_custom: string;
}

export interface TipoPago {
  id: number;
  nombre: string;
}

export interface TipoPagoResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TipoPago[];
}
