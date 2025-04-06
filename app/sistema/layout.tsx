import { RequireAuth } from "@/app/utils";
import SideNav from "@/app/ui/dashboard/sidenav";
import Navbar from "../ui/dashboard/navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <RequireAuth>
      {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </main>
      </div> */}
      <div className="flex h-screen bg-gray-100">
        <SideNav />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </RequireAuth>
  );
}
