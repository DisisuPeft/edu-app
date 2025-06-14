"use client";

import { useGetCatalogoProgramaQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import { Filter } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setProgramCatalog,
  setError,
  finishInitialLoad,
} from "@/redux/control-escolar/programas-educativos/programSlice";
import { useEffect, useState } from "react";
import DataTable from "@/app/utils/DataTable/DataTable";
import { ProgramaEducativo } from "@/redux/control-escolar/programas-educativos/types";
import { Column } from "@/redux/interface/data-table/data-table-types";

export default function ProgramCatalog() {
  const { data, error, isLoading, isSuccess } = useGetCatalogoProgramaQuery();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  const headers: Column<ProgramaEducativo>[] = [
    { label: "Nombre programa", accessor: "nombre" },
    //     { label: "Correo", accessor: "correo" },
    //     { label: "Teléfono", accessor: "telefono" },
    //     { label: "Fuente", accessor: "fuente" },
    //     { label: "Etapa", accessor: "etapa" },
    //     { label: "Programa de Interés", accessor: "interesado_en" },
    //     { label: "Institución", accessor: "institucion" },
    //     // { label: "Fecha de Creación", accessor: "fecha_creacion" },
    //     { label: "Acciones", accessor: "acciones" },
    //     // No incluyas "Acciones" si no tienes una propiedad específica en el modelo
  ];

  const onChangePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(finishInitialLoad());
    }
    if (isSuccess && data) {
      dispatch(setProgramCatalog(data));
    }
    if (error && "status" in error) {
      dispatch(setError("Error al cargar los programas"));
    }
  }, [data, error, isSuccess, isLoading]);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
        <h2 className="text-lg font-medium text-gray-800">
          Catálogo de Programas
        </h2>
        <div className="mt-2 md:mt-0 flex items-center">
          <select className="mr-2 border border-gray-300 rounded-md text-sm p-2 text-gray-800">
            <option value="">Todos los niveles</option>
            <option value="licenciatura">Licenciatura</option>
            <option value="maestria">Maestría</option>
            <option value="doctorado">Doctorado</option>
          </select>
          <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Filter className="h-4 w-4 mr-1" />
            Filtrar
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <DataTable
          columns={headers}
          data={data?.results}
          totalCount={data?.count}
          currentPage={page}
          itemsPerPage={10}
          onPageChange={onChangePage}
          path={"/control-escolar/programas-educativos"}
          query_id={1}
        />
      </div>
    </div>
  );
}
