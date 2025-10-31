"use client";
import { useState } from "react";
import { useCreateCampania } from "@/hooks";

export default function CampaniaFormulario() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const {
    register,
    onSubmit,
    handleSubmit,
    errors,
    reset,
    isSubmitting,
    programas,
  } = useCreateCampania();
  return (
    <div>
      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        className="mb-6 w-full md:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg font-sans text-black"
      >
        {mostrarFormulario ? "✕ Cancelar" : "+ Nueva Campaña"}
      </button>

      {/* Formulario */}
      {mostrarFormulario && (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Agregar Nueva Campaña
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Título */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nombre de la campaña *
              </label>
              <input
                {...register("nombre", { required: "El título es requerido" })}
                type="text"
                placeholder="Ej: C1 Urgencias medicas"
                className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nombre.message}
                </p>
              )}
            </div>
            {/* Descripción */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Descripción (Opcional)
              </label>
              <textarea
                {...register("descripcion")}
                rows={3}
                placeholder="Agrega detalles adicionales sobre la campaña..."
                className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* fecha inicio */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fecha de inicio de la campaña *
                </label>
                <input
                  {...register("fecha_inicio", {
                    required: "La fecha es requerida",
                  })}
                  type="date"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                />
                {errors.fecha_inicio && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fecha_inicio.message}
                  </p>
                )}
              </div>
            </div>
            {/* fecha final */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fecha de final de la campaña *
                </label>
                <input
                  {...register("fecha_fin", {
                    required: "La fecha es requerida",
                  })}
                  type="date"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                />
                {errors.fecha_fin && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fecha_fin.message}
                  </p>
                )}
              </div>
            </div>
            {/* Programa educativo */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Programa educativo *
              </label>
              <select
                {...register("programa", {
                  required: "Selecciona una plataforma",
                })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-black"
              >
                <option value="">Seleccionar...</option>
                {programas &&
                  programas.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.nombre}
                    </option>
                  ))}
              </select>
              {errors.programa && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.programa.message}
                </p>
              )}
            </div>

            {/* Botones */}
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {isSubmitting ? "Guardando campaña..." : "Guardar campaña"}
              </button>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setMostrarFormulario(false);
                }}
                className="flex-1 px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors duration-200"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
