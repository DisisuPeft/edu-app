import { MenuItem } from "@/redux/interface/sistema/modulos";
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

interface MenuCardProps {
  menuItem: MenuItem;
}

export default function MenuCard({ menuItem }: MenuCardProps) {
  const iconMap = {
    UserGroupIcon: User2Icon,
    Users: Users,
    GraduationCap: GraduationCap,
    CalendarDays: CalendarDays,
    BookOpen: BookOpen,
    ClipboardList: ClipboardList,
    BarChart3: BarChart3,
    Settings: Settings,
    MessageSquare: MessageSquare,
  };
  const Icon = iconMap[menuItem.icon];
  console.log(menuItem);
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className={`absolute inset-0 opacity-10 ${menuItem.bgColor}`} />
      <div className="relative p-6">
        <div
          className={`mb-4 inline-flex rounded-lg p-3 ${menuItem.bgColor} ${menuItem.textColor}`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-black">{menuItem.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{menuItem.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            {menuItem.itemCount} elementos
          </span>
          <button
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${menuItem.bgColor} ${menuItem.textColor} hover:bg-opacity-90`}
          >
            Acceder
          </button>
        </div>
      </div>
    </div>
  );
}
