import { RequireAuth } from "../utils";
import Sidebar from "../ui/control-escolar/sidebar";

export const metadata = {
  title: "Control escolar",
  description: "Modulo para gestion de informacion educativa",
};
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <main className="p-6 overflow-auto">{children}</main>
        </div>
      </div>
    </RequireAuth>
  );
}
