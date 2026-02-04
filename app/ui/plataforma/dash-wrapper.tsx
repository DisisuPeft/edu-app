"use client";

import useIsAdmin from "@/hooks/plataforma/admin/is-admin";
import StudentDashboard from "./estudiantes/dashboard";
import AdminPage from "./admin/admin-dash";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function Dashboard() {
  const { isAdmin } = useIsAdmin();
  const { data: user } = useRetrieveUserQuery();

  if (isAdmin) {
    return <AdminPage />;
  }

  if (user?.roleID.some((role) => role.name === "Estudiante")) {
    return <StudentDashboard />;
  }

  return (
    <div className="mt-[100px] space-y-8">
      {" "}
      <div className="rounded-2xl p-8 text-black font-sans">
        <h1 className="text-3xl font-bold mb-2">
          ¡Hola, {user?.profile.nombre} {user?.profile.apellidoP}{" "}
          {user?.profile.apellidoM}!
        </h1>
        <p className="text-black text-lg">
          Captura tus fichas de inscritos y mas.
        </p>
      </div>
    </div>
  );
}
