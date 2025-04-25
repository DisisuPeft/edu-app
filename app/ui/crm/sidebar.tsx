'use client'
import { useGetTabsQuery } from "@/redux/sistema/SistemaApiSlice"
import { Menu, X } from "lucide-react"
import { useSearchParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Sidebar(){
    const pathname = usePathname()
    const params = useSearchParams()
    const id = params.get("id")
    const query_id = id ? parseInt(id): undefined
    const {data:tabs, isLoading, error} = useGetTabsQuery(query_id)
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setOpen(!open)
    }

    // console.log(tabs)
    // const Active = pathname === `/crm?id=${id}`

    return (
        <div className="">
            <button className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md text-gray-800" onClick={toggleSidebar}>
                {open ? <X size={24}/> : <Menu size={24}/>}
            </button>

            <div
                className={`fixed inset-0 z-40 transform ${open ? "translate-x-0" : "-translate-x-full"} md:hidden transition-transform duration-300 ease-in-out`}
            >
                <div className="relative flex flex-col w-64 h-full bg-white border-r border-gray-200 shadow-xl">
                    <div className="flex items-center justify-between h-16 px-6 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">Edu CRM</h2>
                        <button onClick={toggleSidebar}>
                            <X size={24} className="text-gray-800" />
                        </button>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                        {tabs?.map((item) => {
                            const isActive = pathname === item.href
                            // console.log(isActive)
                            return (
                                <Link
                                    key={item.id}
                                    href={{pathname: item.href, query: {id: item.modulo.id}}}
                                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                                        isActive ? "bg-sky-500 text-white" : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    onClick={() => setOpen(false)}
                                >
                                {/* <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-400"}`} /> */}
                                {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <div className="absolute inset-0 bg-gray-600 opacity-50" onClick={toggleSidebar}></div>
            </div>
            <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 border-r border-gray-200 bg-white">
                <div className="flex items-center h-16 px-6 border-b">
                    <Link className="text-xl font-semibold text-gray-800" href="/dashboard">CEA ERP</Link>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    {tabs?.map((item) => {
                        const isActive = pathname === item.href
                        return (
                        <Link
                            key={item.name}
                            href={{pathname: item.href, query: {id: item.modulo.id}}}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                            isActive ? "bg-sky-500 text-white" : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {/* <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-400"}`} /> */}
                            {item.name}
                        </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
        
    )
}