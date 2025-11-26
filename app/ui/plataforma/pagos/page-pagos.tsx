"use client";

import PagosTable from "./pagos-table";
// Componente Principal
export default function GestionPagos() {
  return (
    <div className="h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-gray-800">
            Gestión de Pagos
          </h1>
          <p className="text-gray-800 text-balance">
            Administra los pagos de los alumnos de la universidad
          </p>
        </div>

        {/* Lista de Pagos */}
        <PagosTable />
      </div>
    </div>
  );
}
