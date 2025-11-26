"use client";

import { useState, useEffect } from "react";
import {
  // Inscripciones,
  Pago,
} from "@/redux/interface/control_escolar/types/pagos";
import { formatCurrency } from "@/lib/datesFormat";
import { Modal } from "@/app/components/common/Modal";
import Input from "../../components/input";
import { useApplyPagoMutation } from "@/redux/control-escolar/pagos/pagosApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";

interface Props {
  pagos: Pago[];
  ins: number;
  refetch?: () => void;
}

// Datos de ejemplo simulando pagos disponibles

export default function ApplyPagos({ pagos, ins, refetch }: Props) {
  // funcion para aplicar pago
  const [applyPago] = useApplyPagoMutation();
  const dispatch = useAppDispatch();
  // Estado: lista de pagos pendientes
  const [pendientes, setPendientes] = useState<Pago[]>([]);

  // Estado: lista de pagos seleccionados para pagar
  const [porPagar, setPorPagar] = useState<Pago[]>([]);

  const [show, setShow] = useState(false);

  const moverAPorPagar = (pago: Pago) => {
    setPendientes((prev) => prev.filter((p) => p.id !== pago.id));
    setPorPagar((prev) => [...prev, pago]);
  };

  // LÓGICA DE SELECCIÓN: Remover un pago de Por Pagar y devolverlo a Pendientes
  const removerDePorPagar = (pago: Pago) => {
    setPorPagar((prev) => prev.filter((p) => p.id !== pago.id));
    setPendientes((prev) => [...prev, pago]);
  };

  // Calcular el total de los pagos seleccionados
  const calcularTotal = (): number => {
    // console.log("porPagar", porPagar);
    // return 0;
    return porPagar.reduce((sum, pago) => sum + Number(pago.monto), 0);
  };

  // LÓGICA DE APLICAR PAGO: Simula el envío de pagos
  // Aquí es donde engancharías la llamada real al API
  const aplicarPago = () => {
    setShow(true);

    // console.log("Datos de pago a enviar:", porPagar);
  };

  const onSubmit = () => {
    applyPago({ formData: porPagar, ins: ins })
      .unwrap()
      .then((response) => {
        setShow(false);
        dispatch(
          dispatch(setAlert({ message: response.message, type: "success" }))
        );
        refetch();
      })
      .catch((error) => {
        const errorMessgue = error.data?.message ?? "Error al aplicar pago";
        dispatch(setAlert({ message: errorMessgue, type: "error" }));
      });
  };

  const total = calcularTotal();

  useEffect(() => {
    if (pagos.length > 0 && pagos) {
      // console.log("pagos esta cargado");
      setPendientes(pagos);
      // console.log(pendientes);
    }
  }, [pagos]);

  return (
    <main className="bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Notificación de éxito */}
        {/* {notificacion && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-sm">
            <p className="font-medium">{notificacion}</p>
          </div>
        )} */}

        {/* Contenedor principal con dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recuadro 1: Pagos Pendientes */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Pagos Pendientes
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({pendientes.length})
              </span>
            </h2>

            {pendientes.length === 0 ? (
              <p className="text-gray-500 italic">No hay pagos pendientes</p>
            ) : (
              <ul className="space-y-3 overflow-y-auto h-[300px]" role="list">
                {pendientes.map((pago) => {
                  // console.log(pago);
                  return (
                    <li
                      key={pago.id}
                      className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {pago.periodo ?? pago.tipo_pago_r}
                        </p>
                        <p className="text-lg font-semibold text-primary mt-1">
                          {formatCurrency(Number(pago.monto))}
                        </p>
                      </div>
                      <button
                        onClick={() => moverAPorPagar(pago)}
                        aria-label={`Pagar ${pago.periodo ?? pago.tipo_pago_r}`}
                        className={`ml-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
                      >
                        Pagar
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          {/* Recuadro 2: Por Pagar */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Por Pagar
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({porPagar.length})
              </span>
            </h2>

            {porPagar.length === 0 ? (
              <p className="text-gray-500 italic">No has seleccionado pagos</p>
            ) : (
              <>
                <ul
                  className="space-y-3 mb-6 overflow-y-auto h-[300px]"
                  role="list"
                >
                  {porPagar.map((pago) => (
                    <li
                      key={pago.id}
                      className="flex items-start justify-between p-4 border border-gray-200 rounded-lg bg-blue-50"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {pago.periodo ?? pago.tipo_pago_r}
                        </p>
                        <p className="text-lg font-semibold text-primary mt-1">
                          {formatCurrency(Number(pago.monto))}
                        </p>
                      </div>
                      <button
                        onClick={() => removerDePorPagar(pago)}
                        aria-label={`Remover ${
                          pago.periodo ?? pago.tipo_pago_r
                        }`}
                        className="ml-4 px-3 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Resumen de pago */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-700">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(total)}
                    </span>
                  </div>

                  <button
                    onClick={aplicarPago}
                    disabled={porPagar.length === 0}
                    aria-label="Aplicar pago"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      porPagar.length === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/80 focus:ring-primary/80"
                    }`}
                  >
                    Aplicar Pago
                  </button>
                </div>
              </>
            )}
          </section>
          <Modal show={show} onClose={() => setShow(false)}>
            <div>
              {porPagar.map((pago) => (
                <div className="p-2" key={pago.id}>
                  <Input
                    label="Referencia de pago"
                    value={pago.referencia}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newPorPagar = porPagar.map((p) =>
                        p.id === pago.id
                          ? { ...p, referencia: e.target.value }
                          : p
                      );
                      setPorPagar(newPorPagar);
                    }}
                  />
                </div>
              ))}
              <button
                onClick={onSubmit}
                disabled={porPagar.length === 0}
                aria-label="Aplicar pago"
                className={`mt-2 w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  porPagar.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/80 focus:ring-primary/80"
                }`}
              >
                Aplicar Pago
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </main>
  );
}
