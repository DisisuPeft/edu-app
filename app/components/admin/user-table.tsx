"use client";

// import { useState } from "react";
import { Search, Plus } from "lucide-react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setQ } from "@/redux/features/admin/adminSlice";
// import { DataTable } from "@/app/utils/DataTable/DataTable";
import { useObtainUsersQuery } from "@/redux/features/admin/adminApiSlice";
export function UserTable() {
  const dispatch = useAppDispatch();
  const { q, page } = useAppSelector((state) => state.admin);
  const { data } = useObtainUsersQuery({ q, page });
  console.log(data);
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Buscar");
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Header con búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Gestión de Usuarios</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Barra de búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar usuarios..."
              value={q || ""}
              onChange={(e) => dispatch(setQ(e.target.value))}
              onKeyDown={(e) => handleSearch(e)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64 text-black"
            />
          </div>

          {/* Filtro por estado */}
          {/* <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-black"
            >
              <option value="Todos">Todos</option>
              <option value="Activo">Activos</option>
              <option value="Inactivo">Inactivos</option>
              <option value="Suspendido">Suspendidos</option>
            </select>
          </div> */}

          {/* Botón crear usuario */}
          <Link
            href="/plataforma/settings/create"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Nuevo Usuario</span>
          </Link>
        </div>
      </div>

      {/* Tabla */}
      {/* <DataTable */}
    </div>
  );
}
