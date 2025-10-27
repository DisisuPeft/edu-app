"use client";
import { useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { Enlace } from "@/redux/interface/enlaces-clases/type";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { useGetEnlacesQuery } from "@/redux/features/enlaces-clases/linkApiSlice";

interface Props {
  programaId: string;
}

export default function EnlacesTable({ programaId }: Props) {
  const { data: enlaces } = useGetEnlacesQuery(programaId);
  const [page, setPage] = useState<number>();
  const isMorePages = enlaces?.count < 10;

  const headers: ColumnDef<Enlace>[] = [
    { header: "Titulo", accessorKey: "titulo" },
    { header: "Enlace", accessorKey: "link" },
    { header: "Contraseña de acceso", accessorKey: "password_platform" },
    {
      header: "Plataforma en la que se imparte",
      accessorKey: "plataforma_name",
    },
    {
      header: "Fecha de impartición",
      accessorFn: (row) => {
        const fecha_imparticion = row.fecha_imparticion;
        return fecha_imparticion.split("-").reverse().join("/");
      },
    },
  ];
  return (
    <div className="space-y-4 mt-12">
      {enlaces?.results ? (
        <div>
          <DataTable data={enlaces?.results} columns={headers} />
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
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="text-slate-400 text-5xl mb-4">📚</div>
          <p className="text-slate-600 text-lg">
            No hay clases programadas aún
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Agrega tu primera clase usando el botón de arriba
          </p>
        </div>
      )}
    </div>
  );
}
