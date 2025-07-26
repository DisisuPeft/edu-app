import CalificationPage from "@/app/ui/plataforma/estudiantes/calificaciones/calification-dash";

export default function Page() {
  return (
    <div className="space-y-8 p-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calificaciones</h1>
        <p className="text-gray-600 mt-1">
          Consulta tu rendimiento académico y el desglose por curso.
        </p>
      </div>

      {/* Sección de Estadísticas */}
      <CalificationPage />
    </div>
  );
}
