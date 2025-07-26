"use client";
import { CalendarDays, Plus } from "lucide-react";
import {
  useGetCiclosForQueryQuery,
  useGetCicloQuery,
} from "@/redux/control-escolar/calendario/calendarioApiSlice";
import { ChangeEvent, useEffect, useState } from "react";
import {
  finishInitialLoad,
  setCiclosForQuery,
  setError,
} from "@/redux/control-escolar/calendario/calendarioSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { Alert } from "@/alerts/toast";
import { Modal } from "@/app/components/common/Modal";
import CreateCiclosForm from "./forms/ciclos-form";
import useQueryCiclos from "@/hooks/ciclos/use-query-ciclos";

export default function CiclosStatics() {
  const dispatch = useAppDispatch();
  const { errorMessage, ciclos, ciclo } = useAppSelector(
    (state) => state.calendario
  );
  const {
    data: res_ciclos,
    error,
    isLoading: loaded,
    isSuccess: succes,
  } = useGetCiclosForQueryQuery();
  const { onChange } = useQueryCiclos();
  const [open, setOpen] = useState<boolean>(false);
  const [tipo, setTipo] = useState<string>("");
  useEffect(() => {
    if (loaded) {
      dispatch(finishInitialLoad());
    }
    if (succes && res_ciclos) {
      dispatch(setCiclosForQuery(res_ciclos));
    }
    if (error && "status" in error) {
      //   console.log(error);
      if (error.status === 404) {
        dispatch(setError("No se han definido ciclos"));
      }
    }
  }, [res_ciclos, error, succes, loaded]);

  const handleOpen = (type: string) => {
    setTipo(type);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTipo("");
  };
  // console.log(ciclo);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <CalendarDays className="h-6 w-6 mr-2 text-gray-700" />
          <h1 className="text-2xl font-bold text-gray-800">
            Calendario Escolar
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {res_ciclos && (
            <select
              name="ciclo"
              onChange={onChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Seleccionar ciclo</option>
              {res_ciclos?.map((ciclo) => (
                <option key={ciclo.id} value={ciclo.id}>
                  {ciclo.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={() => handleOpen("periodo")}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nuevo periodo
          </button>
          <button
            onClick={() => handleOpen("ciclo")}
            className="mt-2 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Ciclo
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        {/* Información del Ciclo Actual */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Ciclo Actual
          </h3>
          {ciclo ? (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium">{ciclo?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Periodo</p>
                <p className="font-medium">
                  {ciclo?.fecha_inicio?.split("-").reverse().join("/")} -{" "}
                  {ciclo?.fecha_fin?.split("-").reverse().join("/")}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estado</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ciclo?.estado === 0
                      ? "bg-gray-600 text-gray-400"
                      : ciclo?.estado === 1
                      ? "bg-green-100 text-green-800"
                      : ciclo?.estado === 2
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {ciclo?.estado === 0
                    ? "Por iniciar"
                    : ciclo?.estado === 1
                    ? "Activo"
                    : ciclo?.estado === 2
                    ? "Finalizado"
                    : "N/A"}
                </span>
              </div>
            </div>
          ) : (
            <div>{errorMessage}</div>
          )}
        </div>

        {/* Estadísticas */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Estadísticas
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Periodos Activos</span>
              {/* <span className="font-medium text-green-600">2</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                Periodos Programados
              </span>
              {/* <span className="font-medium text-blue-600">3</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Días Hábiles</span>
              {/* <span className="font-medium text-gray-800">180</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Días de Vacaciones</span>
              {/* <span className="font-medium text-gray-800">45</span> */}
            </div>
          </div>
        </div>

        {/* Próximos Eventos */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Próximos Eventos
          </h3>
          <div className="space-y-3">
            {/* {eventosImportantes.slice(0, 4).map((evento, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    evento.tipo === "inicio"
                      ? "bg-green-500"
                      : evento.tipo === "fin"
                      ? "bg-red-500"
                      : evento.tipo === "vacacion"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {evento.evento}
                  </p>
                  <p className="text-xs text-gray-500">{evento.fecha}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <Modal show={open} onClose={() => handleClose()}>
        <div className="text-black">
          {" "}
          {tipo === "ciclo" ? (
            <CreateCiclosForm />
          ) : (
            // <div>Formulario de Holka</div>
            // <CreateCiclosForm />
            <div>Formulario de {tipo}</div>
          )}
        </div>
      </Modal>
    </div>
  );
}
