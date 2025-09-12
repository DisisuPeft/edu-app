"use client";

import useIsAdmin from "@/hooks/plataforma/admin/is-admin";
import StudentDashboard from "./estudiantes/dashboard";
import AdminPage from "./admin/admin-dash";

export default function Dashboard() {
  const { isAdmin } = useIsAdmin();

  return <div>{isAdmin ? <AdminPage /> : <StudentDashboard />}</div>;
}
