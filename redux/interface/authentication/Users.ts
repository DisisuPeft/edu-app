import { Genero } from "../catalogos/genero";
import { NivelEducativo } from "../catalogos/nivel_educativo";
import { TipoNivel } from "../catalogos/tipo_nivel";

export interface Role {
  id: number;
  name: string;
}

export interface Permission {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  profile: Profile;
  roleID: Array<Role>;
  permission: Permission []
}

export interface Profile {
  nombre: string;
  apellidoP: string | null;
  apellidoM: string | null;
  edad: string | null;
  fechaNacimiento: string | undefined;
  genero: Genero | number;
  nivEdu: NivelEducativo | number;
  telefono: string | null;
  user?: number;
}
