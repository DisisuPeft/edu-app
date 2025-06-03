import {
  // useGetLeadsQuery,
  useRetrieveRecentLeadsQuery,
  useEstadisticsLeadsQuery,
} from "@/redux/crm/crmApiSlice";
import { Users, Activity, PieChart, BarChart } from "lucide-react";
import Link from "next/link";

export default function DashboardCRM() {
  const { data: recent_leads } = useRetrieveRecentLeadsQuery();
  const { data } = useEstadisticsLeadsQuery();
  // console.log(data);

  return (
    <div className="p-6 md:ml-64">
      {/* <h1 className="text-2xl font-bold mb-6 text-gray-800">Camapana activa: {leads[0]?.camapania?.nombre}</h1> */}

      {/* State overview */}
      {/* Toda estadistica debe volver con counts, no con operaciones complejas del frontend */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4 text-gray-800">
              <Users />
            </div>
            <div>
              <p className="text-sm text-gray-700">Total de leads</p>
              <p className="text-2xl font-semibold text-gray-800">
                {data?.total_leads}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tasa de Conversión</p>
              <p className="text-2xl font-semibold text-gray-800">N/A</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <BarChart className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Leads Nuevos (Hoy)</p>
              <p className="text-2xl font-semibold text-gray-800">N/A</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <PieChart className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tiempo Resp. Promedio</p>
              <p className="text-2xl font-semibold text-gray-800">N/A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow text-gray-800">
          <h2 className="text-lg font-semibold mb-4">Leads por Etapa</h2>
          <div className="space-y-4">
            {data?.total_lead_etapa.map((etapa, index) => {
              // console.log(etapa);
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      {etapa.etapa__nombre}
                    </span>
                    <span className="text-sm text-gray-500">
                      {etapa.total} leads
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(etapa.total / data?.total_leads) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-gray-800">
          <h2 className="text-lg font-semibold mb-4">Leads por Programa</h2>
          <div className="space-y-4">
            {data?.total_lead_programa.map((program, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">
                    {program.interesado_en__nombre}
                  </span>
                  <span className="text-sm text-gray-500">
                    {program.total > 1
                      ? `${program.total} leads`
                      : `${program.total} lead`}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${(program.total / data?.total_leads) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Leads Recientes
          </h2>
          <Link
            href={`/crm/leads?id=${6}`}
            className="text-sm text-blue-600 hover:underline"
          >
            Ver todos
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-gray-800">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Programa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Etapa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estatus
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendedor
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-gray-800">
              {recent_leads?.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {lead.nombre}
                    </div>
                    <div className="text-sm text-gray-500">{lead.correo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead?.interesado_en}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {lead?.etapa}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {lead?.estatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead?.vendedor_asignado}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
/**
 * 
 * 
 * 
 * 
 *     getUsers: builder.query<{ results: User[]; count: number }, { page: number; pageSize: number }>({
      query: ({ page, pageSize }) => `users/?page=${page}&page_size=${pageSize}`,
    }),
 */
