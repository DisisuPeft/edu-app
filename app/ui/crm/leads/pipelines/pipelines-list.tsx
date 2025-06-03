"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash } from "lucide-react";
import { useGetPipelinesQuery } from "@/redux/crm/crmApiSlice";
import { Etapas, Pipeline } from "@/redux/interface/crm/crm";
import { Modal } from "@/app/components/common/Modal";
import PipelineForm from "./pipelines-form";

export default function PipelinesList() {
  const { data: pipelines } = useGetPipelinesQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [currentPipeline, setCurrentPipeline] = useState<Pipeline>();
  // console.log(pipelines);
  const handleEdit = (pipeline: Pipeline) => {
    setCurrentPipeline(pipeline);
    setOpen(true);
  };
  const handleClose = () => {
    // console.log(e);
    setCurrentPipeline(undefined);
    setOpen(false);
  };
  return (
    <div className="text-gray-800">
      {/* Barra de acciones */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Buscar pipelines..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="mr-2 h-5 w-5" />
          Nuevo Pipeline
        </button>
      </div>

      {/* Lista de pipelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pipelines?.map((pipeline) => (
          <div
            key={pipeline.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{pipeline.nombre}</h3>
              {/* <p className="text-gray-500 mb-4 line-clamp-2">
                {pipeline?.descripcion}
              </p> */}

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Etapas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pipeline?.etapas?.map((etapa: Etapas, index: number) => (
                    <div key={index}>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {index + 1}. {etapa.nombre}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(pipeline)}
                  className="p-2 text-indigo-600 hover:text-indigo-900"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  // onClick={() => handleDelete(pipeline.id)}
                  className="p-2 text-red-600 hover:text-red-900"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="flex items-center justify-between">
                {/* {pipeline?.etapas?.map((etapa: string, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                    style={{ width: `${100 / pipeline?.etapas?.length}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mb-2">
                      {index + 1}
                    </div>
                    <span className="text-xs text-center">{etapa}</span>

                    {index < pipeline?.etapas?.length - 1 && (
                      <div
                        className="absolute top-4 h-0.5 bg-blue-300 left-1/2 right-0 -translate-y-1/2"
                        style={{ width: "100%" }}
                      ></div>
                    )}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!pipelines && (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-500">
            No se encontraron pipelines disponibles.
          </p>
        </div>
      )}

      {/* Modal de creación/edición */}
      {open && (
        <Modal show={open} onClose={(e) => handleClose(e)}>
          <div className="text-gray-800">
            <PipelineForm pipeline={currentPipeline} />
          </div>
        </Modal>
      )}
    </div>
  );
}
