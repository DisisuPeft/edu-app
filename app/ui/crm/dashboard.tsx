import { useGetLeadsQuery } from "@/redux/crm/crmApiSlice";
import { Users, Activity, PieChart, BarChart } from "lucide-react";


export default function DashboardCRM(){
    const {data:leads, isLoading} = useGetLeadsQuery()
    const total_leads = leads?.length
    // const leads_por_estapas = leads?.reduce((acc, lead) => {
    //     // console.log(lead.etapa?.nombre)
    //     acc[lead?.etapa.nombre] = (acc[lead?.estapa?.nombre] || 0) + 1
    //     // console.log(lead)
    //     return acc
    // },
    // {} as Record<string, number>
    // )
    const leadsByStage = leads?.reduce(
        (acc, lead) => {
          const etapa = lead?.etapa?.nombre?.trim();
          if (etapa) {
            acc[etapa] = (acc[etapa] || 0) + 1;
          }
          return acc;
        },
        {} as Record<string, number>,
    );
    // console.log(leadsByStage)
    return (
        <div className="p-6 md:ml-64">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Inicio</h1>

            {/* State overview */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 mr-4 text-gray-800">
                            <Users/>
                        </div>
                        <div>
                            <p className="text-sm text-gray-700">Total de leads</p>
                            <p className="text-2xl font-semibold text-gray-800">{total_leads}</p>
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
                        {Object?.entries(leadsByStage)?.map(([stage, count]) => (
                        <div key={stage}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">{stage}</span>
                                <span className="text-sm text-gray-500">{count} leads</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${(count / total_leads) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}