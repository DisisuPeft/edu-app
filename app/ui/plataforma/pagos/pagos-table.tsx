import {
  //   Pago,
  //   PagoPagination,
  Estudiante,
} from "@/redux/interface/control_escolar/types/pagos";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  PencilIcon,
} from "lucide-react";
import { useState } from "react";
import Card from "../../components/card";
import { useRetrievePagosQuery } from "@/redux/control-escolar/pagos/pagosApiSlice";
import Link from "next/link";

export default function PagosTable() {
  const [page, setPage] = useState<number>(1);
  const { data: pagos } = useRetrievePagosQuery(page);
  const headers: ColumnDef<Estudiante>[] = [
    { accessorKey: "perfil", header: "Nombre Alumno" },
    {
      header: "Inscrito a",
      cell: ({ row }) => {
        const cp = row?.original.inscripciones;
        return (
          <div className="text-black">
            {cp?.map((item) => (
              <div key={item.id}>
                {""}
                <li>{item.campania_programa_r.programa}</li>
              </div>
            ))}
          </div>
        );
      },
    },
    {
      header: "Acciones",
      cell: ({ row }) => {
        const row1 = row?.original.id;
        // console.log(row1);
        return (
          <div className="flex items-center text-black">
            <Link href={`/plataforma/pagos/${row1}/pago`}>
              <PencilIcon />
            </Link>
          </div>
        );
      },
    },
  ];
  const isMorePages = pagos?.count < 10;
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Registro de Pagos
        </h2>
        <span className="text-sm text-gray-800">
          {pagos?.count} {pagos?.count === 1 ? "pago" : "pagos"}
        </span>
      </div>

      {!pagos?.results ? (
        <div className="text-center py-12">
          <div className="mb-4 text-5xl">💳</div>
          <p className="text-gray-800 mb-2">No hay pagos registrados</p>
          <p className="text-sm text-gray-800">
            Comienza registrando el primer pago
          </p>
        </div>
      ) : (
        <div>
          <DataTable data={pagos?.results} columns={headers} />
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
      )}
    </Card>
  );
}
