import { RequireAuth } from "@/app/utils";

export const metadata = {
  title: "Plataforma educativa",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const allowed = ["Administrador", "Estudiante"];

  return <RequireAuth allowedRoles={allowed}>{children}</RequireAuth>;
}
