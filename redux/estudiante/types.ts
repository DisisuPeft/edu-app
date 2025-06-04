export type TipoNivel = {
  id: number;
  name: string;
};

export type NivelEducativo = {
  id: number;
  name: string;
  tipo_nivel: TipoNivel;
};

export type Genero = {
  id: number;
  name: string;
};

export type Perfil = {
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  edad: number;
  fechaNacimiento: string;
  genero_info: Genero;
  nivEdu_info: NivelEducativo;
  telefono: string;
  user: null;
};

export type Lugar = {
  id: number;
  nombre: string;
};

export type Municipio = {
  id: number;
  nombre: string;
};

export type Estudiante = {
  id: number;
  curp: string;
  matricula: string;
  lugar_nacimiento: Lugar;
  direccion: string;
  tutor_nombre: string;
  tutor_telefono: string;
  activo: number;
  grupo: null;
  user: null;
  fecha_actualizacion: string | null;
  fecha_creacion: string;
  email: string;
  perfil: Perfil;
  municipio: Municipio;
};

export type EstudianteView = {
  id: number;
  curp: string;
  matricula: string;
  lugar_nacimiento: string;
  direccion: string;
  tutor_nombre: string;
  tutor_telefono: string;
  activo: number;
  grupo: null;
  user: null;
  fecha_actualizacion: string | null;
  fecha_creacion: string;
  email: string;
  perfil: Perfil;
  municipio: string;
};
