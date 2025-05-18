"use client";

import { useRetrieveStudentQuery } from "@/redux/estudiante/studentApiSlice";
import Link from "next/link";
import { ArrowLeftIcon, PencilIcon } from "lucide-react";

interface Props {
  id: string;
}
export default function StudentView({ id }: Props) {
  const { data: estudiante, isLoading } = useRetrieveStudentQuery(parseInt(id));

  if (!estudiante) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Estudiante no encontrado
          </h1>
          <Link
            href="/estudiantes"
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
          href="/estudiantes"
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
              Detalles del estudiante
            </h1>
            <div className="flex gap-2">
              <Link
                href={`/estudiantes/${estudiante.id}/editar`}
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
                    {estudiante?.perfil?.nombre} {estudiante?.perfil?.apellidoP}{" "}
                    {estudiante?.perfil?.apellidoM}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante?.email || "N/A"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">CURP</dt>
                  <dd className="mt-1 text-gray-900">{estudiante.curp}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Matrícula
                  </dt>
                  <dd className="mt-1 text-gray-900">{estudiante.matricula}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Fecha de nacimiento
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {new Date(
                      estudiante?.perfil?.fechaNacimiento
                    ).toLocaleDateString()}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Edad</dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante?.perfil?.edad}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante?.lugar_nacimiento}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Municipio
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante?.municipio}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Dirección
                  </dt>
                  <dd className="mt-1 text-gray-900">{estudiante.direccion}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Teléfono
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante.perfil?.telefono}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Información académica
              </h2>
              <dl className="grid grid-cols-1 gap-4">
                {/* <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Grupo</dt>
                  <dd className="mt-1 text-gray-900">{estudiante.grupo}</dd>
                </div> */}
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Nivel educativo
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante?.perfil?.nivEdu_info?.name}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        estudiante.activo
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {estudiante.activo === 1 ? "Activo" : "Inactivo"}
                    </span>
                  </dd>
                </div>
              </dl>

              <h2 className="text-lg font-semibold mt-6 mb-4 text-gray-700">
                Información del tutor
              </h2>
              <dl className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Nombre del tutor
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante.tutor_nombre || "N/A"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Teléfono del tutor
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    {estudiante.tutor_telefono || "N/A"}
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
