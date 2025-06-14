import ProgramCatalog from "@/app/ui/control-escolar/programas/program-catalogs";
import StaticsPrograms from "@/app/ui/control-escolar/programas/statics-programs";
import { Plus, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 md:ml-[30px] w-full">
      <div className="flex flex-row">
        <BookOpen className="h-6 w-6 mr-2 text-gray-700 mt-1" />
        <h1 className="text-2xl font-bold mb-6 text-gray-800 ml-4">
          Programas educativos
        </h1>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-gray-800">
          <div className="flex items-center">
            {/* <h1 className="text-2xl font-bold text-gray-800">
              Programas Educativos
            </h1> */}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar programa..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div> */}
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Programa
            </Link>
          </div>
        </div>
        <StaticsPrograms />
        <ProgramCatalog />
      </div>
    </div>
  );
}
