"use client";

// import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  // BookOpen,
  // Calendar,
  // ClipboardList,
  // FileText,
  // GraduationCap,
  // Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useGetTabsQuery } from "@/redux/sistema/SistemaApiSlice";
import { useSearchParams } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const params = useSearchParams();
  const id = params.get("id");
  const query_id = id ? parseInt(id) : undefined;
  const { data: tabs } = useGetTabsQuery(query_id);
  // console.log(tabs);
  return (
    <aside
      id="sidebar"
      className="w-64 bg-white border-r border-gray-200 md:static fixed inset-y-0 left-0 z-20 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out"
    >
      <nav className="p-4 h-full overflow-y-auto">
        <ul className="space-y-1">
          {tabs?.map((module) => {
            const isActive = pathname === module.href;
            return (
              <li key={module.id}>
                <Link
                  key={module.name}
                  href={{
                    pathname: module.href,
                    query: { id: module.modulo.id },
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    {/* <span className="mr-3 text-gray-500">{module.icon}</span> */}
                    <span>{module.name}</span>
                  </div>
                  {isActive ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
