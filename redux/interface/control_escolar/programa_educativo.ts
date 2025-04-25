import { InstitucionAcademica } from "../catalogos/catalagos";
import { Maestro } from "../maestro/maestro";

export interface TipoPrograma {
    id: number;
    nombre: string;
    descripcion?: string;
    fecha_creacion?: string;
    fecha_actualizacion?: string;
}
  
  export interface ModalidadesPrograma {
    id: number;
    name: string;
    descripcion?: string;
    sincronia?: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
  }
  
  export interface ProgramaEducativo {
    id: number;
    nombre: string;
    descripcion?: string;
    tipo?: TipoPrograma;
    institucion?: InstitucionAcademica;
    duracion_horas?: number;
    fecha_inicio?: string;
    fecha_fin?: string;
    horario?: string;
    costo_inscripcion?: string;
    costo_mensualidad?: string;
    activo: number;
    maestro?: Maestro;
    modalidad?: ModalidadesPrograma;
    fecha_creacion: string;
    fecha_actualizacion?: string;
  }
  
  export interface Dirigido {
    id: number;
    nombre: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export interface PublicoObjetivo {
    id: number;
    nombre: string;
    descripcion: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export interface PerfilIngreso {
    id: number;
    descripcion: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export interface Requisito {
    id: number;
    texto: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export type RequisitoActitudinal = Requisito;
  export type RequisitoDeseable = Requisito;
  export type RequisitoIngreso = Requisito;
  export type RequisitoPermanencia = Requisito;
  export type RequisitoEgreso = Requisito;
  
  export interface PerfilEgreso {
    id: number;
    descripcion: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export interface Resultado {
    id: number;
    texto: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export type ResultadoAplicacion = Resultado;
  export type ResultadoActualizacion = Resultado;
  export type ResultadoCrecimiento = Resultado;
  
  export interface JustificacionPrograma {
    id: number;
    contenido: string;
    fecha_creacion: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export interface ModuloEducativo {
    id: number;
    nombre: string;
    horas_teoricas: number;
    horas_practicas: number;
    horas_totales: number;
    creditos: string;
    fecha_creacion?: string;
    fecha_actualizacion?: string;
    programa: ProgramaEducativo;
  }
  
  export interface CalendarioModulo {
    id: number;
    periodo: string;
    numero_horas: number;
    numero_semanas: number;
    fecha_creacion?: string;
    fecha_actualizacion?: string;
    modulo: ModuloEducativo;
  }
  
  export interface SubModulo {
    id: number;
    titulo: string;
    descripcion?: string;
    orden: number;
    fecha_creacion?: string;
    fecha_actualizacion?: string;
    modulo: ModuloEducativo;
  }
  