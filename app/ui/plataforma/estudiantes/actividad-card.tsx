import { Calendar } from "lucide-react";

interface ActividadCardProps {
  title: string;
  course: string;
  dueDate: string;
}

export function ActividadCard({ title, course, dueDate }: ActividadCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-start gap-4 hover:bg-gray-50 transition-colors">
      <div className="bg-red-100 text-red-600 rounded-lg p-2">
        <Calendar className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{course}</p>
        <p className="text-sm font-medium text-red-600 mt-1">{dueDate}</p>
      </div>
    </div>
  );
}
