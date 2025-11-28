// import type { LucideIcon } from "lucide-react";

export interface Modulos {
  id: number;
  name: string;
  description: string;
  icon: string;
  itemCount: number;
  bgColor: string;
  textColor: string;
  route: string;
}

export type Module = { id: number; name: string };

export type TabModule = { id: number; name: string; moduleId?: number };

export type FormValues = {
  user: number;
  module: number; // para sistema_modulo_usuario
  tabmodule: number[]; // para sistema_tabsmodulo_user
};

export type ModulosType = {
  id: number;
  nombre: string;
  descripcion: string;
  submodulos: SubModulo[];
};

export type SubModulo = {
  id: number;
  titulo: string;
  descripcion: string;
};
