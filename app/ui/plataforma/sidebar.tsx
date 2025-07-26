"use client";
import {
  Home,
  BookOpen,
  ClipboardCheck,
  BarChart2,
  User,
  X,
  School,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRetrievePestaniasQuery } from "@/redux/sistema/SistemaApiSlice";
import { DynamicIcon } from "../icons/dynamic-icon";

// const navItems = [
//   { name: "Inicio", icon: Home, href: "/plataforma" },
//   {
//     name: "Mis Cursos",
//     icon: "book-open",
//     href: "/plataforma/cursos",
//   },
//   {
//     name: "Actividades",
//     icon: "book-open",
//     href: "/plataforma/actividades",
//   },
//   {
//     name: "Calificaciones",
//     icon: "book-open",
//     href: "/plataforma/calificaciones",
//   },
//   { name: "Perfil", icon: User, href: "/plataforma/perfil" },
// ];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const path = usePathname();
  const { data: navItems } = useRetrievePestaniasQuery();
  // console.log(navItems.map);
  return (
    <>
      {/* Overlay para móvil */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Contenedor del Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b h-16">
          <div className="flex items-center gap-3">
            <School className="h-8 w-8 text-black" />
            <h2 className="text-2xl font-bold text-gray-800">Plataforma</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-800"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        {/*               className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                item.href === path
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`} */}
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems?.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                item.href === path
                  ? "bg-blue-100 text-blue-700"
                  : "text-black hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <DynamicIcon iconName={item.icon} size={20} color="black" />
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <p className="text-xs text-gray-500">© 2025 Plataforma Educativa</p>
        </div>
      </aside>
    </>
  );
}
