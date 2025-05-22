import { RequireAuth } from "../utils";
import Sidebar from "../ui/control-escolar/sidebar";
import Header from "../ui/control-escolar/header";

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
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-col md:flex-row flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
    </RequireAuth>
  );
}
