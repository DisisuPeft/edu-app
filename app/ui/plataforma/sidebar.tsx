"use client";
import { X, School, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRetrievePestaniasQuery } from "@/redux/sistema/SistemaApiSlice";
import { DynamicIcon } from "../icons/dynamic-icon";
import { Logout } from "@/app/utils";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);
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
      <header className="fixed top-0 inset-x-0 h-16 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-50 flex items-center justify-between px-6 shadow-sm font-serif">
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
          <Image
            src="/assets/logos/unsza_logo.webp"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
            UNSZA
          </span>
        </div>

        {/* Acciones (notificaciones, perfil, etc.) */}
        <div className="flex items-center gap-3">
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
        className={clsx(
          "fixed top-0 left-0 h-full z-40 transform transition-all duration-200 ease-out",
          // mobile off-canvas control (mantén tu logic)
          "md:relative md:flex md:flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          // ancho: compacto por defecto, se expande con hover o estado
          "group w-16 md:w-16",
          "md:hover:w-64",
          expanded ? "w-64 md:w-64" : ""
        )}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        // aria-expanded={expanded}
      >
        {/* background / panel */}
        <div className="h-full bg-gradient-to-b from-[#a20519] via-[#a20519] to-[#8a0415] shadow-2xl flex flex-col">
          {/* header */}
          <div className="flex items-center justify-between h-16 px-3 md:px-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                <School className="h-6 w-6 text-white" />
              </div>

              {/* label visible solo cuando está expandido o en md:hover */}
              <h2
                className={clsx(
                  "text-lg font-bold text-white font-serif truncate transition-all duration-150",
                  // ocultar en compacto
                  "opacity-0 translate-x-0 md:group-hover:opacity-100 md:group-hover:translate-x-0",
                  expanded ? "opacity-100" : ""
                )}
                style={{ transitionProperty: "opacity, transform" }}
              >
                Plataforma
              </h2>
            </div>

            {/* close btn (solo en mobile) */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition"
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* nav */}
          <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
            {navItems?.map((item) => {
              const active = item.href === path;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "relative group flex items-center gap-3 w-full",
                    // centrar icon en compacto
                    "justify-center md:justify-start px-2 py-2",
                    "transition-colors duration-150"
                  )}
                  aria-current={active ? "page" : undefined}
                  title={item.name} // accesible y tooltip nativo
                >
                  {/* icon container */}
                  <div
                    className={clsx(
                      "flex items-center justify-center rounded-lg transition-all duration-150",
                      // tamaño del fondo del icono para que resalte cuando activo
                      active
                        ? "bg-white text-[#a20519] p-3 shadow-lg"
                        : "p-2 group-hover:bg-white/10"
                    )}
                  >
                    <DynamicIcon
                      iconName={item.icon}
                      size={18}
                      color={active ? "#a20519" : "white"}
                    />
                  </div>

                  {/* label: oculto en compacto, se muestra con fade+translate en expandido */}
                  <span
                    className={clsx(
                      "font-medium font-serif text-white truncate transition-all duration-150",
                      // por defecto oculto y colapsado
                      "opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0",
                      expanded ? "opacity-100" : ""
                    )}
                    style={{ transitionProperty: "opacity, transform" }}
                  >
                    {item.name}
                  </span>

                  {/* active indicator en la derecha (solo cuando expandido o en md hover) */}
                  {active && (
                    <span
                      className={clsx(
                        "absolute right-3 h-6 w-1 rounded-full",
                        "bg-white/90 md:group-hover:bg-white/90"
                      )}
                      aria-hidden
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* footer / acciones pequeñas: solo iconos en compacto */}
          <div className="px-2 py-4 border-t border-white/10 flex items-center gap-2">
            <button
              className="p-2 rounded-md hover:bg-white/10 transition"
              aria-label="Ajustes"
              onClick={() => {
                /* tu acción */
              }}
            >
              {/* ejemplo icon */}
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none" /*...*/
              />
            </button>

            {/* expand toggle (visible en md para fijar estado expandido) */}
            {/* <button
              onClick={() => setExpanded((s) => !s)}
              className="ml-auto px-2 py-1 text-sm rounded-md bg-white/10 text-white hidden md:inline-flex"
              aria-pressed={expanded}
              title={expanded ? "Contraer" : "Expandir"}
            >
              {expanded ? "Cerrar" : "Abrir"}
            </button> */}
          </div>
        </div>
      </aside>
      {/* <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-[#a20519] via-[#a20519] to-[#8a0415] shadow-2xl transform transition-all duration-300 ease-out md:relative md:flex md:flex-col z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10 h-16 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <School className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight font-serif">
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
                <span className="ml-3 font-medium font-serif">{item.name}</span>
                {item.href === path && (
                  <div className="ml-auto w-1.5 h-1.5 bg-[#a20519] rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </aside> */}
    </>
  );
}
