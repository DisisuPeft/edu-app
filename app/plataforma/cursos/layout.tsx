import { RequireAuth } from "@/app/utils";
import ClientWrapper from "@/app/ui/plataforma/client-wrapper";

export const metadata = {
  title: "Plataforma educativa",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const allowed = ["Administrador"];
  return (
    // <body className="bg-gray-50 text-gray-800">
    <RequireAuth allowedRoles={allowed}>{children}</RequireAuth>
    // </body>
  );
}
