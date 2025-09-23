import { Role } from "../types";

export type UserRef = {
  id: number;
  email: string;
  roleID: Role[];
};

// Opcional: si prefieres expresar el booleano entero explícitamente
export type IntBool = 0 | 1;

export type Perfil = {
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  edad: number;
  fechaNacimiento: string;
  genero: number;
  nivEdu: number;
  telefono: string;
  user: UserRef;
};

export type Estudiante = {
  id: number;
  curp: string;
  matricula: string;
  lugar_nacimiento: number;
  direccion: string;
  tutor_nombre: string;
  tutor_telefono: string;
  activo: IntBool;
  grupo: number | null;
  email: string;
  perfil: Perfil;
  municipio: number;
};

export interface UsersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Estudiante[];
}

export type TipoDocumento = {
  id: number;
  nombre: number | null;
};

interface File {
  download_url: string | null;
  name: string | null;
  path: string | null;
  public_url: string | null;
}

interface Material {
  id: number;
  file: File;
  programa_id: number | null;
  type_id: number | null;
}
export type MaterialType = {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Material[];
};
