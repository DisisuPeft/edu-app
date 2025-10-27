"use client";

import EnlaceFormulario from "./enlaces-form";
import EnlacesTable from "./enlaces-table";

export default function EnlaceClase({ programaId }: { programaId: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Enlaces de Clases
          </h1>
          <p className="text-slate-600">
            Gestiona los enlaces para las próximas clases del diplomado
          </p>
        </div>

        {/* Botón para mostrar formulario */}
        <EnlaceFormulario programaId={programaId} />

        {/* Lista de Enlaces */}
        <EnlacesTable programaId={programaId} />
      </div>
    </div>
  );
}
