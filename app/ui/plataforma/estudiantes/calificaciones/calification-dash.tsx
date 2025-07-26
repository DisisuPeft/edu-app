import { StatCard } from "../stat-card";
import { Star, CheckCircle, BookOpen, Award } from "lucide-react";
import { CalificacionCursoCard } from "./calification-card";

export default function CalificationPage() {
  const calificacionesData = [
    {
      curso: "Desarrollo Web Moderno con React",
      profesor: "Dr. Alan Turing",
      calificacionFinal: 92,
      creditos: 8,
      desglose: [
        {
          nombre: "Tarea 1: Componentes",
          tipo: "Tarea",
          ponderacion: "15%",
          calificacion: 95,
        },
        {
          nombre: "Examen Parcial 1",
          tipo: "Examen",
          ponderacion: "30%",
          calificacion: 88,
        },
        {
          nombre: "Proyecto Final",
          tipo: "Proyecto",
          ponderacion: "40%",
          calificacion: 94,
        },
        {
          nombre: "Participación",
          tipo: "Otros",
          ponderacion: "15%",
          calificacion: 100,
        },
      ],
    },
    {
      curso: "Diseño de Interfaces (UI/UX)",
      profesor: "Dra. Ada Lovelace",
      calificacionFinal: 85,
      creditos: 6,
      desglose: [
        {
          nombre: "Análisis de Competencia",
          tipo: "Investigación",
          ponderacion: "20%",
          calificacion: 90,
        },
        {
          nombre: "Wireframes",
          tipo: "Tarea",
          ponderacion: "30%",
          calificacion: 80,
        },
        {
          nombre: "Prototipo Interactivo",
          tipo: "Proyecto",
          ponderacion: "50%",
          calificacion: 85,
        },
      ],
    },
    {
      curso: "Bases de Datos con SQL y NoSQL",
      profesor: "Dr. Edgar Codd",
      calificacionFinal: 78,
      creditos: 8,
      desglose: [
        {
          nombre: "Modelado ER",
          tipo: "Tarea",
          ponderacion: "25%",
          calificacion: 82,
        },
        {
          nombre: "Examen Parcial 1",
          tipo: "Examen",
          ponderacion: "35%",
          calificacion: 75,
        },
        {
          nombre: "API de Base de Datos",
          tipo: "Proyecto",
          ponderacion: "40%",
          calificacion: 79,
        },
      ],
    },
  ];
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Star className="h-6 w-6" />}
          label="Promedio General"
          value="8.5"
          color="text-yellow-600 bg-yellow-100"
        />
        <StatCard
          icon={<CheckCircle className="h-6 w-6" />}
          label="Créditos Aprobados"
          value="22"
          color="text-green-600 bg-green-100"
        />
        <StatCard
          icon={<BookOpen className="h-6 w-6" />}
          label="Cursos en Progreso"
          value="4"
          color="text-blue-600 bg-blue-100"
        />
        <StatCard
          icon={<Award className="h-6 w-6" />}
          label="Mención Honorífica"
          value="1"
          color="text-purple-600 bg-purple-100"
        />
      </div>
      {/* Lista de Calificaciones por Curso */}
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Desglose por Curso
        </h2>
        <div className="space-y-2">
          {calificacionesData.map((curso) => (
            <CalificacionCursoCard key={curso.curso} {...curso} />
          ))}
        </div>
      </div>
    </div>
  );
}
