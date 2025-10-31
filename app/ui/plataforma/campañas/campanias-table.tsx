"use client";
import { useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle, Megaphone } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { useGetCampanasQuery } from "@/redux/features/campanias/campaniaApiSlice";
import { CampaniaPrograma } from "@/redux/features/campanias/type";
import { usePatchCampaniaMutation } from "@/redux/features/campanias/campaniaApiSlice";

export default function CampaniasTable() {
  const { data: campanias, refetch } = useGetCampanasQuery();
  const [page, setPage] = useState<number>();
  const [patchCampania, { isLoading }] = usePatchCampaniaMutation();

  const isMorePages = campanias?.count < 10;

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // };

  const headers: ColumnDef<CampaniaPrograma>[] = [
    { header: "Nombre de la campaña", accessorKey: "campania_r.nombre" },
    { header: "Diplomado (s)", accessorKey: "programa_r.nombre" },
    {
      header: "Fecha de inicio de la campaña",
      accessorFn: (row) => {
        const fecha_inicio = row?.campania_r.fecha_inicio;
        return fecha_inicio.split("-").reverse().join("/");
      },
    },
    {
      header: "Fecha de finalización de la campaña",
      accessorFn: (row) => {
        const fecha_fin = row?.campania_r.fecha_fin;
        return fecha_fin.split("-").reverse().join("/");
      },
    },
    {
      header: "Activar/Desactivar",
      accessorKey: "campania_r.activo",
      cell: ({ row }) => {
        return (
          <div className="flex items-center pt-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={row.original.campania_r.activo === 1}
                disabled={isLoading}
                onChange={
                  (e) =>
                    patchCampania({
                      id: row.original.id,
                      body: e.target.checked ? 1 : 0,
                    })
                      .unwrap()
                      .then(() => refetch()) // ← recarga desde backend
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        );
      },
    },
  ];
  return (
    <div className="space-y-4 mt-12">
      {campanias?.results ? (
        <div>
          <DataTable data={campanias?.results} columns={headers} />
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
          <div className="flex justify-center items-center text-black mb-4">
            <Megaphone className="text-7xl" />
          </div>
          <p className="text-slate-600 text-lg">No hay campañas definidas</p>
          <p className="text-slate-500 text-sm mt-2">
            Agrega tu primera campañas usando el botón de arriba
          </p>
        </div>
      )}
    </div>
  );
}
