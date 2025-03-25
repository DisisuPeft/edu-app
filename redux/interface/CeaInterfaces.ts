// import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  itemCount: number;
  bgColor: string;
  textColor: string;
  route: string;
}

export interface NivelEducativo {
  id: number;
  name: string;
}

export interface Genero {
  id: number;
  name: string;
}
