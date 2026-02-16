import { Inscripciones } from "../control_escolar/types/pagos";

interface User {
  id: number;
  email: string | null;
  password: string | null;
  roleID: number[] | null;
}

interface Perfil {
  nombre: string;
  apellidoP: string | null;
  apellidoM: string | null;
  edad: string | null;
  fechaNacimiento: string | undefined;
  genero: number | string;
  nivEdu: number | string;
  telefono: string | null;
  user: User | null | undefined;
}

type IntBool = 0 | 1;

export type EstudianteForm = {
  id: number | null | undefined;
  perfil: Perfil | null | undefined;
  curp: string | null | undefined;
  lugar_nacimiento: string | null;
  municipio: number | string | null;
  rfc: string | null;
  especialidad: string | null;
  direccion: string | null | undefined;
  telefono: string | null | undefined;
  activo: IntBool | null | undefined;
  matricula: string | null | undefined;
  inscripcion?: Inscripciones[];
};

export const defaultUserForm: User = {
  id: null,
  email: "",
  password: "",
  roleID: [],
};

export const defaultPerfilForm: Perfil = {
  nombre: "",
  apellidoP: "",
  apellidoM: "",
  edad: "",
  fechaNacimiento: "",
  genero: "",
  nivEdu: "",
  telefono: "",
  user: defaultUserForm,
};

export const defaultEstudianteForm: EstudianteForm = {
  id: null,
  perfil: defaultPerfilForm,
  curp: "",
  lugar_nacimiento: null,
  municipio: null,
  rfc: "",
  especialidad: "",
  direccion: "",
  telefono: "",
  activo: null,
  matricula: "",
};
