import { TipoNivel } from "./tipo_nivel";

export interface NivelEducativo {
  id: number;
  name: string;
  tipo_nivel: TipoNivel;
}