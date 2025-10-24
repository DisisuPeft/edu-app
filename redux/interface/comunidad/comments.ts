export interface FormValues {
  comentario: string;
  parent: number | null;
}

export interface ComentarioNode {
  id: number;
  usuario: string;
  contenido: string;
  editado: number | null;
  fecha_creacion: string | null;
  comentario?: string;
  status: number;
  respuestas: ComentarioNode[] | null;
}

// "id", "comentario", "editado", "status", "usuario", "fecha_creacion"
export interface ComentariosResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ComentarioNode[];
}
