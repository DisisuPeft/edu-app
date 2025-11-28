export type PlataformaImparticion = {
  id: number;
  nombre: string;
};

// export type PlataformaRes = {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: Enlace[];
// }

export type EnlaceFormData = {
  titulo: string;
  link: string;
  fecha_imparticion: string;
  descripcion?: string;
  plataforma: string;
  password: string;
};

export type EnlacesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Enlace[];
};

export type Enlace = {
  titulo: string;
  link: string;
  fecha_imparticion: string;
  descripcion?: string;
  plataforma: number;
  plataforma_name: string;
  password_platform: string;
};
