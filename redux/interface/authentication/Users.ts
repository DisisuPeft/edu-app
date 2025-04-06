import { Genero } from "../catalogos/genero";
import { TipoNivel } from "../catalogos/tipo_nivel";

export interface Role {
  id: number;
  name: string;
  permission: Permission []
}

export interface Permission {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  profile: Profile;
  rol: Array<Role>;
}

export interface Profile {
  id: number;
  nombre: string;
  apellidoP: string | null;
  apellidoM: string | null;
  edad: number | null;
  fechaNacimiento: string | null;
  genero: Genero | null;
  nivEdu: TipoNivel | null;
  telefono: string | null;
  user?: number;
}
