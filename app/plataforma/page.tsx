import UserName from "../ui/plataforma/user-name";
import { CursoWrapper } from "../ui/plataforma/estudiantes/cursos/curso-card";
import StatComponent from "../ui/plataforma/estudiantes/stats";

export default function Page() {
  return (
    <div className="space-y-8 p-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          <UserName title="Bienvenido de nuevo," />
        </h1>
        <p className="text-gray-600 mt-1">
          Aquí tienes un resumen de tu actividad reciente.
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
      <div className="flex flex-col">
        <CursoWrapper />
      </div>
    </div>
  );
}
