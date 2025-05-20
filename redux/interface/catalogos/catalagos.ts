import { User } from "../authentication/Users";

export interface Especialidades {
  id: number | null | undefined;
  name: string | null | undefined;
  created_at?: string | null | undefined;
  updated_at?: string | null | undefined;
}

export interface EstatusMaestro {
  id: number | null | undefined;
  name: string | null | undefined;
}

export interface Empresa {
  id: number | null | undefined;
  nombre: string | null | undefined;
  descripcion: string | null | undefined;
  sitio_web: string | null | undefined;
  telefono: string | null | undefined;
  email_contacto: string | null | undefined;
  direccion: string | null | undefined;
  rfc: string | null | undefined;
  activa: number | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}

export interface InstitucionAcademica {
  id: number | null | undefined;
  nombre: string | null | undefined;
  descripcion: string | null | undefined;
  sitio_web: string | null | undefined;
  telefono: string | null | undefined;
  email_contacto: string | null | undefined;
  direccion: string | null | undefined;
  responsable: User | null | undefined;
  empresa: Empresa | null | undefined;
  activa: number | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}

export interface Niveles {
  name: string | null | undefined;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
}

export interface Grados {
  name: string | null | undefined;
  nivel: Niveles | string | null | undefined;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
}
export interface Grupos {
  name: string | null | undefined;
  grado: Grados | string | null | undefined;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
}

export interface EstadosRepublica {
  id: number | string | null | undefined;
  name: string | null | undefined;
  created_at: string | null | undefined;
  updated_at: string | null | undefined;
}

export interface Municipios {
  id: number | null | undefined;
  nombre: string | null | undefined;
  estado: EstadosRepublica | string | null | undefined;
  activo: number | null | undefined;
  clave: string | null | undefined;
}
