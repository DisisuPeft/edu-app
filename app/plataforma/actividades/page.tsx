import TareasList from "@/app/ui/plataforma/estudiantes/actividades/tareas-list";

export default function Page() {
  return (
    <div className="space-y-8 p-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Actividades</h1>
        <p className="text-gray-600 mt-1">
          Aquí puedes ver todas tus tareas, exámenes y proyectos.
        </p>
      </div>
      <TareasList />
      {/* Filtros */}
      {/* <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm">Todas</button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md hover:bg-gray-100">
          Pendientes
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md hover:bg-gray-100">
          Completadas
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white rounded-md hover:bg-gray-100">
          Vencidas
        </button>
      </div> */}

      {/* Lista de Actividades por Curso */}
      {/* <div className="space-y-8">
        {tareasPorCurso.map(({ curso, tareas }) => (
          <section key={curso}>
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500 inline-block">
              {curso}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tareas.map((tarea) => (
                <TareaCard
                  key={tarea.id}
                  title={tarea.title}
                  type={tarea.type}
                  dueDate={new Date(tarea.dueDate)}
                  status={tarea.status as "Pendiente" | "Completada" | "Vencida"}
                />
              ))}
            </div>
          </section>
        ))}
      </div> */}
    </div>
  );
}
