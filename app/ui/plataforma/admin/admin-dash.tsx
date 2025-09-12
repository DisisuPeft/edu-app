"use client";

// import { useState } from "react";
// import { DeleteModal } from "@/app/components/admin/delete-modal";
// import { StatCard } from "../estudiantes/stat-card";
// import { Users, UserCheck, UserX, GraduationCap } from "lucide-react";
// import { UserTable } from "@/app/components/admin/user-table";
import UserName from "../user-name";
export default function AdminPage() {
  // const [usuarios, setUsuarios] = useState(usuariosData);

  return (
    <div className="space-y-8 py-14">
      <div className="mt-6 p-2">
        <h1 className="text-3xl font-bold text-gray-900">
          <UserName title="Bienvenido de nuevo," />
        </h1>
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
