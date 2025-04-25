import { RequireAuth } from "../utils"
import Sidebar from "../ui/crm/sidebar"
export const metadata = {
    title: "Educational CRM",
    description: "CRM para gestión de leads educativos",      
}

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <RequireAuth>
            <div className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <main className="p-6 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </RequireAuth>
    )
}