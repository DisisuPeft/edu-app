"use client";

import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState, useEffect } from "react";

//definicion de tipos para el data table
export type SortDirection = "asc" | "desc" | null;
export type Column<T> = {
  id: string;
  header: string | React.ReactNode;
  accessorKey?: keyof T;
  accessorFn?: (row: T) => any;
  cell?: (info: { row: T; value: any }) => React.ReactNode;
  sorteable?: boolean;
  className?: string;
};

export type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  isLading?: boolean;
  pagination?: boolean;
  pageSize?: number;
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string | ((row: T, index: number) => string);
  cellClassName?: string;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
};

export function DataTable<T extends object>({
  data,
  columns,
  isLoading = false,
  pagination = false,
  pageSize = 10,
  className = "",
  tableClassName = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = "",
  emptyMessage = "No hay datos disponibles",
  onRowClick,
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<T[]>(data);

  // Actualizar datos cuando cambien los props
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Manejar ordenamiento
  const handleSort = (columnId: string) => {
    if (sortColumn === columnId) {
      // Si ya estamos ordenando por esta columna, cambiamos la dirección
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      // Nueva columna para ordenar
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };

  // Aplicar ordenamiento y paginación
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData;

    const column = columns.find((col) => col.id === sortColumn);
    if (!column) return filteredData;

    return [...filteredData].sort((a, b) => {
      let valueA, valueB;

      if (column.accessorFn) {
        valueA = column.accessorFn(a);
        valueB = column.accessorFn(b);
      } else if (column.accessorKey) {
        valueA = a[column.accessorKey];
        valueB = b[column.accessorKey];
      } else {
        return 0;
      }

      if (valueA === valueB) return 0;

      const direction = sortDirection === "asc" ? 1 : -1;
      return valueA > valueB ? direction : -direction;
    });
  }, [filteredData, sortColumn, sortDirection, columns]);

  // Datos paginados
  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData;

    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, pagination, currentPage, pageSize]);

  // Total de páginas
  const totalPages = pagination ? Math.ceil(sortedData.length / pageSize) : 1;

  // Cambiar de página
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  // Renderizar celda
  const renderCell = (row: T, column: Column<T>) => {
    let value: any;

    if (column.accessorFn) {
      value = column.accessorFn(row);
    } else if (column.accessorKey) {
      value = row[column.accessorKey];
    } else {
      value = undefined;
    }

    if (column.cell) {
      return column.cell({ row, value });
    }

    return value != null ? String(value) : "";
  };

  // Obtener clase de fila
  const getRowClassName = (row: T, index: number) => {
    if (typeof rowClassName === "function") {
      return rowClassName(row, index);
    }
    return rowClassName;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table
        className={`min-w-full divide-y divide-gray-200 ${tableClassName}`}
      >
        <thead className={`bg-gray-50 ${headerClassName}`}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.className || ""
                }`}
                onClick={() => column.sortable && handleSort(column.id)}
                style={{ cursor: column.sortable ? "pointer" : "default" }}
              >
                <div className="flex items-center">
                  {column.header}
                  {column.sortable && sortColumn === column.id && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : sortDirection === "desc" ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : null}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                Cargando...
              </td>
            </tr>
          ) : paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            paginatedData.map((row, index) => (
              <tr
                key={index}
                className={`${getRowClassName(row, index)} ${
                  onRowClick ? "cursor-pointer hover:bg-gray-50" : ""
                }`}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={`px-6 py-4 whitespace-nowrap ${cellClassName}`}
                  >
                    {renderCell(row, column)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
          <div className="flex items-center">
            <p className="text-sm text-gray-700">
              Mostrando{" "}
              <span className="font-medium">
                {(currentPage - 1) * pageSize + 1}
              </span>{" "}
              a{" "}
              <span className="font-medium">
                {Math.min(currentPage * pageSize, sortedData.length)}
              </span>{" "}
              de <span className="font-medium">{sortedData.length}</span>{" "}
              resultados
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber;

                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`px-3 py-1 rounded ${
                      currentPage === pageNumber
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
