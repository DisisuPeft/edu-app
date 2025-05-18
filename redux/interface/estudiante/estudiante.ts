import { Profile, User } from "../authentication/Users";
import { Grupos, Municipios } from "../catalogos/catalagos";
import { NivelEducativo } from "../catalogos/nivel_educativo";
import { EstadosRepublica } from "../catalogos/catalagos";

export interface Estudiante {
  id: number | null | undefined;
  user: User | null | undefined;
  perfil: Profile | null | undefined;
  curp: string | null | undefined;
  matricula: string | null | undefined;
  grupo: Grupos | string | null | undefined;
  lugar_nacimiento: EstadosRepublica | string | null | undefined;
  municipio: Municipios | string | null | undefined;
  direccion: string | null | undefined;
  telefono: string | null | undefined;
  tutor_nombre: string | null | undefined;
  tutor_telefono: string | null | undefined;
  email: string | null | undefined;
  activo: number | null | undefined;
  fecha_creacion: string | null | undefined;
  fecha_actualizacion: string | null | undefined;
}
