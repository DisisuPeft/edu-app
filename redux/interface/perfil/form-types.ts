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
  user: User | null | undefined;
  matricula: string | null | undefined;
};
