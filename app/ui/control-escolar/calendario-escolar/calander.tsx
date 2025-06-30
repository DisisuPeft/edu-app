"use client";
import { useState } from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedView, setSelectedView] = useState<"month" | "year">("month");
  // const [selectedCycle, setSelectedCycle] = useState("2023-2024");

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Días del mes anterior
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({ date, isCurrentMonth: true });
    }

    // Días del siguiente mes para completar la grilla
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };
  const eventosImportantes = [
    { fecha: "2025-06-15", evento: "Inicio Segundo Semestre", tipo: "inicio" },
    {
      fecha: "2025-06-25",
      evento: "Vacaciones de Primavera",
      tipo: "vacacion",
    },
    { fecha: "2025-07-15", evento: "Fin Segundo Semestre", tipo: "fin" },
    { fecha: "2025-07-20", evento: "Periodo de Exámenes", tipo: "examen" },
  ];
  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  // const hasEvent = (date: Date) => {
  //   const dateStr = date.toISOString().split("T")[0];
  //   return eventosImportantes.some((evento) => evento.fecha === dateStr);
  // };

  const getEventForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return eventosImportantes.find((evento) => evento.fecha === dateStr);
  };
  const days_on_week = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-medium text-gray-800">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth("prev")}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigateMonth("next")}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0 flex items-center space-x-2">
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
          >
            Hoy
          </button>
          <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Download className="h-4 w-4 mr-1" />
            Exportar
          </button>
        </div>
      </div>

      {/* Calendario */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days_on_week.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const evento = getEventForDate(day.date);
            const isToday =
              day.date.toDateString() === new Date().toDateString();

            return (
              <div
                key={index}
                className={`min-h-[80px] p-2 border border-gray-100 ${
                  day.isCurrentMonth ? "bg-white" : "bg-gray-50"
                } ${
                  isToday ? "bg-blue-50 border-blue-200" : ""
                } hover:bg-sky-500 cursor-pointer`}
              >
                <div
                  className={`text-sm ${
                    day.isCurrentMonth ? "text-gray-900" : "text-gray-400"
                  } ${isToday ? "font-bold text-blue-600" : ""}`}
                >
                  {day.date.getDate()}
                </div>
                {evento && (
                  <div
                    className={`mt-1 px-1 py-0.5 rounded text-xs ${
                      evento.tipo === "inicio"
                        ? "bg-green-100 text-green-800"
                        : evento.tipo === "fin"
                        ? "bg-red-100 text-red-800"
                        : evento.tipo === "vacacion"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {evento.evento}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
