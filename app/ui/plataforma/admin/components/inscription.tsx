"use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import {
  useDesinscripcionMutation,
  useRetrieveDiplomadosQuery,
} from "@/redux/features/admin/adminApiSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { setPage } from "@/redux/features/admin/adminSlice";
// import { CursoCardsType } from "@/redux/control-escolar/programas-educativos/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/ui/Button";
import { useInscriptionStudentMutation } from "@/redux/features/admin/adminApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useState } from "react";
import { Modal } from "@/app/components/common/Modal";
import { Diplomados } from "@/redux/control-escolar/programas-educativos/types";
//  7  1  1  4  1  1  6  3
// 83 56 28 10 49 28 47 37
// console.log((37 % 7) + 1);
type Tipo = "create" | "delete";

export default function CourseEnrollment({
  estudiante_id,
}: {
  estudiante_id: string;
}) {
  // const { q, page } = useAppSelector((state) => state.admin);
  const [inscriptionStudent] = useInscriptionStudentMutation();
  const [desinscripcion] = useDesinscripcionMutation();
  const [page, setPage] = useState<number | null>();
  const [show, setShow] = useState<boolean | null>();
  const [diplomadoName, setName] = useState<string | null>();
  const [tipo, setTipo] = useState<Tipo>();
  const [idRaw, setIdRaw] = useState<number>();
  const dispatch = useAppDispatch();

  const { data: diplomados, refetch } = useRetrieveDiplomadosQuery({
    q: null,
    page: 1,
    estudiante_id: parseInt(estudiante_id),
  });
  const handleOpenModal = (name: string, type: Tipo, id: number) => {
    // console.log(name, type);
    if (type == "delete") {
      setTipo("delete");
      setName(name);
    } else if (type == "create") {
      setTipo("create");
      setName(name);
    }
    setIdRaw(id);
    setShow(true);
  };
  const handleInscription = (curso_id: number, tipo: Tipo) => {
    const next = { curso_id, estudiante_id };
    if (tipo == "create") {
      inscriptionStudent(next)
        .unwrap()
        .then((res) => {
          refetch();
          dispatch(setAlert({ message: res, type: "success" }));
        })
        .catch((error) => {
          const errorMessage = Array.isArray(error?.data)
            ? "La respuesta viene en un arreglo"
            : error?.data;
          dispatch(
            setAlert({
              message: errorMessage,
              type: "error",
            })
          );
        });
    } else if (tipo == "delete") {
      desinscripcion(next)
        .unwrap()
        .then((res) => {
          refetch();
          dispatch(setAlert({ message: res, type: "success" }));
        })
        .catch((error) => {
          const errorMessage = Array.isArray(error?.data)
            ? "La respuesta viene en un arreglo"
            : error?.data;
          dispatch(
            setAlert({
              message: errorMessage,
              type: "error",
            })
          );
        });
    }
  };
  const isMorePages = diplomados?.count <= 10;
  const headers: ColumnDef<Diplomados>[] = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    // { header: "Descripcion", accessorKey: "descripcion" },
    { header: "Duracion en horas", accessorKey: "duracion_horas" },
    // {
    //   header: "Email",
    //   cell: ({ row }) => {
    //     return <div className="text-black">{row?.original?.user?.email}</div>;
    //   },
    // },
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
        const inscrito = row?.original?.inscrito;
        const nombre = row?.original?.nombre;
        return (
          <div className="flex flex-row gap-4 p-2">
            {inscrito ? (
              <div>
                {" "}
                <div>
                  <Button
                    disabled={!estudiante_id}
                    onClick={() => handleOpenModal(nombre, "delete", id)}
                  >
                    Desinscribir
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <Button
                    disabled={!estudiante_id}
                    onClick={() => handleOpenModal(nombre, "create", id)}
                  >
                    Inscribir
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="">
      {diplomados?.results ? (
        <div>
          <DataTable data={diplomados?.results} columns={headers} />
          <div className="flex justify-end gap-4 mt-4 p-4">
            <button
              className="rounded-full"
              onClick={() => setPage(Math.max(page - 1, 1))}
            >
              <ChevronLeftCircle className="text-black" />
            </button>

            <button onClick={() => setPage(page + 1)} disabled={isMorePages}>
              <ChevronRightCircle className="text-black" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-black">No data found</div>
      )}
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="p-6 mx-4 text-center text-black">
          <h2 className="text-2xl font-semibold mb-4 p-4">¿Estás seguro?</h2>
          {tipo == "delete" ? (
            <p className="mb-6 text-gray-600">
              El estudiante será desinscrito del{" "}
              <span className="font-medium">{diplomadoName}</span>. ¿Quieres
              continuar?
            </p>
          ) : tipo == "create" ? (
            <p className="mb-6 text-gray-600">
              El estudiante será inscrito al{" "}
              <span className="font-medium">{diplomadoName}</span>. ¿Quieres
              continuar?
            </p>
          ) : (
            <div>
              No se ha establecido un tipo para este recuros, contacta con el
              administrador
            </div>
          )}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setShow(false)}
              className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>
            {tipo == "delete" ? (
              <button
                onClick={() => handleInscription(idRaw, tipo)}
                className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            ) : tipo == "create" ? (
              <Button
                onClick={() => handleInscription(idRaw, tipo)}
                className="px-4 py-2 rounded-xl bg- text-white hover:bg-red-600 transition"
              >
                Inscribir
              </Button>
            ) : (
              <div>
                No se ha establecido un tipo para este recuros, contacta con el
                administrador
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
