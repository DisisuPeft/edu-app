import { Genero, NivelEducativo } from "./CeaInterfaces";

export interface Role {
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
  nivEdu: NivelEducativo | null;
  telefono: string | null;
  user?: number;
}
