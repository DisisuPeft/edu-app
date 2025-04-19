import { useGetUsersQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { Edit } from "lucide-react";
import { Delete } from "lucide-react";
import UsersDialog from "../UsersDialog";
import { Modal } from "@/app/components/common/Modal";
import EditUser from "../forms/EditUser";
import { Alert } from "@/alerts/toast";
import Swal from "sweetalert2";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { Permission, Role, User } from "@/redux/interface/authentication/Users";

export default function TableUsers(){
    const { data, error, refetch } = useGetUsersQuery();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [id, setID] = useState<number>()

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
    const handleOpenEdit = (id:number) => {
      setID(id)
      setOpen(true);
    };
    const columns: ColumnDef<User>[] = [
      {
        accessorKey: 'email',
        header: 'Correo',
      },
      {
        accessorFn: (row) => row.profile.nombre + ' ' + row.profile.apellidoP + ' ' + (row.profile.apellidoM ?? ''),
        id: 'nombreCompleto',
        header: 'Nombre completo',
      },
      {
        accessorFn: (row) => row.profile.telefono ?? 'N/A',
        id: 'telefono',
        header: 'Teléfono',
      },
      {
        accessorFn: (row) => row.profile.genero_info?.name ?? 'No definido',
        id: 'genero',
        header: 'Género',
      },
      {
        accessorFn: (row) => row.profile.nivEdu_info?.name ?? 'No definido',
        id: 'nivelEducativo',
        header: 'Nivel educativo',
      },
      {
        accessorFn: (row) => row.roleID,
        cell: ({getValue}) => {
          const roles = getValue() as Role []
          return (
            <div className="flex flex-wrap gap-1">
              {roles.map((r) => (
                <div key={r.id} className="bg-sky-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {r.name}
                </div>
              ))}
            </div>
          )
        },
        id: 'roles',
        header: 'Roles',
      },
      {
        accessorFn: (row) => row.permission,
        cell: ({getValue}) => {
          const permission = getValue() as Permission []
          return (
            <div className="flex flex-wrap gap-1">
              {permission.map((p) => (
                <div key={p.id} className="bg-sky-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {p.name}
                </div>
              ))}
            </div>
          )
        },
        id: 'permisos',
        header: 'Permisos',
      },
      {
        accessorFn: (row) => row,
        cell: ({getValue}) => {
          const user = getValue() as User
          return (
            <div className="flex flex-row w-full p-2 gap-2">
              <div className="flex justify-center">
                <button className="" onClick={() => handleOpenEdit(user.id)}>
                  <Edit />
                </button>
              </div>
              <div className="flex justify-center">
                <button className="">
                  <Delete />
                </button>
              </div>
            </div>
          )
        },
        id: 'actions',
        header: 'Acciones',
      }
    ];
    const table = useReactTable<User>({
      data: data || [],
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
    return (
      <div className="overflow-auto rounded-lg border border-gray-200 shadow-md">
        <table className="min-w-full divide-y divide-gray-300 bg-white text-sm">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 text-left font-semibold text-gray-700">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-gray-800">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <UsersDialog
          open={open}
          setClose={handleClose}>
            <EditUser id={id} onClose={handleCloseForm}/>
        </UsersDialog>
    </div>
    )
}