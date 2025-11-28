import UserName from "../user-name";
import StatComponent from "./stats";
import DiplomasCatalog from "./oferta/oferta-page";

export default function StudentDashboard() {
  return (
    <div className="space-y-8 p-10 mt-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          <UserName title="Bienvenido de nuevo," />
        </h1>
        <p className="text-gray-600 mt-1">
          Aquí tienes un resumen de tus diplomados.
        </p>
      </div>

      {/* Sección de Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatComponent />
      </div>

      {/* Sección Principal de dos columnas */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Continuar Aprendiendo
      </h2>
      <div className="">
        <DiplomasCatalog />
      </div>
    </div>
  );
}
