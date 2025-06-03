"use client";

import { useGetMenuQuery } from "@/redux/sistema/SistemaApiSlice";
// import MenuCard from "./components/menu-card";
// import { MenuItem } from "@/redux/interface/sistema/modulos";
import {
  Users,
  GraduationCap,
  CalendarDays,
  BookOpen,
  ClipboardList,
  BarChart3,
  Settings,
  MessageSquare,
  User2Icon,
} from "lucide-react";
import Link from "next/link";

export default function MenuDashboard() {
  const { data: menuItem } = useGetMenuQuery();
  const iconMap = {
    UserIcon2: User2Icon,
    Users: Users,
    GraduationCap: GraduationCap,
    CalendarDays: CalendarDays,
    BookOpen: BookOpen,
    ClipboardList: ClipboardList,
    BarChart3: BarChart3,
    Settings: Settings,
    MessageSquare: MessageSquare,
  };
  const bgColorMap = {
    "bg-gray-700": "#374151",
    "bg-blue-500": "#3B82F6",
    "bg-purple-500": "#8B5CF6",
    "bg-amber-500": "#F59E0B",
    "bg-emerald-500": "#10B981",
    "bg-red-500": "#EF4444",
    "bg-indigo-500": "#6366F1",
    "bg-teal-500": "#14B8A6",
  };

  const textColorMap = {
    "text-white": "#FFFFFF",
  };
  // console.log(item);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {menuItem?.map((item) => {
        const Icon = iconMap[item.icon];
        const bgColor = item?.bgColor
          ? bgColorMap[item.bgColor] || "#374151"
          : "#374151";
        const textColor = item?.textColor
          ? textColorMap[item.textColor] || "#FFFFFF"
          : "#FFFFFF";
        // console.log(item);
        return (
          <Link key={item.id} href={`${item.route}`}>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="relative p-6">
                <div
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                  }}
                  className="mb-4 inline-flex rounded-lg p-3"
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black">
                  {item.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{item.description}</p>
                {/* <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {item.itemCount}
                  </span>
                </div> */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
