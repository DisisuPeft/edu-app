"use client";

import { useRetrieveTeacherQuery } from "@/redux/maestro/teacherApiSlice";
import Link from "next/link";
import { ArrowLeftIcon, PencilIcon } from "lucide-react";

interface Props {
  id: string;
}
export default function TeacherView({ id }: Props) {
  const { data: maestro, isLoading } = useRetrieveTeacherQuery(parseInt(id));

  if (!maestro) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Docente no encontrado
          </h1>
          <Link
            href="/maestros"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Volver a la lista
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/maestros"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Volver a la lista
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Detalles del docente
            </h1>
            <div className="flex gap-2">
              <Link
                href={`/maestros/${maestro.id}/editar`}
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <PencilIcon className="h-5 w-5 mr-2" />
                Editar
              </Link>
              {/* <DeleteEstudianteButton id={estudiante.id} /> */}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Información personal
              </h2>
              <dl className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Nombre</dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.perfil?.nombre} {maestro?.perfil?.apellidoP}{" "}
                    {maestro?.perfil?.apellidoM}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.email || "N/A"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">CURP</dt>
                  <dd className="mt-1 text-gray-900">{maestro.curp}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">RFC</dt>
                  <dd className="mt-1 text-gray-900">{maestro.rfc}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Fecha de nacimiento
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {new Date(
                      maestro?.perfil?.fechaNacimiento
                    ).toLocaleDateString()}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Edad</dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.perfil?.edad}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.estado || "N/A"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Municipio
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.municipio || "N/A"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Dirección
                  </dt>
                  <dd className="mt-1 text-gray-900">{maestro?.direccion}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Teléfono
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.perfil?.telefono}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Información académica
              </h2>
              <dl className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Nivel educativo
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.perfil?.nivEdu_info?.name}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Especialidad
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.especialidad || "N/A"}
                  </dd>
                </div>
                {/* <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        maestro.activo
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {maestro.activo === 1 ? "Activo" : "Inactivo"}
                    </span>
                  </dd>
                </div> */}
              </dl>

              <h2 className="text-lg font-semibold mt-6 mb-4 text-gray-700">
                Información laboral
              </h2>
              <dl className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Estatus</dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro?.estatus || "N/A"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        maestro.activo
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {maestro.activo === 1 ? "Activo" : "Inactivo"}
                    </span>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Numero de colaborador
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {maestro.numero_colaborador}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
