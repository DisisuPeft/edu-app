import { RequireAuth } from "@/app/utils";
import SideNav from "@/app/ui/dashboard/sidenav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <RequireAuth>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white h-full">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12 text-gray-800">
          {children}
        </main>
      </div>
    </RequireAuth>
  );
}
