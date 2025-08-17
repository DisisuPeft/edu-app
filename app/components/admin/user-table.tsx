"use client";

import { useState } from "react";
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react";
import Link from "next/link";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  fechaRegistro: string;
  estado: string;
  cursosInscritos: number;
  ultimoAcceso: string;
}

interface UserTableProps {
  usuarios: Usuario[];
  onCreateUser?: () => void;
  onEditUser: (user: Usuario) => void;
  onDeleteUser: (user: Usuario) => void;
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Activo":
      return "bg-green-100 text-green-800";
    case "Inactivo":
      return "bg-gray-100 text-gray-800";
    case "Suspendido":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function UserTable({
  usuarios,
  onEditUser,
  onDeleteUser,
}: UserTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filteredUsers = usuarios.filter((user) => {
    const matchesSearch =
      user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "Todos" || user.estado === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64 text-black"
            />
          </div>

          {/* Filtro por estado */}
          <div className="relative">
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
          </div>

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
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Usuario</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Cursos</th>
              <th className="px-6 py-3">Registro</th>
              <th className="px-6 py-3">Último Acceso</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((usuario) => (
              <tr
                key={usuario.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">
                      {usuario.nombre}
                    </div>
                    <div className="text-gray-500">{usuario.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      usuario.estado
                    )}`}
                  >
                    {usuario.estado}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {usuario.cursosInscritos}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(usuario.fechaRegistro).toLocaleDateString("es-ES")}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(usuario.ultimoAcceso).toLocaleDateString("es-ES")}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEditUser(usuario)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                      title="Editar usuario"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDeleteUser(usuario)}
                      className="text-red-600 hover:text-red-800 p-1"
                      title="Eliminar usuario"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No se encontraron usuarios que coincidan con los criterios de
            búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}
