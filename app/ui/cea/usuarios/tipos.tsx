import { Chip } from "@mui/material";
export interface Column {
  id:
    | "email"
    | "nombre"
    | "apellidop"
    | "apellidom"
    | "genero"
    | "fechaNacimiento"
    | "nivEdu"
    | "rol";
  label: string;
  minWidth?: number;
  align?: "right";
  path?: string;
  format?: (value: number) => string;
  render?: (row: object) => React.ReactNode;
}

export const columns: readonly Column[] = [
  { id: "email", label: "Correo electronico", minWidth: 170, path: "email" },
  { id: "nombre", label: "Nombre", minWidth: 100, path: "profile.nombre" },
  {
    id: "apellidop",
    label: "Apellido paterno",
    minWidth: 170,
    path: "profile.apellidoP",
  },
  {
    id: "apellidom",
    label: "Apellido materno",
    minWidth: 170,
    path: "profile.apellidoM",
  },
  {
    id: "genero",
    label: "Genero",
    minWidth: 170,
    path: "profile.genero.name",
  },
  {
    id: "fechaNacimiento",
    label: "Fecha de nacimiento",
    minWidth: 170,
    path: "profile.fechaNacimiento",
  },
  {
    id: "nivEdu",
    label: "Nivel educativo",
    minWidth: 170,
    path: "profile.nivEdu.name",
  },
  {
    id: "rol",
    label: "Rol",
    minWidth: 170,
    render: (row) => {
      const roles = row?.roleID;
      return roles.map((value: any) => {
        return <Chip label={value.name} key={value.id} color="secondary" />;
      });
    },
  },
  // render: (row) => {
  //   const roles = row.roleID;
  //   const r = roles[row.roleID] || null;
  //   return <div></div>
  // },
  // },
];
