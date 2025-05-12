"use client";

import { useRetrieveLeadQuery } from "@/redux/crm/crmApiSlice";
import Link from "next/link";
import {
  ArrowLeft,
  Edit,
  User,
  Mail,
  Phone,
  BookOpen,
  BarChart2,
  Clock,
} from "lucide-react";
import LeadStageProgress from "./lead-stage-progress";
import { Etapas } from "@/redux/interface/crm/crm";

interface LeadDetailProps {
  id: string;
}

export default function LeadDetail({ id }: LeadDetailProps) {
  const { data, isLoading } = useRetrieveLeadQuery(parseInt(id));
  // const [selectedEstatus, setSelectedEstatus] = useState(lead?.estatus || "");
  const handleEtapaChange = (etapa: Etapas) => {
    // const newStatus = e.target.value;
    // console.log(etapa);
    // setSelectedEstatus(newStatus);
    // updateLeadStatus(data?.lead?.id, newStatus);
  };
  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Obteniendo lead...</p>
        <Link
          href="/crm/leads?id=6"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Volver a la lista
        </Link>
      </div>
    );
  }
  // console.log(data?.lead);
  return (
    <div className="text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center">
          <Link
            href="/crm/leads?id=6"
            className="mr-4 text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">{data?.lead?.nombre}</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            href={`/leads/edit/`}
            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Edit className="mr-2 h-5 w-5" />
            Editar Lead
          </Link>
        </div>
      </div>
      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna izquierda - Información del lead */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tarjeta de información básica */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Información del Lead</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <User className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Nombre</p>
                  <p className="font-medium">{data?.lead?.nombre}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Correo</p>
                  <p className="font-medium">{data?.lead?.correo}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-medium">
                    {data?.lead?.telefono || "No especificado"}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Programa Educativo</p>
                  <p className="font-medium">
                    {data?.lead?.interesado_en?.nombre}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <BarChart2 className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Fuente</p>
                  <p className="font-medium">
                    {data?.lead?.fuente?.nombre || "No especificada"}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <User className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Vendedor Asignado</p>
                  <p className="font-medium">
                    {data?.lead?.vendedor_asignado?.profile.nombre || ""}{" "}
                    {data?.lead?.vendedor_asignado?.profile.apellidoP || ""}{" "}
                    {data?.lead?.vendedor_asignado?.profile.apellidoM || ""}{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Fecha de Creación</p>
                  <p className="font-medium">
                    {new Date(data?.lead?.fecha_creacion).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* {tiempoRespuesta && (
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Tiempo de Respuesta</p>
                    <p className="font-medium">{tiempoRespuesta}</p>
                  </div>
                </div>
              )} */}
            </div>

            {/* {lead.observaciones && ( */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">Observaciones</p>
              <p className="text-gray-700 whitespace-pre-line">
                {/* {lead.observaciones} */}
              </p>
            </div>
            {/* )} */}
            {/* {lead.pipeline && ( */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg  mb-4">
                <p className="font-bold">Progreso en Pipeline:</p>{" "}
                {data?.pipeline[0]?.nombre}
              </h2>
              <LeadStageProgress
                stages={data?.pipeline[0]?.etapas}
                currentStage={data?.lead?.etapa}
                onStageChange={handleEtapaChange}
              />
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
