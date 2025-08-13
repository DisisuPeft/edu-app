"use client";
import { X, School } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRetrievePestaniasQuery } from "@/redux/sistema/SistemaApiSlice";
import { DynamicIcon } from "../icons/dynamic-icon";
import { Logout } from "@/app/utils";
import useCheckPerfil from "@/hooks/plataforma/perfil/use-perfil-check";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const path = usePathname();
  const { data: navItems } = useRetrievePestaniasQuery();
  const { isProfileEmpty } = useCheckPerfil();

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
            <h2 className="text-2xl font-bold text-black">Plataforma</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-800"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems?.map((item) => {
            return (
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
            );
          })}
        </nav>
        <div className="flex flex-col gap-4 justify-center p-4 border-t">
          {isProfileEmpty && (
            <div className="bg-orange-400 border border-orange-300 text-white px-4 py-3 rounded-md text-xl text-center">
              Actualiza tus datos
            </div>
          )}
          <div className="flex justify-center">
            <Logout />
          </div>
          {/* <p className="text-xs text-gray-500">© 2025 Plataforma Educativa</p> */}
        </div>
      </aside>
    </>
  );
}
