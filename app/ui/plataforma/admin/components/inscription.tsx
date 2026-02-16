"use client";

// import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { DataTable } from "@/app/utils/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/ui/Button";
import { useState } from "react";
// import { Modal } from "@/app/components/common/Modal";
import { Diplomados } from "@/redux/control-escolar/programas-educativos/types";
import { useInscripcionPrograma } from "@/hooks";
import Select from "@/app/ui/components/select";
import SelectMultiple from "@/app/ui/components/select-multiple";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";

// import { PagoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";

export default function CourseEnrollment({
  estudiante_id,
  estudiante,
}: {
  estudiante_id: string;
  estudiante?: EstudianteForm;
}) {
  const [cp, setCP] = useState<number | null>(null);
  const {
    // isMorePages,
    handleSubmit,
    diplomados,
    onSubmit,
    register,
    errors,
    tipoPago,
    watch,
    metodoPago,
    setValue,
    // onSuccess,
  } = useInscripcionPrograma(estudiante_id, cp);
  // const [page, setPage] = useState<number | null>();
  const [show, setShow] = useState<boolean | null>();
  const [mostrarDiplomados, setMostrarDiplomados] = useState<boolean>(false);
  // const [tipo, setTipo] = useState<Tipo>();
  // const [idRaw, setIdRaw] = useState<number>();
  // const [diplomadoName, setName] = useState<string | null>();
  // console.log(errors);
  const handleOpenModal = (campania_programa: number) => {
    // console.log(name, campania_programa);
    // setName(name);
    setCP(campania_programa);
    setShow(true);
  };
  // const close = (value: boolean) => {
  //   setShow(value);
  // };
  // useEffect(() => {
  //   if (!show) {
  //     // reset();
  //   }
  // }, [reset, show]);
  const headers: ColumnDef<Diplomados>[] = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      id: "acciones",
      header: "Acciones",
      cell: ({ row }) => {
        // const id = row?.original?.id;
        // const inscrito = row?.original?.inscrito;
        // const nombre = row?.original?.nombre;
        const campaniaPrograma = row?.original.campania_programa;
        // console.log(campaniaPrograma);
        return (
          <div className="flex flex-row gap-4 p-2">
            <div>
              <div>
                <Button
                  disabled={!estudiante_id}
                  onClick={() => handleOpenModal(campaniaPrograma)}
                >
                  Inscribir
                </Button>
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="">
      <div className="space-y-4 mb-12">
        <h3 className="text-lg font-semibold text-gray-900">
          Programas Inscritos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {estudiante.inscripcion.map((inscripcion, index) => (
            <div
              key={inscripcion.id || index}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {inscripcion.campania_programa_r.programa}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {/* {inscripcion.campania_programa_r.tipo || "Diplomado"} */}
                  </p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Activo
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Fecha inicio:</span>
                  <span className="font-medium">
                    {new Date(
                      inscripcion.fecha_inscripcion,
                    ).toLocaleDateString()}
                  </span>
                </div>
                {/* {inscripcion.campania_programa_r.duracion && (
                  <div className="flex justify-between">
                    <span>Duración:</span>
                    <span className="font-medium">
                      {inscripcion.campania_programa_r.duracion}
                    </span>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>

        {estudiante.inscripcion.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay programas inscritos
          </div>
        )}
      </div>
      {show && (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
          <div className="mx-4 bg-white shadow-xl p-4 text-center text-black">
            <h4 className="text-2xl font-semibold p-4">
              <span className="font-medium">Inscripción</span>
            </h4>

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
                  {...register("tiene_precio_custom")}
                  onChange={(e) => {
                    setValue("tiene_precio_custom", e.target.checked);
                    if (!e.target.checked) {
                      // Limpiar precios custom si se desactiva
                      setValue("precios_custom.costo_inscripcion", undefined);
                      setValue("precios_custom.costo_mensualidad", undefined);
                      setValue("precios_custom.costo_documentacion", undefined);
                    }
                  }}
                />
              </div>

              {/* Sección de precios personalizados (solo si está activo) */}
              {watch("tiene_precio_custom") && (
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
                      {...register("precios_custom.costo_inscripcion", {
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
                      {...register("precios_custom.costo_mensualidad", {
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
                      {...register("precios_custom.costo_documentacion", {
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
                      {...register("razon_precio_custom", {
                        required: watch("tiene_precio_custom")
                          ? "Debes especificar la razón del precio personalizado"
                          : false,
                      })}
                    />
                    {errors.razon_precio_custom && (
                      <span className="text-sm text-red-500">
                        {errors.razon_precio_custom.message}
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
                  {...register("monto", {
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "El monto debe ser mayor o igual a 0",
                    },
                  })}
                />
                {errors.monto && (
                  <span className="text-sm text-red-500">
                    {errors.monto.message}
                  </span>
                )}
              </div>

              {/* Conceptos de pago */}
              <div>
                {tipoPago?.results && (
                  <SelectMultiple
                    label="Conceptos a pagar (opcional)"
                    error={errors?.tipo_pago?.message}
                    options={tipoPago?.results}
                    valueKey="id"
                    labelKey="nombre"
                    onChange={(value) => setValue("tipo_pago", value)}
                  />
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Si no seleccionas conceptos, se aplicará distribución
                  automática
                </p>
              </div>

              {/* Método de pago */}
              <div>
                {metodoPago?.results && (
                  <Select
                    label="Método de pago"
                    error={errors?.metodo_pago?.message}
                    options={metodoPago?.results}
                    valueKey="id"
                    labelKey="nombre"
                    {...register("metodo_pago")}
                  />
                )}
              </div>

              {/* Notas adicionales */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Notas Adicionales (Opcional)
                </label>
                <textarea
                  {...register("notas")}
                  rows={3}
                  placeholder="Agrega detalles adicionales sobre el pago..."
                  className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Resumen visual si hay precios custom */}
              {watch("tiene_precio_custom") && (
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <p className="text-sm font-semibold text-yellow-800 mb-2">
                    Resumen de Precios Personalizados:
                  </p>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {watch("precios_custom.costo_inscripcion") && (
                      <li>
                        • Inscripción: $
                        {watch("precios_custom.costo_inscripcion")}
                      </li>
                    )}
                    {watch("precios_custom.costo_mensualidad") && (
                      <li>
                        • Mensualidad: $
                        {watch("precios_custom.costo_mensualidad")}
                      </li>
                    )}
                    {watch("precios_custom.costo_documentacion") && (
                      <li>
                        • Documentación: $
                        {watch("precios_custom.costo_documentacion")}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-center md:justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancelar
              </button>

              <Button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Inscribir
              </Button>
            </div>
          </div>
        </form>
      )}
      <>
        <Button onClick={() => setMostrarDiplomados((prev) => !prev)}>
          Inscribir a otro programa
        </Button>
      </>
      {mostrarDiplomados && (
        <>
          {diplomados ? (
            <div className="mt-5">
              <DataTable data={diplomados} columns={headers} />
              <div className="flex justify-end gap-4 mt-4 p-4">
                {/* <button
              className="rounded-full"
              onClick={() => setPage(Math.max(page - 1, 1))}
            >
              <ChevronLeftCircle className="text-black" />
            </button>

            <button onClick={() => setPage(page + 1)} disabled={isMorePages}>
              <ChevronRightCircle className="text-black" />
            </button> */}
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <div className="text-black">No data found</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
