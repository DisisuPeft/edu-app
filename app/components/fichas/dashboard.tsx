"use client";

// import { useState } from "react";
import {
  Search,
  Plus,
  ChevronLeftCircle,
  ChevronRightCircle,
  // UserRoundCog,
  //   Trash2Icon,
} from "lucide-react";
// import { Switch } from "@mui/material";
// import { setQ } from "@/redux/features/admin/adminSlice";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import FichasForm from "./form-fichas";
import { useGetFichasQuery } from "@/redux/features/control-escolar/fichasApiSlice";
import { Ficha } from "@/redux/features/control-escolar/fichasApiSlice";
import { Chip } from "@mui/material";
import { sweetAlert } from "@/sweetalert/sweet-alert";
// import { Modal } from "../common/Modal";
// import PermissionsAccessForm from "@/app/ui/plataforma/admin/access-permissions";
// import { useGetMenuQuery } from "@/redux/sistema/SistemaApiSlice";
// import { DeleteModal } from "./delete-modal";

export function FichasDash() {
  // const dispatch = useAppDispatch();
  const [fechaInicio, setFechaInicio] = useState<string>("");
  const [fechaFinal, setFechaFinal] = useState<string>("");

  const { data } = useGetFichasQuery({
    fechaInicio: fechaInicio,
    fechaFinal: fechaFinal,
  });
  // const [searchByName, setSearchByName] = useState<string>("");
  const [open, setOpen] = useState(false);
  // const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     dispatch(setQ(searchByName));
  //   }
  // };

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
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target);
  // };
  const headers: ColumnDef<Ficha>[] = [
    {
      header: "Nombre",
      accessorKey: "nombreAlumno",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    { header: "Inscrito a", accessorKey: "inscrito" },
    {
      header: "Comision",
      accessorKey: "comision",
    },
    {
      header: "Autorizado",
      cell: ({ row }) => {
        const autorizado = row.original.autorizado;
        return (
          <>
            {autorizado ? (
              <Chip label={"Autorizado"} color="success" />
            ) : (
              <Chip label="No autorizado" color="error" />
            )}
          </>
        );
      },
    },
    // { header: "URL definida", accessorKey: "slug" },
    // {
    //   header: "Autorizacion",
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex flex-row gap-4 p-2">
    //         <Switch
    //           checked={row.original.autorizado}
    //           onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
    //         />
    //       </div>
    //     );
    //   },
    // },
  ];

  const closeForm = (value: boolean) => {
    setOpen(value);
  };

  useEffect(() => {
    const hoy = new Date();
    const primerDia = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);
    setFechaInicio(primerDia.toISOString().split("T")[0]);
    setFechaFinal(ultimoDia.toISOString().split("T")[0]);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Gestión de Fichas</h2>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {/* Fecha inicio */}
            <div className="flex-1 sm:flex-initial">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha inicio
              </label>
              <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-black"
              />
            </div>

            {/* Fecha final */}
            <div className="flex-1 sm:flex-initial">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha final
              </label>
              <input
                type="date"
                value={fechaFinal}
                onChange={(e) => setFechaFinal(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-black"
              />
            </div>

            {/* Búsqueda */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Buscar
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-black"
                />
              </div>
            </div>

            {/* Botón aplicar filtros */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  // Aplicar filtros aquí
                  sweetAlert(
                    "info",
                    "En breve se podran aplicar filtros",
                    "Alerta",
                  );
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap h-[42px] border border-gray-300"
              >
                Aplicar filtros
              </button>
            </div>

            {/* Botón nueva ficha */}
            <div className="flex items-end">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap h-[42px]"
              >
                <Plus className="h-4 w-4" />
                <span>Nueva ficha</span>
              </button>
            </div>
          </div>

          <FichasForm show={open} setShow={closeForm} />
        </div>
      </div>

      {/* Tabla */}

      {data?.fichas ? (
        <div>
          <DataTable data={data?.fichas} columns={headers} />
          <div className="flex justify-end gap-4 mt-4 p-4">
            <button
              className="rounded-full"
              // onClick={() => dispatch(setPage(Math.max(page - 1, 1)))}
            >
              <ChevronLeftCircle className="text-black" />
            </button>

            <button
            // onClick={() => dispatch(setPage(page + 1))}
            // disabled={isMorePages}
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
