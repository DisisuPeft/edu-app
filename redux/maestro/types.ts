import { Lugar, Perfil, Municipio } from "../features/estudiante/types";

export type Maestro = {
  id: number;
  rfc: string;
  fecha_ingreso: string;
  numero_colaborador: string;
  telefono: string;
  direccion: string;
  activo: number;
  especialidad: number;
  user: null;
  fecha_actualizacion: string | null;
  fecha_creacion: string;
  curp: string;
  email: string;
  perfil: Perfil;
  estado: number;
  estatus: number;
  municipio: number;
};

export type MaestroView = {
  id: number;
  rfc: string;
  fecha_ingreso: string;
  numero_colaborador: string;
  telefono: string;
  direccion: string;
  activo: number;
  especialidad: number;
  user: null;
  fecha_actualizacion: string | null;
  fecha_creacion: string;
  curp: string;
  email: string;
  perfil: Perfil;
  estado: number;
  estatus: number;
  municipio: number;
};
