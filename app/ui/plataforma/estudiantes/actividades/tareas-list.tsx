import { TareaCard } from "./tarea-card";

// Datos simulados para las tareas
const tareasPorCurso = [
  {
    curso: "Desarrollo Web Moderno con React",
    tareas: [
      {
        id: 1,
        title: "Entrega Proyecto Final",
        type: "Proyecto",
        dueDate: "2025-07-21",
        status: "Pendiente",
      },
      {
        id: 2,
        title: "Cuestionario Módulo 5",
        type: "Examen",
        dueDate: "2025-07-15",
        status: "Completada",
      },
    ],
  },
  {
    curso: "Diseño de Interfaces (UI/UX)",
    tareas: [
      {
        id: 3,
        title: "Presentación de Wireframes",
        type: "Tarea",
        dueDate: "2025-07-28",
        status: "Pendiente",
      },
      {
        id: 4,
        title: "Análisis de Competencia",
        type: "Investigación",
        dueDate: "2025-07-10",
        status: "Vencida",
      },
    ],
  },
  {
    curso: "Bases de Datos con SQL y NoSQL",
    tareas: [
      {
        id: 5,
        title: "Examen Parcial 2",
        type: "Examen",
        dueDate: "2025-07-23",
        status: "Pendiente",
      },
    ],
  },
];

export default function TareasList() {
  return (
    <div className="">
      {/* Filtros */}
      <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm">
          Todas
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md hover:bg-gray-100">
          Pendientes
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md hover:bg-gray-100">
          Completadas
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md hover:bg-gray-100">
          Vencidas
        </button>
      </div>

      {/* Lista de Actividades por Curso */}
      <div className="space-y-8">
        {tareasPorCurso.map(({ curso, tareas }) => (
          <section key={curso}>
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500 inline-block">
              {curso}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6">
              {tareas.map((tarea) => (
                <TareaCard
                  key={tarea.id}
                  title={tarea.title}
                  type={tarea.type}
                  dueDate={new Date(tarea.dueDate)}
                  status={
                    tarea.status as "Pendiente" | "Completada" | "Vencida"
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
