"use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { useRetrieveDiplomadosQuery } from "@/redux/features/admin/adminApiSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { setPage } from "@/redux/features/admin/adminSlice";
import { CursoCardsType } from "@/redux/control-escolar/programas-educativos/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/ui/Button";
import { useInscriptionStudentMutation } from "@/redux/features/admin/adminApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
// import { useState } from "react";
//  7  1  1  4  1  1  6  3
// 83 56 28 10 49 28 47 37
// console.log((37 % 7) + 1);

export default function CourseEnrollment({
  estudiante_id,
}: {
  estudiante_id: string;
}) {
  // const { q, page } = useAppSelector((state) => state.admin);
  const [inscriptionStudent] = useInscriptionStudentMutation();
  // const [page, setPage] = useState<number | null>();
  const dispatch = useAppDispatch();
  const { data: diplomados } = useRetrieveDiplomadosQuery({
    q: null,
    page: 1,
  });
  const handleInscription = (curso_id: number) => {
    const next = { curso_id, estudiante_id };
    inscriptionStudent(next)
      .unwrap()
      .then((res) => {
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
  };
  // const isMorePages = diplomados?.count <= 10;
  const headers: ColumnDef<CursoCardsType>[] = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    { header: "Descripcion", accessorKey: "descripcion" },
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
        return (
          <div className="flex flex-row gap-4 p-2">
            <div>
              <Button
                disabled={!estudiante_id}
                onClick={() => handleInscription(id)}
              >
                Inscribir
              </Button>
            </div>
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
          {/* <div className="flex justify-end gap-4 mt-4 p-4">
            <button
              className="rounded-full"
              onClick={() => setPage(Math.max(page - 1, 1))}
            >
              <ChevronLeftCircle className="text-black" />
            </button>

            <button onClick={() => setPage(page + 1)} disabled={isMorePages}>
              <ChevronRightCircle className="text-black" />
            </button>
          </div> */}
        </div>
      ) : (
        <div className="text-black">No data found</div>
      )}
    </div>
  );
}
