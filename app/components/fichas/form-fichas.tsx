"use client";
import { useFichas } from "@/hooks";
import MultiSelect from "@/app/ui/components/select-multiple";
import Select from "@/app/ui/components/select";
import Link from "next/link";
import { Modal } from "../common/Modal";
import { ChangeEvent, useState } from "react";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

export default function FichasForm({ show, setShow }: Props) {
  const [campania, setCampania] = useState<string | undefined>(undefined);
  const onCloseModal = (value: boolean) => {
    setShow(value);
  };
  
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    setValue,
    watch,
    tipoPago,
    metodoPago,
    campanias,
  } = useFichas({ emitCloseModal: onCloseModal, campaniaPrograma: campania });

  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-7xl space-y-8 p-8 border border-gray-100 text-black"
      >
        {/* Identificación */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
              Información de Identificación
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Datos oficiales de identificación
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                CURP
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 uppercase tracking-wide text-sm"
                {...register("curp")}
                maxLength={18}
                placeholder="Ingresa tu CURP"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                {...register("perfil.telefono", { required: true })}
                placeholder="Número de teléfono"
              />
              {errors.perfil?.telefono && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <span className="w-4 h-4 text-red-500">⚠</span>
                  Este campo es requerido
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Perfil */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
              Información Personal
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Datos personales y académicos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                {...register("perfil.nombre", { required: true })}
                placeholder="Tu nombre"
              />
              {errors.perfil?.nombre && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <span className="w-4 h-4 text-red-500">⚠</span>
                  Este campo es requerido
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Apellido Paterno
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                {...register("perfil.apellidoP", { required: true })}
                placeholder="Apellido paterno"
              />
              {errors.perfil?.apellidoP && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <span className="w-4 h-4 text-red-500">⚠</span>
                  Este campo es requerido
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Apellido Materno
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                {...register("perfil.apellidoM", { required: true })}
                placeholder="Apellido materno"
              />
              {errors.perfil?.apellidoM && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <span className="w-4 h-4 text-red-500">⚠</span>
                  Este campo es requerido
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Correo electronico
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              {...register("email", { required: true })}
              placeholder="jhon_doe@ejemplo.com"
              type="email"
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <span className="w-4 h-4 text-red-500">⚠</span>
                Este campo es requerido
              </p>
            )}
          </div>
        </div>
        {/* Campania */}
        <div className="">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-6 bg-green-500 rounded-full"></div>
              Información Académica
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Datos del programa de interes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {campanias && (
              <Select
                label="Diplomado"
                required
                options={campanias}
                valueKey="ID"
                labelKey="nombre"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setCampania(e.target.value)
                }
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 mb-4 space-y-4">
          {/* Toggle para activar precios personalizados */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <label
              htmlFor="tiene_precio_custom"
              className="text-sm font-medium text-foreground"
            >
              ¿Aplicar precio personalizado/promoción?
            </label>
            <input
              id="tiene_precio_custom"
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              {...register("precios.tiene_precio_custom")}
              onChange={(e) => {
                setValue("precios.tiene_precio_custom", e.target.checked);
                if (!e.target.checked) {
                  // Limpiar precios custom si se desactiva
                  setValue(
                    "precios.precios_custom.costo_inscripcion",
                    undefined,
                  );
                  setValue(
                    "precios.precios_custom.costo_mensualidad",
                    undefined,
                  );
                  setValue(
                    "precios.precios_custom.costo_documentacion",
                    undefined,
                  );
                }
              }}
            />
          </div>

          {/* Sección de precios personalizados (solo si está activo) */}
          {watch("precios.tiene_precio_custom") && (
            <div className="border border-blue-300 bg-blue-50 rounded-lg p-4 space-y-3">
              <h5 className="text-lg font-semibold text-blue-800 mb-3">
                Precios Personalizados
              </h5>

              <div>
                <label
                  htmlFor="costo_inscripcion_custom"
                  className="text-sm font-medium text-foreground"
                >
                  Costo Inscripción
                </label>
                <input
                  id="costo_inscripcion_custom"
                  type="number"
                  step="0.01"
                  placeholder="Precio personalizado de inscripción"
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register("precios.precios_custom.costo_inscripcion", {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div>
                <label
                  htmlFor="costo_mensualidad_custom"
                  className="text-sm font-medium text-foreground"
                >
                  Costo Mensualidad
                </label>
                <input
                  id="costo_mensualidad_custom"
                  type="number"
                  step="0.01"
                  placeholder="Precio personalizado de mensualidad"
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register("precios.precios_custom.costo_mensualidad", {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div>
                <label
                  htmlFor="costo_documentacion_custom"
                  className="text-sm font-medium text-foreground"
                >
                  Costo Documentación
                </label>
                <input
                  id="costo_documentacion_custom"
                  type="number"
                  step="0.01"
                  placeholder="Precio personalizado de documentación"
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register("precios.precios_custom.costo_documentacion", {
                    valueAsNumber: true,
                  })}
                />
              </div>

              <div>
                <label
                  htmlFor="razon_precio_custom"
                  className="text-sm font-medium text-foreground"
                >
                  Razón del precio personalizado
                </label>
                <input
                  id="razon_precio_custom"
                  type="text"
                  placeholder="Ej: Promoción verano, Beca 50%, Acuerdo especial"
                  className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register("precios.razon_precio_custom", {
                    required: watch("precios.tiene_precio_custom")
                      ? "Debes especificar la razón del precio personalizado"
                      : false,
                  })}
                />
                {errors?.precios?.razon_precio_custom && (
                  <span className="text-sm text-red-500">
                    {errors.precios.razon_precio_custom.message}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Monto del pago */}
          <div>
            <label
              htmlFor="monto"
              className="text-sm font-medium text-foreground"
            >
              Monto a Pagar
            </label>
            <input
              id="monto"
              type="number"
              step="0.01"
              placeholder="Monto de pago inicial"
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
              {...register("precios.monto", {
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "El monto debe ser mayor o igual a 0",
                },
              })}
            />
            {errors.precios?.monto && (
              <span className="text-sm text-red-500">
                {errors.precios.monto.message}
              </span>
            )}
          </div>

          {/* Conceptos de pago */}
          <div>
            {tipoPago?.results && (
              <MultiSelect
                label="Conceptos a pagar (opcional)"
                error={errors?.precios?.tipo_pago?.message}
                options={tipoPago?.results}
                valueKey="id"
                labelKey="nombre"
                onChange={(value) => setValue("precios.tipo_pago", value)}
              />
            )}
            <p className="text-xs text-gray-500 mt-1">
              Si no seleccionas conceptos, se aplicará distribución automática
            </p>
          </div>

          {/* Método de pago */}
          <div>
            {metodoPago?.results && (
              <Select
                label="Método de pago"
                error={errors?.precios?.metodo_pago?.message}
                options={metodoPago?.results}
                valueKey="id"
                labelKey="nombre"
                {...register("precios.metodo_pago")}
              />
            )}
          </div>

          {/* Notas adicionales */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Notas Adicionales (Opcional)
            </label>
            <textarea
              {...register("precios.notas")}
              rows={3}
              placeholder="Agrega detalles adicionales sobre el pago..."
              className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Resumen visual si hay precios custom */}
          {watch("precios.tiene_precio_custom") && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
              <p className="text-sm font-semibold text-yellow-800 mb-2">
                Resumen de Precios Personalizados:
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                {watch("precios.precios_custom.costo_inscripcion") && (
                  <li>
                    • Inscripción: $
                    {watch("precios.precios_custom.costo_inscripcion")}
                  </li>
                )}
                {watch("precios.precios_custom.costo_mensualidad") && (
                  <li>
                    • Mensualidad: $
                    {watch("precios.precios_custom.costo_mensualidad")}
                  </li>
                )}
                {watch("precios.precios_custom.costo_documentacion") && (
                  <li>
                    • Documentación: $
                    {watch("precios.precios_custom.costo_documentacion")}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        {/* Acciones */}
        <div className="flex items-center justify-end space-x-4 pt-8 border-t border-gray-200">
          <div className="flex gap-4">
            <Link
              href="/plataforma/estudiantes"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
            >
              <span>←</span>
              Cancelar
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Guardando...
                </>
              ) : (
                <>
                  <span>✓</span>
                  Guardar
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
