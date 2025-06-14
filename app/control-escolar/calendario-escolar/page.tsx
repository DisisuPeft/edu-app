import CalendarioModule from "@/app/ui/control-escolar/calendario-escolar/calendario";
import CiclosStatics from "@/app/ui/control-escolar/calendario-escolar/ciclos";
import { CalendarDays, Plus } from "lucide-react";
export default function Page() {
  return (
    <div className="p-6 md:ml-[30px] w-full">
      <div className="space-y-6 text-gray-800">
        <CiclosStatics />

        {/* Gestión de Ciclos Escolares */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-800">
              Ciclos Escolares
            </h2>
            <button className="mt-2 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Ciclo
            </button>
          </div>
          <div className="overflow-x-auto"></div>
        </div>
      </div>
    </div>
  );
}
