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

export type EstudianteForm = {
  id: number | null | undefined;
  perfil: Perfil | null | undefined;
  curp: string | null | undefined;
  lugar_nacimiento: string | null;
  municipio: number | string | null;
  direccion: string | null | undefined;
  telefono: string | null | undefined;
  activo: number | null | undefined;
};
