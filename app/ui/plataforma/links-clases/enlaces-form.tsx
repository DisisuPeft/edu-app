"use client";
import { useState } from "react";
import useCreateEnlace from "@/hooks/plataforma/enlaces/use-create-enlace";
import { Eye } from "lucide-react";

export default function EnlaceFormulario({
  programaId,
}: {
  programaId: string;
}) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [showPassword, setShowPass] = useState<boolean>(false);
  const {
    register,
    onSubmit,
    handleSubmit,
    plataformas,
    errors,
    reset,
    isSubmitting,
  } = useCreateEnlace(programaId);
  return (
    <div>
      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        className="mb-6 w-full md:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg font-sans text-black"
      >
        {mostrarFormulario ? "✕ Cancelar" : "+ Nueva Clase"}
      </button>

      {/* Formulario */}
      {mostrarFormulario && (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Agregar Nueva Clase
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Título */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Título de la Clase *
              </label>
              <input
                {...register("titulo", { required: "El título es requerido" })}
                type="text"
                placeholder="Ej: Introducción a React"
                className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.titulo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.titulo.message}
                </p>
              )}
            </div>

            {/* URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                URL del Enlace *
              </label>
              <input
                {...register("link", {
                  required: "La URL es requerida",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "Ingresa una URL válida",
                  },
                })}
                type="url"
                placeholder="https://zoom.us/j/123456789"
                className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.link && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.link.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Contraseña de acceso *
              </label>
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <input
                  {...register("password", {
                    required: "La contraseña es requerida",
                    // pattern: {
                    //   value: /^https?:\/\/.+/,
                    //   message: "Ingresa una URL válida",
                    // },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Eye
                  className="text-black cursor-pointer"
                  onClick={() => setShowPass((prev) => !prev)}
                />
              </div>
              {errors.link && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.link.message}
                </p>
              )}
            </div>

            {/* Fecha y Hora */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fecha *
                </label>
                <input
                  {...register("fecha_imparticion", {
                    required: "La fecha es requerida",
                  })}
                  type="date"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                />
                {errors.fecha_imparticion && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fecha_imparticion.message}
                  </p>
                )}
              </div>
            </div>
            {/* Plataforma */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Plataforma *
              </label>
              <select
                {...register("plataforma", {
                  required: "Selecciona una plataforma",
                })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-black"
              >
                <option value="">Seleccionar...</option>
                {plataformas &&
                  plataformas.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.nombre}
                    </option>
                  ))}
              </select>
              {errors.plataforma && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.plataforma.message}
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
                placeholder="Agrega detalles adicionales sobre la clase..."
                className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Botones */}
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {isSubmitting ? "Guardando clase..." : "Guardar clase"}
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
