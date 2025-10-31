"use client";

import CampaniaFormulario from "./campania-form";
import CampaniasTable from "./campanias-table";

export default function Wrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Campañas
          </h1>
          <p className="text-slate-600">Gestiona las campañas de diplomados</p>
        </div>

        {/* Botón para mostrar formulario */}
        <CampaniaFormulario />

        {/* Lista de Enlaces */}
        <CampaniasTable />
      </div>
    </div>
  );
}
