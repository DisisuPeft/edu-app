import { Profile, User } from "../authentication/Users";
import { Grupos } from "../catalogos/catalagos";
import { NivelEducativo } from "../catalogos/nivel_educativo";


export interface Estudiante {
  user: User | null | undefined;
  perfil: Profile | null | undefined;
  curp: string | null | undefined;
  matricula: string | null | undefined;
  grupo: Grupos | string | null | undefined;
  nivel_educativo: NivelEducativo | string | null | undefined;
  fecha_nacimiento: string | null | undefined;
  lugar_nacimiento: string | null | undefined;
  direccion: string | null | undefined;
  telefono: string | null | undefined;
  tutor_nombre: string | null | undefined;
  tutor_telefono: string | null | undefined;
  email: string | null | undefined;
  activo: number | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}