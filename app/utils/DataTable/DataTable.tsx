import { Column } from "@/redux/interface/data-table/data-table-types";
import { useEffect, useState } from "react";

interface ControlledProps<T> {
  columns: Column<T>[];
  data: T[];
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
}

export default function DataTable<T>({
  columns,
  data,
  totalCount,
  currentPage,
  onPageChange,
  itemsPerPage,
}: ControlledProps<T>) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  return (
    <div className="w-full">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100 text-left">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor as string} className="p-2 border">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.accessor as string} className="p-2 border">
                  {String(item[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-3 py-1">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
