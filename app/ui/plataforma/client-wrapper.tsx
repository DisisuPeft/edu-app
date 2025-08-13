"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Menu, School } from "lucide-react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header móvil */}
        <header className="flex justify-between items-center p-4 bg-white border-b md:hidden">
          <div className="flex items-center gap-2">
            <School className="h-6 w-6 text-black" />
            <h1 className="text-xl font-bold text-black">Plataforma</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </header>

        {/* Contenido */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
