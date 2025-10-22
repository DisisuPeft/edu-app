// "use client";

// // import { useState } from "react";
// // import { DeleteModal } from "@/app/components/admin/delete-modal";
// // import { StatCard } from "../estudiantes/stat-card";
// // import { Users, UserCheck, UserX, GraduationCap } from "lucide-react";
// // import { UserTable } from "@/app/components/admin/user-table";
import UserName from "../user-name";
// export default function AdminPage() {
//   // const [usuarios, setUsuarios] = useState(usuariosData);

//   return (
//     <div className="space-y-8 py-14">
//       <div className="mt-6 p-2">
//         <h1 className="text-3xl font-bold text-gray-900">
//           <UserName title="Bienvenido de nuevo," />
//         </h1>
//       </div>

//       {/* Estadísticas del Sistema */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>

//       {/* Tabla de Usuarios */}
//       {/* <UserTable
//       /> */}
//     </div>
//   );
// }
import Link from "next/link";
import { Users, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background p-8 text-black mt-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          <UserName title="Bienvenido de nuevo," />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Tarjeta Crear Usuarios */}
          <Link href="/plataforma/estudiantes/create" className="group">
            <div className="h-64 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2 border-border hover:border-primary rounded-lg bg-card">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Crear Usuarios
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Gestiona y crea nuevos usuarios en el sistema de manera rápida
                  y sencilla
                </p>
              </div>
            </div>
          </Link>

          {/* Tarjeta Ver Diplomados */}
          <Link href="/plataforma/diplomados" className="group">
            <div className="h-64 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2 border-border hover:border-primary rounded-lg bg-card">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Ver Diplomados
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Consulta y administra todos los diplomados disponibles en la
                  plataforma
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
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
