"use client";

import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { PlusIcon, EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Estudiante } from "@/redux/interface/estudiante/estudiante";
import { useGetStudentsQuery } from "@/redux/estudiante/studentApiSlice";
// interface TableProps {
//     estudiantes?: Estudiante [] | []
// }

export default function StudentsTable() {
  const { data: estudiantes, isLoading } = useGetStudentsQuery();
  return (
    <div className="text-gray-800">
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por matrícula, nombre o CURP"
            className="pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg w-[400px] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <Link
          href="/estudiantes/crear"
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Agregar estudiante</span>
        </Link>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow pt-5">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Matrícula
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                CURP
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nombre completo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Grupo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nivel Educativo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Estado
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {estudiantes?.map((estudiante) => (
              <tr key={estudiante.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {estudiante.matricula}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {estudiante?.perfil?.nombre} {estudiante?.perfil?.apellidoP}{" "}
                  {estudiante?.perfil?.apellidoM}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {estudiante.curp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {/* {estudiante.grupo} */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {estudiante?.perfil?.nivEdu_info?.name ||
                    "Sin nivel educativo"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      estudiante.activo
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {estudiante.activo === 1 ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/estudiantes/${estudiante.id}`}
                      className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100"
                      title="Ver detalles"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href={`/estudiantes/${estudiante.id}/editar`}
                      className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-100"
                      title="Editar"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => {}}
                      className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-100"
                      title="Eliminar"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
