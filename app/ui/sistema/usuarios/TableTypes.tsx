// import { Button, Chip } from "@mui/material";
// import { Delete, Edit } from "lucide-react";

export interface Column {
  id:
    | "email"
    | "nombre"
    | "apellidop"
    | "apellidom"
    | "genero"
    | "fechaNacimiento"
    | "nivEdu"
    | "rol"
    | "editar";
  label: string;
  minWidth?: number;
  align?: "right";
  path?: string;
  format?: (value: number) => string;
  render?: (row: object) => React.ReactNode;
}
