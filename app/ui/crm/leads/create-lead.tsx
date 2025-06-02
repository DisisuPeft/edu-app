"use client";

import { useCreateLead } from "@/hooks";
import type React from "react";

import { useState } from "react";
import {
  useGetEstatusQuery,
  useGetFuentesQuery,
  useGetProgramsQuery,
  useGetPipelinesQuery,
  useRetrieveVendedorQuery,
  useGetEmpresaQuery,
  useGetUnidadesAcademicasQuery,
} from "@/redux/crm/crmApiSlice";

export default function CreateLeadPage() {
  const { formData, onChange, onSubmit, etapas } = useCreateLead();
  const { data: programas } = useGetProgramsQuery();
  const { data: estatus } = useGetEstatusQuery();
  const { data: pipelines } = useGetPipelinesQuery();
  const { data: fuentes } = useGetFuentesQuery();
  const { data: vendedores } = useRetrieveVendedorQuery();
  const { data: empresa } = useGetEmpresaQuery();
  const { data: unidades_academicas } = useGetUnidadesAcademicasQuery();
  return (
    <div className="bg-gray-50 py-8 px-4 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Crear Nuevo Lead
          </h1>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* ID Field */}
            {/* <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none"
              />
            </div> */}

            {/* Nombre Field */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Ingresa el nombre completo"
              />
            </div>

            {/* Correo Field */}
            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="ejemplo@correo.com"
              />
            </div>

            {/* Teléfono Field */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="+52 55 1234 5678"
              />
            </div>

            {/* Grid para los selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interesado en */}
              <div>
                <label
                  htmlFor="interesado_en_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Interesado en
                </label>
                <select
                  id="interesado_en_id"
                  name="interesado_en_id"
                  value={formData.interesado_en_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {programas?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Estatus */}
              <div>
                <label
                  htmlFor="estatus_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Estatus
                </label>
                <select
                  id="estatus_id"
                  name="estatus_id"
                  value={formData.estatus_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {estatus?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pipeline */}
              <div>
                <label
                  htmlFor="pipeline_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pipelina
                </label>
                <select
                  id="pipeline_id"
                  name="pipeline_id"
                  value={formData.pipeline_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {pipelines?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>
              {/* Etapas */}
              <div>
                <label
                  htmlFor="pipeline_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Etapas
                </label>
                <select
                  id="etapa_id"
                  name="etapa_id"
                  value={formData.etapa_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {etapas?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fuente */}
              <div>
                <label
                  htmlFor="fuente_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Fuente
                </label>
                <select
                  id="fuente_id"
                  name="fuente_id"
                  value={formData.fuente_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {fuentes?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vendedor Asignado */}
              <div>
                <label
                  htmlFor="vendedor_asignado_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Vendedor Asignado
                </label>
                <select
                  id="vendedor_asignado_id"
                  name="vendedor_asignado_id"
                  value={formData.vendedor_asignado_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {vendedores?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.perfil.nombre_completo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <select
                  id="empresa_id"
                  name="empresa_id"
                  value={formData.empresa_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {empresa?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Institución */}
              <div>
                <label
                  htmlFor="institucion_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Institución
                </label>
                <select
                  id="institucion_id"
                  name="institucion_id"
                  value={formData.institucion_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="0">Seleccionar...</option>
                  {unidades_academicas?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campaña */}
              <div>
                <label
                  htmlFor="campania_id"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Campaña
                </label>
                <select
                  id="campania_id"
                  name="campania_id"
                  value={formData.campania_id}
                  onChange={onChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="">Seleccionar...</option>
                  <option value="1">Campaña Q1 2024</option>
                  <option value="2">Lanzamiento Producto</option>
                  <option value="3">Black Friday</option>
                  <option value="4">Webinar Series</option>
                  <option value="5">Feria Tecnológica</option>
                </select>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Crear Lead
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
