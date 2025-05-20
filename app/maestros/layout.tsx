import Navbar from "../ui/dashboard/navbar"
import { RequireAuth } from "../utils"

interface Props {
  children: React.ReactNode;
}

export default function Layout({children}: Props){
    return (
      <RequireAuth>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="flex-1 flex flex-col">
            <main className="p-6 overflow-auto">{children}</main>
          </div>
        </div>
      </RequireAuth>
    );
}