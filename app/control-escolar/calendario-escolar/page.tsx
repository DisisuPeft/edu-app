// import Calender from "@/app/ui/control-escolar/calendario-escolar/calander";
// import CalendarioModule from "@/app/ui/control-escolar/calendario-escolar/calendario";
// import CiclosStatics from "@/app/ui/control-escolar/calendario-escolar/ciclos";
// import { Plus } from "lucide-react";
export default function Page() {
  return (
    <div className="p-6 md:ml-[30px] w-full">
      <div className="space-y-6 text-gray-800">
        {/* <CiclosStatics /> */}
        {/* <Calender /> */}
        {/* Gestión de Ciclos Escolares */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-800">
              Ciclos Escolares
            </h2>
          </div>
          <div className="overflow-x-auto"></div>
        </div>
      </div>
    </div>
  );
}
