"use client";

// import { useState } from "react";
import {
  Search,
  Plus,
  ChevronLeftCircle,
  ChevronRightCircle,
  PencilIcon,
  // UserRoundCog,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setQ } from "@/redux/features/admin/adminSlice";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { useObtainUsersQuery } from "@/redux/features/admin/adminApiSlice";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Estudiante } from "@/redux/features/admin/types";
import { setPage } from "@/redux/features/admin/adminSlice";
// import { Modal } from "../common/Modal";
// import PermissionsAccessForm from "@/app/ui/plataforma/admin/access-permissions";
// import { useGetMenuQuery } from "@/redux/sistema/SistemaApiSlice";
import { DeleteModal } from "./delete-modal";

export function UserTable() {
  const dispatch = useAppDispatch();
  const [searchByName, setSearchByName] = useState<string>("");
  // const [open, setOpen] = useState<boolean>(false);
  const { q, page } = useAppSelector((state) => state.admin);
  const { data } = useObtainUsersQuery({ q, page });
  // const { data: modules } = useGetMenuQuery();
  // const [userId, setUserId] = useState<number | null>();
  const [openDeleteModel, setDeleteModal] = useState<boolean>(false);
  const [student, setStudent] = useState<Estudiante>();
  // const { data: tabsmodules } = useGetTabsQuery();
  // console.log(data);
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setQ(searchByName));
    }
  };

  // useEffect(() => {
  //   if (searchByName === "") {
  //     dispatch(clearQ());
  //     if (!isLoading) {
  //       setTimeout(() => {
  //         refetch();
  //       }, 5000);
  //     }
  //   }
  // }, [searchByName, dispatch]);

  // const handleOpenModal = (id: number) => {
  //   // console.log(id);
  //   setUserId(id);
  //   setOpen(true);
  // };

  const headers: ColumnDef<Estudiante>[] = [
    {
      header: "Nombre",
      cell: ({ row }) => {
        return (
          <div className="text-black">
            {row?.original?.perfil.nombre} {row.original.perfil.apellidoP}{" "}
            {row.original.perfil.apellidoM}
          </div>
        );
      },
    },
    {
      header: "Email",
      cell: ({ row }) => {
        return (
          <div className="text-black">{row?.original?.perfil?.user?.email}</div>
        );
      },
    },
    // { header: "Fecha del evento", accessorKey: "fecha_evento" },
    // {
    //   header: "Tipo de evento",
    //   id: "tipo_evento",
    //   cell: ({ row }) => {
    //     const tipo_evento = row.original.tipo_evento;
    //     return <div className="flex gap-2">{tipo_evento.nombre}</div>;
    //   },
    // },
    // { header: "URL definida", accessorKey: "slug" },
    {
      id: "acciones",
      header: "Acciones",
      cell: ({ row }) => {
        const id = row?.original?.id;
        // const userId = row?.original?.user?.id;
        const value = row.original;
        // console.log(row?.original);
        return (
          <div className="flex flex-row gap-4 p-2">
            <Link href={`/plataforma/estudiantes/update/${id}`}>
              <PencilIcon />
            </Link>
            {/* <div>
              <button
                title="Permisos y accesos"
                onClick={() => handleOpenModal(row?.original?.perfil?.user?.id)}
              >
                <UserRoundCog />
              </button>
            </div> */}
            <div>
              <button
                title="Permisos y accesos"
                onClick={() => {
                  setStudent(value);
                  setDeleteModal(true);
                }}
              >
                <Trash2Icon />
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  const isMorePages = data?.count < 10;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Modales */}
      {/* <Modal show={open} onClose={() => setOpen(false)}>
        <PermissionsAccessForm userId={userId} modules={modules} />
      </Modal> */}
      {openDeleteModel && (
        <DeleteModal
          estudiante={student}
          onCancel={() => setDeleteModal(false)}
        />
      )}
      {/* Header con búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Gestión de Estudiantes
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Barra de búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={searchByName || ""}
              onChange={(e) => setSearchByName(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64 text-black"
            />
          </div>
          {/* Botón crear usuario */}
          <Link
            href="/plataforma/estudiantes/create"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Nuevo Usuario</span>
          </Link>
        </div>
      </div>

      {/* Tabla */}
      {/* <DataTable */}
      {data?.results ? (
        <div>
          <DataTable data={data?.results} columns={headers} />
          <div className="flex justify-end gap-4 mt-4 p-4">
            <button
              className="rounded-full"
              onClick={() => dispatch(setPage(Math.max(page - 1, 1)))}
            >
              <ChevronLeftCircle className="text-black" />
            </button>

            <button
              onClick={() => dispatch(setPage(page + 1))}
              disabled={isMorePages}
            >
              <ChevronRightCircle className="text-black" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-black">No data found</div>
      )}
    </div>
  );
}
