"use client";

import { useCreateCiclos } from "@/hooks";
import type React from "react";

export default function CreateCiclosForm() {
  const {
    register,
    handleSubmit,
    // reset,
    estado,
    onSubmit,
    errors,
    watch,
    isSubmitting,
  } = useCreateCiclos();
  const fechaInicio = watch("fecha_inicio");
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Formulario de Registro
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Completa todos los campos requeridos
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre *
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "El nombre es requerido",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "El nombre no puede exceder 50 caracteres",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.name
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Ingresa tu nombre"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Campo Fecha Inicio */}
          <div>
            <label
              htmlFor="fecha_inicio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fecha de Inicio *
            </label>
            <input
              id="fecha_inicio"
              type="date"
              {...register("fecha_inicio", {
                required: "La fecha de inicio es requerida",
              })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.fecha_inicio
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.fecha_inicio && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fecha_inicio.message}
              </p>
            )}
          </div>

          {/* Campo Fecha Fin */}
          <div>
            <label
              htmlFor="fecha_fin"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fecha de Fin *
            </label>
            <input
              id="fecha_fin"
              type="date"
              {...register("fecha_fin", {
                required: "La fecha de fin es requerida",
                validate: (value) => {
                  if (fechaInicio && value <= fechaInicio) {
                    return "La fecha de fin debe ser posterior a la fecha de inicio";
                  }
                  return true;
                },
              })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.fecha_fin
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.fecha_fin && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fecha_fin.message}
              </p>
            )}
          </div>

          {/* Campo Estado */}
          <div>
            <label
              htmlFor="estado"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Estado *
            </label>
            <select
              id="estado"
              {...register("estado", {
                required: "El estado es requerido",
              })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.estado
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }`}
            >
              {estado.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.estado && (
              <p className="mt-1 text-sm text-red-600">
                {errors.estado.message}
              </p>
            )}
          </div>

          {/* Botón de Envío */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </div>
              ) : (
                "Enviar Formulario"
              )}
            </button>
          </div>

          {/* Mensaje de Estado */}
          {/* {submitMessage && (
            <div
              className={`p-4 rounded-md ${
                submitMessage.includes("exitosamente")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              <p className="text-sm font-medium">{submitMessage}</p>
            </div>
          )} */}
        </form>
      </div>
    </div>
  );
}
