"use client";

// import { useState } from "react";
// import { DeleteModal } from "@/app/components/admin/delete-modal";
// import { StatCard } from "../estudiantes/stat-card";
// import { Users, UserCheck, UserX, GraduationCap } from "lucide-react";
// import { UserTable } from "@/app/components/admin/user-table";

// const usuariosData = [
//   {
//     id: 1,
//     nombre: "Alex Rodriguez",
//     email: "alex.rodriguez@email.com",
//     fechaRegistro: "2024-01-15",
//     estado: "Activo",
//     cursosInscritos: 4,
//     ultimoAcceso: "2025-01-14",
//   },
//   {
//     id: 2,
//     nombre: "Maria González",
//     email: "maria.gonzalez@email.com",
//     fechaRegistro: "2024-02-20",
//     estado: "Activo",
//     cursosInscritos: 3,
//     ultimoAcceso: "2025-01-13",
//   },
//   {
//     id: 3,
//     nombre: "Carlos Mendoza",
//     email: "carlos.mendoza@email.com",
//     fechaRegistro: "2024-03-10",
//     estado: "Inactivo",
//     cursosInscritos: 2,
//     ultimoAcceso: "2024-12-20",
//   },
//   {
//     id: 4,
//     nombre: "Ana Jiménez",
//     email: "ana.jimenez@email.com",
//     fechaRegistro: "2024-01-05",
//     estado: "Suspendido",
//     cursosInscritos: 1,
//     ultimoAcceso: "2024-11-15",
//   },
// ];
export default function AdminPage() {
  // const [usuarios, setUsuarios] = useState(usuariosData);

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
      {/* <UserTable
      /> */}
    </div>
  );
}
// <div className="overflow-x-auto">
//   {events?.response ? (
//     <div>
//       <DataTable data={events?.response?.data} columns={headers} />
//       <div className="flex justify-end gap-4 mt-4 p-4">
//         <button
//           className="rounded-full"
//           onClick={() => setPage((p) => Math.max(p - 1, 1))}
//         >
//           <ChevronLeftCircle />
//         </button>
//         <button onClick={() => setPage((p) => p + 1)}>
//           <ChevronRightCircle />
//         </button>
//       </div>
//     </div>
//   ) : (
//     // <div></div>
//     <div>No existe datos</div>
//   )}
// </div>
