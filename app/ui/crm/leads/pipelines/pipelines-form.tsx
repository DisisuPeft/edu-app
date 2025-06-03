"use client";

// import { useState, useEffect } from "react";
import {
  // X,
  Plus,
  Trash,
} from "lucide-react";
import { useCreatePipeline } from "@/hooks";
import { Etapas, Pipeline } from "@/redux/interface/crm/crm";
import {
  useGetEmpresaQuery,
  useGetProgramsQuery,
  useGetUnidadesAcademicasQuery,
} from "@/redux/crm/crmApiSlice";

interface PipelineModalProps {
  pipeline?: Pipeline;
}

export default function PipelineForm({ pipeline }: PipelineModalProps) {
  const { data: unidades_academicas } = useGetUnidadesAcademicasQuery();
  const { data: empresa } = useGetEmpresaQuery();
  const { data: programas } = useGetProgramsQuery();
  const {
    formData,
    onChange,
    onSubmit,
    handleMoveEtapa,
    handleRemoveEtapa,
    // setFormData,
    onEtapaChange,
    handleAddEtapa,
    etapa,
    setNewEtapa,
  } = useCreatePipeline(pipeline);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">
            {pipeline ? "Editar Pipeline" : "Crear Nuevo Pipeline"}
          </h2>
        </div>

        <form onSubmit={onSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={onChange}
                className="w-full p-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="programa"
                className="block text-sm font-medium text-gray-700"
              >
                Programa Educativo
                <span className="text-red-500">*</span>
              </label>
              <select
                id="programa"
                name="programa"
                value={formData.programa}
                onChange={onChange}
                className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                //   errors.nivel_educativo ? "border-red-500" : ""
                // }`}
                required
              >
                <option value="">Seleccionar programa</option>
                {programas?.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="nivel_educativo"
                className="block text-sm font-medium text-gray-700"
              >
                Empresa
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={onChange}
                className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                //   errors.nivel_educativo ? "border-red-500" : ""
                // }`}
              >
                <option value="">Seleccionar empresa</option>
                {empresa?.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="unidad_academica"
                className="block text-sm font-medium text-gray-700"
              >
                Institucion academica
                <span className="text-red-500">*</span>
              </label>
              <select
                id="unidad_academica"
                name="unidad_academica"
                value={formData.unidad_academica}
                onChange={onChange}
                className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                //   errors.nivel_educativo ? "border-red-500" : ""
                // }`}
                required
              >
                <option value="">Seleccionar institucion</option>
                {unidades_academicas?.map((ua) => (
                  <option key={ua.id} value={ua.id}>
                    {ua.nombre}
                  </option>
                ))}
              </select>
            </div>
            {/* {pipeline && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Orden <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="orden"
                  value={formData.orden}
                  onChange={onChange}
                  className="w-full p-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )} */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Etapas <span className="text-red-500">*</span>
              </label>

              <div className="mb-4 space-y-2">
                {formData.etapas.map((etapa: Etapas, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      name="etapa.nombre"
                      value={etapa.nombre}
                      onChange={(e) => onEtapaChange(index, e.target.value)}
                      className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="flex ml-2">
                      <button
                        type="button"
                        onClick={() => handleMoveEtapa(index, "up")}
                        disabled={index === 0}
                        className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveEtapa(index, "down")}
                        disabled={index === formData.etapas.length - 1}
                        className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30"
                      >
                        ↓
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveEtapa(index)}
                        className="p-1 text-red-500 hover:text-red-700"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex">
                <input
                  type="text"
                  value={etapa}
                  onChange={(e) => setNewEtapa(e.target.value)}
                  placeholder="Nueva etapa"
                  className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleAddEtapa}
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            {/* <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button> */}
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-blue-600"
            >
              {pipeline ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
