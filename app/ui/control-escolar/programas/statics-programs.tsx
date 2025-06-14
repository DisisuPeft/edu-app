import { Download } from "lucide-react";

export default function StaticsPrograms() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">Total Programas</h3>
          <span className="text-2xl font-bold text-blue-600">24</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            Licenciatura: 12
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            Maestría: 8
          </span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
            Doctorado: 4
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">
            Alumnos Inscritos
          </h3>
          <span className="text-2xl font-bold text-green-600">1,245</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-600 rounded-full"
            style={{ width: "78%" }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">78% de capacidad total</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">
            Programas Activos
          </h3>
          <span className="text-2xl font-bold text-blue-600">20</span>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            <Download className="h-4 w-4 mr-1" />
            Descargar Catálogo
          </button>
        </div>
      </div>
    </div>
  );
}
