import { useGetUsersQuery } from "@/redux/sistema/SistemaApiSlice";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { Column } from "../TableTypes";
import { Chip } from "@mui/material";
import { Edit } from "lucide-react";
import { Delete } from "lucide-react";
import UsersDialog from "../UsersDialog";
import { Modal } from "@/app/components/common/Modal";
import EditUser from "../forms/EditUser";
import { Alert } from "@/alerts/toast";
import Swal from "sweetalert2";

export default function UsuariosTabla(){
    const { data, error, refetch } = useGetUsersQuery();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);

    const handleClose = (event: boolean) => {
      setOpen(event);
    };
    const handleCloseForm = (event: boolean) => {
      refetch()
      Alert({title: "Exito", text:"El usuario se edito!", icon:"success"})
      setOpen(event);
    };
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
    const handleOpenEdit = () => {
      setOpen(true);
    };
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setRowsPerPage(+event.target.value);
        setPage(0);
    };
      const columns: readonly Column[] = [
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
          path: "profile.genero_info.name",
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
          path: "profile.nivEdu_info.name",
        },
        {
          id: "rol",
          label: "Rol",
          minWidth: 170,
          render: (row) => {
            const roles = row?.roleID;
            return roles.map((value: any) => {
              return (
                <div className="p-[2px]" key={value.id}>
                  <Chip label={value.name} color="secondary" />
                </div>
              );
            });
          },
        },
        {
          id: "editar",
          label: "Acciones",
          minWidth: 170,
          render: (row) => (
            <div className="flex flex-row w-full p-2 gap-2">
              <div className="flex justify-center">
                <button className="" onClick={handleOpenEdit}>
                  <Edit />
                </button>
              </div>
              <UsersDialog
                open={open}
                setClose={handleClose}>
                  <EditUser id={row.id} onClose={handleCloseForm}/>
              </UsersDialog>
              <div className="flex justify-center">
                <button className="">
                  <Delete />
                </button>
              </div>
            </div>
          ),
        },
      ];
    return (
        <div>
            {data?.length > 0 ? (     
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover tabIndex={-1} key={row.id}>
                                {columns.map((column) => {
                                // Para manejar propiedades anidadas como 'profile.name'
                                let value = column.path
                                    ? column.path
                                        .split(".")
                                        .reduce((obj, path) => obj && obj[path], row)
                                    : row[column?.id];

                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.render ? column.render(row) : value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="Fila"
                />
                </Paper>)
            :
                (<div className="text-black">Sin datos</div>)
        }
        </div>
    
    )
}