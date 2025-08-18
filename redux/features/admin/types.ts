export type UserRef = {
  id: number;
  email: string;
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
  user: number | null;
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
  user: UserRef | null;
};

export interface UsersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Estudiante[];
}
