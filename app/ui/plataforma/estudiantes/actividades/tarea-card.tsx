import {
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Book,
  BrainCircuit,
} from "lucide-react";
import { JSX } from "react";

interface TareaCardProps {
  title: string;
  type: string;
  dueDate: Date;
  status: "Pendiente" | "Completada" | "Vencida";
}

const statusConfig = {
  Pendiente: {
    icon: <Clock className="h-4 w-4" />,
    color: "bg-yellow-100 text-yellow-800",
    label: "Pendiente",
  },
  Completada: {
    icon: <CheckCircle className="h-4 w-4" />,
    color: "bg-green-100 text-green-800",
    label: "Completada",
  },
  Vencida: {
    icon: <AlertTriangle className="h-4 w-4" />,
    color: "bg-red-100 text-red-800",
    label: "Vencida",
  },
};

const typeConfig: { [key: string]: { icon: JSX.Element; color: string } } = {
  Proyecto: {
    icon: <BrainCircuit className="h-5 w-5" />,
    color: "text-purple-600",
  },
  Examen: { icon: <FileText className="h-5 w-5" />, color: "text-red-600" },
  Tarea: { icon: <Book className="h-5 w-5" />, color: "text-blue-600" },
  Investigación: {
    icon: <Book className="h-5 w-5" />,
    color: "text-indigo-600",
  },
};

export function TareaCard({ title, type, dueDate, status }: TareaCardProps) {
  const {
    icon: statusIcon,
    color: statusColor,
    label: statusLabel,
  } = statusConfig[status];
  const { icon: typeIcon, color: typeColor } =
    typeConfig[type] || typeConfig["Tarea"];

  return (
    <div
      className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-full border-l-4"
      style={{
        borderColor:
          typeConfig[type]?.color.replace("text-", "var(--color-") ||
          "var(--color-blue-600)",
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <div
            className={`p-2 rounded-lg ${typeConfig[type]?.color
              .replace("text-", "bg-")
              .replace("-600", "-100")}`}
          >
            <span className={typeColor}>{typeIcon}</span>
          </div>
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${statusColor}`}
          >
            {statusIcon}
            <span>{statusLabel}</span>
          </div>
        </div>
        <h3 className="text-md font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">Tipo: {type}</p>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 font-medium">Vencimiento:</span>
          <span className="font-bold text-gray-800">
            {dueDate.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <button className="mt-4 w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}
