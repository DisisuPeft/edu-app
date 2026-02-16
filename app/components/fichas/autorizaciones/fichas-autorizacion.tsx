"use client";

// import { useState } from "react";
import {
  Search,
  // Plus,
  ChevronLeftCircle,
  ChevronRightCircle,
  // UserRoundCog,
  //   Trash2Icon,
} from "lucide-react";
import { Switch } from "@mui/material";
import { ChangeEvent } from "react";
// import { setQ } from "@/redux/features/admin/adminSlice";
import { DataTable } from "@/app/utils/DataTable/DataTable";
// import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  useGetFichasQuery,
  useAuthorizeFichasMutation,
} from "@/redux/features/control-escolar/fichasApiSlice";
import { Ficha } from "@/redux/features/control-escolar/fichasApiSlice";
import { sweetAlert } from "@/sweetalert/sweet-alert";
// import { ErrorResponse } from "@/redux/interface/response";
import Swal from "sweetalert2";
// import { Modal } from "../common/Modal";
// import PermissionsAccessForm from "@/app/ui/plataforma/admin/access-permissions";
// import { useGetMenuQuery } from "@/redux/sistema/SistemaApiSlice";
// import { DeleteModal } from "./delete-modal";

export function FichasAutorizacionDash() {
  // const dispatch = useAppDispatch();
  const { data, refetch } = useGetFichasQuery({});
  const [authorizeFichas] = useAuthorizeFichasMutation();
  // const [searchByName, setSearchByName] = useState<string>("");
  // const [open, setOpen] = useState(false);
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
  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
    identificador: number,
    idFicha: number,
  ) => {
    // console.log(e.target.value);
    Swal.fire({
      title: "Alerta",
      text: "Estas por autorizar una ficha, debes validar el deposito antes con dirección",
      confirmButtonText: "Validado",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      icon: "info",
    }).then((result) => {
      if (result.isConfirmed) {
        autoriza(e.target.value, identificador, idFicha);
      }
    });
  };
  const autoriza = async (value: string, id: number, idFicha: number) => {
    try {
      // console.log("success");
      const res = await authorizeFichas({
        swithValue: { value: value },
        identificador_alumno: id,
        ficha: idFicha,
      }).unwrap();
      sweetAlert("success", `${res.message}`, "Exito");
      refetch();
    } catch (error) {
      console.log(error);
      // console.log("cae n el error");
      // const e = error as ErrorResponse;
      sweetAlert("error", `Esta ficha ya se encuentra autorizada`, "Error");
    }
  };

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
    // {
    //   header: "Comision",
    //   accessorKey: "comision",
    // },
    // { header: "URL definida", accessorKey: "slug" },
    {
      header: "Autorización",
      cell: ({ row }) => {
        return (
          <div className="flex flex-row gap-4 p-2">
            <Switch
              checked={row.original.autorizado}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(
                  e,
                  row.original.identificador_alumno,
                  row.original.id,
                )
              }
            />
          </div>
        );
      },
    },
  ];

  // const closeForm = (value: boolean) => {
  //   setOpen(value);
  // };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Modales */}
      {/* <Modal show={open} onClose={() => setOpen(false)}>
        <PermissionsAccessForm userId={userId} modules={modules} />
      </Modal> */}
      {/* Header con búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Gestión de Fichas</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Barra de búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar por nombre..."
              // value={searchByName || ""}
              // onChange={(e) => setSearchByName(e.target.value)}
              // onKeyDown={(e) => handleSearch(e)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64 text-black"
            />
          </div>
          {/* Botón crear usuario */}
          {/* <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Nueva ficha</span>
          </button> */}
          {/* <FichasForm show={open} setShow={closeForm} /> */}
        </div>
      </div>

      {/* Tabla */}

      {data.fichas ? (
        <div>
          <DataTable data={data.fichas} columns={headers} />
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
