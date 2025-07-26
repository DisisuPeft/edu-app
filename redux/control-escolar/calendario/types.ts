export type Ciclos = {
  id: number;
  name: string;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  estado: number | null;
};

export type cicloSelect = {
  id: number;
  name: string;
  rango_fechas: string | null;
  estado: number | null;
};

export interface CiclosResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ciclos[];
}

export type CicloResponse = {
  id: number;
  rango_fechas: string;
};

interface CiclosForQuery {
  id: number;
  name: string;
}
export type CiclosForQueryType = CiclosForQuery[];
