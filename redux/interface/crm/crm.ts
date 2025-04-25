import { User } from "../authentication/Users";
import { ProgramaEducativo } from "../control_escolar/programa_educativo";
import { Empresa } from "../catalogos/catalagos";
import { InstitucionAcademica } from "../catalogos/catalagos";

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
    nombre: string | null | undefined;
    descripcion: string | null | undefined;
    orden: number | null | undefined;
    fecha_creacion: string | null | undefined;
    fecha_actualizacion: string | null | undefined;
}

export interface Lead {
    id: number | null | undefined;
    nombre: string | null | undefined;
    correo: string | null | undefined;
    telefono: string | null | undefined;
    interesado_en: ProgramaEducativo | number | null | undefined;
    estatus: Estatus | number | null | undefined;
    etapa: Etapas | number | null | undefined;
    fuente: Fuentes | number | null | undefined;
    vendedor_asignado: User | number | null | undefined;
    tiempo_primera_respuesta: number | null | undefined;
    empresa: Empresa | number | null | undefined;
    institucion: InstitucionAcademica | number | null | undefined;
    etapa_anterior: Etapas | number | null | undefined;
    fecha_creacion: string | null | undefined;
    fecha_actualizacion: string | null | undefined;
}

