"use client";

// import { useGetUsersQuery } from "@/redux/sistema/SistemaApiSlice";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { useState } from "react";
// import { Column } from "./TableTypes";
// import { Chip } from "@mui/material";
// import { Edit } from "lucide-react";
// import { Delete } from "lucide-react";
// import UsersDialog from "./UsersDialog";
// import { Modal } from "@/app/components/common/Modal";
// import UsuariosTabla from "./tables/usuarios-table";
// import CreateUser from "./forms/create-user";
import TableUsers from "./tables/table-users";

// Prometo que despues limpio el componente haciendo un hook
export default function UsuariosPanel() {
  // const [open, setOpen] = useState(false);
  // const [from, setFrom] = useState("");
  // const handleClose = (event: boolean) => {
  //   setOpen(event);
  // };
  // const handleReset = (message: string) => {
  //   setFrom(message);
  // };
  // const handleOpenCreate = () => {
  //   setFrom("create");
  //   setOpen(true);
  // };
  // const hanleClose = () => {
  //   setOpen(false)
  // }
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Gestión de Usuarios</h2>
        <button
          // onClick={handleOpenCreate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Nuevo Usuario
        </button>
      </div>
      <TableUsers />
      {/* <UsuariosTabla/> */}
      {/* <UsersDialog
        open={open}
        setClose={handleClose}
      /> */}
    </div>
  );
}
