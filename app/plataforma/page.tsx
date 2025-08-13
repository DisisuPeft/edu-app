import { BookOpen } from "lucide-react";
import { StatCard } from "../ui/plataforma/estudiantes/stat-card";
import UserName from "../ui/plataforma/user-name";
import { CursoWrapper } from "../ui/plataforma/estudiantes/cursos/curso-card";
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
        <StatCard
          icon={<BookOpen className="h-6 w-6" />}
          label="Cursos Activos"
          value="4"
          color="text-blue-600 bg-blue-100"
        />
        {/* <StatCard
          icon={<CheckCircle className="h-6 w-6" />}
          label="Cursos Completados"
          value="8"
          color="text-green-600 bg-green-100"
        />
        <StatCard
          icon={<Star className="h-6 w-6" />}
          label="Promedio General"
          value="9.2"
          color="text-yellow-600 bg-yellow-100"
        />
        <StatCard
          icon={<Clock className="h-6 w-6" />}
          label="Horas de Estudio"
          value="120"
          color="text-purple-600 bg-purple-100"
        /> */}
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
