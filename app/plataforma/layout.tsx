import { RequireAuth } from "../utils";
import ClientWrapper from "../ui/plataforma/client-wrapper";

export const metadata = {
  title: "Plataforma educativa",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const allowed = ["Administrador"];
  return (
    // <body className="bg-gray-50 text-gray-800">
    <RequireAuth allowedRoles={allowed}>
      <ClientWrapper>{children}</ClientWrapper>
    </RequireAuth>
    // </body>
  );
}
