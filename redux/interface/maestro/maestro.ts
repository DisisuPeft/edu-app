import { User } from "../authentication/Users"
import { Especialidades } from "../catalogos/catalagos";
import { Profile } from "../authentication/Users";

export interface Maestro {
  id: number | null | undefined;
  user: User | null | undefined;
  perfil: Profile | null | undefined;
  rfc: string | null | undefined;
  curp: string | null | undefined;
  especialidad: Especialidades | string | null | undefined;
  fecha_ingreso: string | null | undefined;
  numero_colaborador: string | null | undefined;
  telefono: string | null | undefined;
  direccion: string | null | undefined;
  email: string | null | undefined;
  activo: number | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}