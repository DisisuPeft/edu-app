import { BookOpen, CheckCircle, Star, Clock } from "lucide-react";
// import { CursoCard } from "../ui/plataforma/estudiantes/cursos/curso-card";
import { ActividadCard } from "../ui/plataforma/estudiantes/actividad-card";
import { StatCard } from "../ui/plataforma/estudiantes/stat-card";
import UserName from "../ui/plataforma/user-name";
import { CursoWrapper } from "../ui/plataforma/estudiantes/cursos/curso-card";
export default function Page() {
  const cursosRecientes = [
    {
      id: 1,
      title: "Desarrollo Web Moderno con React",
      description:
        "Aprende a construir aplicaciones web interactivas desde cero.",
      progress: 75,
    },
    {
      id: 2,
      title: "Diseño de Interfaces (UI/UX)",
      description:
        "Principios fundamentales del diseño centrado en el usuario.",
      progress: 40,
    },
  ];

  const actividadesProximas = [
    {
      id: 1,
      title: "Entrega Proyecto Final",
      course: "Desarrollo Web Moderno con React",
      dueDate: "Vence en 3 días",
    },
    {
      id: 2,
      title: "Examen Parcial 2",
      course: "Bases de Datos con SQL y NoSQL",
      dueDate: "Vence en 5 días",
    },
    {
      id: 3,
      title: "Presentación de Wireframes",
      course: "Diseño de Interfaces (UI/UX)",
      dueDate: "Vence el 28 de Julio",
    },
  ];

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
        <StatCard
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
        />
      </div>

      {/* Sección Principal de dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Continuar Aprendiendo */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Continuar Aprendiendo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CursoWrapper />
          </div>
        </div>

        {/* Columna Derecha: Actividades Próximas */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Actividades Próximas
          </h2>
          <div className="space-y-4">
            {actividadesProximas.map((actividad) => (
              <ActividadCard
                key={actividad.id}
                title={actividad.title}
                course={actividad.course}
                dueDate={actividad.dueDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
