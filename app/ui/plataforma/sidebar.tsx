"use client";
import { X, School, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRetrievePestaniasQuery } from "@/redux/sistema/SistemaApiSlice";
import { DynamicIcon } from "../icons/dynamic-icon";
import { Logout } from "@/app/utils";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const path = usePathname();
  const { data: navItems } = useRetrievePestaniasQuery();
  // Solo observo un bug donde al refrescar la pagina vuelve a true
  const md = window.matchMedia("(min-width: 768px)");
  md.addEventListener("change", (e) => {
    if (!e.matches) {
      setSidebarOpen(false);
    }
  });
  return (
    <>
      <header className="fixed top-0 inset-x-0 h-16 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-50 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Botón hamburguesa solo en móvil */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2.5 rounded-xl hover:bg-gray-100/80 active:scale-95 transition-all duration-200 ease-out"
            aria-label="Abrir menú"
          >
            {sidebarOpen ? (
              <X className="text-gray-700 h-5 w-5" />
            ) : (
              <MenuIcon className="text-gray-700 h-5 w-5" />
            )}
          </button>

          {/* Branding, siempre visible */}
          <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
            Plataforma
          </span>
        </div>

        {/* Acciones (notificaciones, perfil, etc.) */}
        <div className="flex items-center gap-3">
          <button
            className="p-2.5 rounded-xl hover:bg-gray-100/80 transition-all duration-200 relative"
            aria-label="Notificaciones"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 00-7 7v3.586l-.707.707A1 1 0 005 15h14a1 1 0 00.707-1.707L19 12.586V9a7 7 0 00-7-7zm0 20a3 3 0 003-3H9a3 3 0 003 3z" />
            </svg>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-[#a20519] rounded-full border-2 border-white"></div>
          </button>

          {/* Avatar o menú de usuario */}
          <Logout />
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-all duration-300 md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      ></div>

      {/* Contenedor del Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-[#a20519] via-[#a20519] to-[#8a0415] shadow-2xl transform transition-all duration-300 ease-out md:relative md:flex md:flex-col z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10 h-16 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <School className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Plataforma
            </h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems?.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  item.href === path
                    ? "bg-white text-[#a20519] shadow-lg shadow-black/20"
                    : "text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg transition-all duration-200 ${
                    item.href === path
                      ? "bg-[#a20519]/10"
                      : "group-hover:bg-white/10"
                  }`}
                >
                  <DynamicIcon
                    iconName={item.icon}
                    size={18}
                    color={item.href === path ? "#a20519" : "white"}
                  />
                </div>
                <span className="ml-3 font-medium">{item.name}</span>
                {item.href === path && (
                  <div className="ml-auto w-1.5 h-1.5 bg-[#a20519] rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>
        {/* <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
            <div className="h-8 w-8 rounded-lg bg-white/20"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Usuario</p>
              <p className="text-xs text-white/70 truncate">Administrador</p>
            </div>
          </div>
        </div> */}
      </aside>
    </>
  );
}
