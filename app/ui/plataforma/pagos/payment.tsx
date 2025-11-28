"use client";

import { useState } from "react";
import { useRetrieveStudentPayQuery } from "@/redux/control-escolar/pagos/pagosApiSlice";
import { formatDate, formatCurrency } from "@/lib/datesFormat";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Pago } from "@/redux/interface/control_escolar/types/pagos";
// import { Button } from "../../Button";
import { Percent } from "lucide-react";
import ApplyPagos from "./apply-pagos";
// import ApplyPagos from "./apply-pagos";
// import FormPagos from "./form-pagos";

interface Props {
  raw_param: string;
}

const getStatusBadge = (status: Pago["estado"]) => {
  const badges = {
    pendiente: "bg-yellow-100 text-yellow-800 border-yellow-200",
    completado: "bg-green-100 text-green-800 border-green-200",
    parcial: "bg-gray-100 text-gray-800 border-gray-200",
    vencido: "bg-orange-100 text-orange-800 border-orange-200",
    cancelado: "bg-red-100 text-red-800 border-red-200",
  };

  const labels = {
    pendiente: "Pendiente",
    completado: "Completado",
    parcial: "Parcial",
    vencido: "Vencido",
    cancelado: "Cancelado",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${badges[status]}`}
    >
      {labels[status]}
    </span>
  );
};

export default function StudentPaymentsPage({ raw_param }: Props) {
  const { data: student, refetch } = useRetrieveStudentPayQuery({
    raw: raw_param,
    q: "",
  });
  // const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const columns: ColumnDef<Pago>[] = [
    // {
    //   header: "Concepto",
    //   cell: ({ row }) => {
    //     return row.original.concepto ?? "S/C";
    //   },
    // },
    {
      header: "Concepto",
      accessorKey: "tipo_pago_r",
    },
    {
      header: "Monto",
      cell: ({ row }) => {
        const monto = Number(row?.original.monto);
        return formatCurrency(monto);
      },
    },
    {
      header: "Fecha de pago",
      cell: ({ row }) => {
        const fechaPago = row?.original.fecha_pago;
        if (fechaPago) {
          return formatDate(fechaPago);
        }
        return "N/A";
      },
    },
    {
      header: "Estado",
      cell: ({ row }) => {
        const estado = row?.original.estado;
        if (estado) {
          return getStatusBadge(estado);
        }
        return "N/A";
      },
    },
  ];
  // const open = () => {
  //   setShow(true);
  // };

  // const close = (value: boolean) => {
  //   setShow(value);
  // };

  const totalPorPagar = student?.inscripciones.reduce((sum, item) => {
    const pagos = item.pagos.reduce((pagoSum, item) => {
      if (item.estado === "pendiente") {
        return pagoSum + Number(item.monto);
      }
      return pagoSum;
    }, 0);

    // console.log(pagos);
    return sum + pagos;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
            Estado de Cuenta
          </h1>
          <p className="text-gray-600">
            {/* Consulta el detalle de tus pagos y cuentas por cobrar */}
          </p>
        </div>

        {/* Información del Alumno */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 font-serif">
            Información del Alumno
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 font-serif">Nombre</p>
              <p className="text-base font-medium text-gray-900 font-serif">
                {student?.perfil}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-serif">RFC</p>
              <p className="text-base font-medium text-gray-900">
                {student?.rfc ?? "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total General */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 font-serif">
                Total General
              </h3>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            {!student ? (
              // Skeleton loading
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                ))}
              </div>
            ) : (
              // Contenido real
              <div>
                {student?.inscripciones.map((item, index) => {
                  const isPaid = Number(item.saldo_pendiente) === 0;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isPaid ? "bg-green-500" : "bg-blue-500"
                          }`}
                        ></span>
                        <span className="text-gray-700 font-serif">
                          {item.campania_programa_r?.campania}
                        </span>
                        {isPaid && (
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full font-serif">
                            Pagado
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}{" "}
                <div className="mt-4">
                  <p className="text-2xl font-bold text-yellow-600 font-serif">
                    {formatCurrency(totalPorPagar)}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 font-serif">
                Pagado
              </h3>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <p className="text-2xl font-bold text-green-600 font-serif">
              $
              {student?.inscripciones
                .reduce(
                  (total, item) => total + Number(item.total_pagado || 0),
                  0
                )
                .toLocaleString()}
            </p>

            <p className="text-xs text-gray-500 mt-1 font-serif">
              {
                student?.inscripciones.filter(
                  (item) => Number(item.total_pagado) > 0
                ).length
              }
              {student?.inscripciones.filter(
                (item) => Number(item.total_pagado) > 0
              ).length === 1
                ? " pago completado"
                : " pagos completados"}
            </p>
          </div>

          {/* Total Vencido */}
          {student?.inscripciones.map((inscripcion) => {
            const pagoCustom = inscripcion.tiene_precio_custom;
            // console.log(pagoCustom);
            return (
              pagoCustom && (
                <div
                  key={inscripcion.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-600 font-serif">
                      Promo aplicada
                    </h3>
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Percent className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 font-serif">
                    {inscripcion.notas_precio_custom}
                  </p>
                  <p className="text-2xl font-bold text-red-600 font-serif">
                    {inscripcion.costo_mensualidad_acordado}
                  </p>
                </div>
              )
            );
          })}
        </div>

        {/* Tabla de Cuentas por Cobrar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 font-serif">
              Cuentas por Cobrar
            </h2>
          </div>

          {/* Tabla Desktop */}
          <div className="overflow-x-auto">
            <div>
              {/* Navegación por pestañas */}
              <div className="border-b">
                <nav className="flex space-x-8">
                  {student?.inscripciones.map((inscripcion, index) => (
                    <button
                      key={inscripcion.id}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ml-2 font-serif ${
                        activeTab === index
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {inscripcion.campania_programa_r?.campania}
                    </button>
                  ))}
                </nav>
              </div>
              {/* Contenido de la pestaña activa */}
              <div className="">
                <ApplyPagos
                  pagos={student?.inscripciones[activeTab]?.pagos || []}
                  ins={student?.inscripciones[activeTab]?.id}
                  refetch={refetch}
                />
              </div>
              {/* Cards Mobile */}
              <div className="flex flex-col justify-center items-center p-4">
                <div className="mb-4">
                  <h1 className="text-xl font-semibold text-gray-800 mb-4 font-serif">
                    Pagos completados
                  </h1>
                </div>
                <DataTable
                  data={
                    student?.inscripciones[activeTab]?.pagos_completados || []
                  }
                  columns={columns}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
