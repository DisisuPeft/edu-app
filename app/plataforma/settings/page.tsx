import { UserTable } from "@/app/components/admin/user-table";

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Panel de Administración
        </h1>
        <p className="text-gray-600 mt-1">
          Gestiona usuarios y supervisa la actividad del sistema.
        </p>
      </div>

      {/* Estadísticas del Sistema */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>

      {/* Tabla de Usuarios */}
      <UserTable />
    </div>
  );
}
