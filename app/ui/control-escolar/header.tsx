"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { data: user, isLoading } = useRetrieveUserQuery();
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="md:hidden mr-2 text-gray-600 hover:text-gray-900"
            aria-label="Abrir menú"
            onClick={() => {
              const sidebar = document.getElementById("sidebar");
              if (sidebar) {
                sidebar.classList.toggle("-translate-x-full");
              }
            }}
          >
            <Menu size={24} />
          </button>
          <Link href="/dashboard" className="text-xl font-bold text-gray-800">
            CEA ERP
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="inline-block text-center leading-8 text-gray-700 font-medium">
              {user?.usuario?.profile?.nombre}{" "}
              {user?.usuario?.profile?.apellidoP}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
