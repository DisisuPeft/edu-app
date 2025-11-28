"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCalender from "@/hooks/calander/use-calender";
import { useState } from "react";
import { Enlace } from "@/redux/interface/enlaces-clases/type";
import { Modal } from "@/app/components/common/Modal";

export default function Calender({ programaId }: { programaId: string }) {
  const {
    getDaysInMonth,
    getEventForDate,
    monthNames,
    currentDate,
    navigateMonth,
    days_on_week,
  } = useCalender(programaId);

  const [selectedView, setSelectedView] = useState<boolean>(false);
  const [selectClass, setSelectedClass] = useState<Enlace | null>(null);

  const days = getDaysInMonth(currentDate);

  const showClass = (obj: Enlace) => {
    if (!obj || !obj.titulo) return;
    setSelectedClass(obj);
    setSelectedView(true);
  };

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
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={() => navigateMonth("next")}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendario */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days_on_week.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-gray-500 font-serif"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const clase = getEventForDate(day.date);

            const isToday =
              day.date.toDateString() === new Date().toDateString();

            return (
              <div
                key={index}
                className={`group min-h-[80px] p-2 border border-gray-200 ${
                  day.isCurrentMonth ? "bg-white" : "bg-gray-50"
                } ${
                  isToday ? "bg-red-50 border-red-400" : ""
                } hover:bg-red-500 cursor-pointer transition-colors`}
              >
                <div
                  className={`text-sm ${
                    day.isCurrentMonth ? "text-gray-900" : "text-gray-400"
                  } ${
                    isToday ? "font-bold text-red-600 text-[20px]" : ""
                  } group-hover:text-white`}
                >
                  {day.date.getDate()}
                </div>

                {clase && (
                  <div
                    className={`mt-1 px-1 py-0.5 rounded text-xs ${
                      clase ? "bg-green-100 text-green-800" : "bg-white"
                    } group-hover:bg-red-100 group-hover:text-red-700`}
                    onClick={(e) => {
                      e.stopPropagation();
                      showClass(clase);
                    }}
                  >
                    {clase.titulo}
                  </div>
                )}
              </div>
            );
          })}
          <Modal show={selectedView} onClose={() => setSelectedView(false)}>
            <div className="flex flex-col items-center justify-center gap-4 p-6 text-center font-serif">
              {/* Icono */}
              <div className="text-4xl text-red-500">📘</div>

              {/* Título */}
              <h2 className="text-xl font-semibold text-gray-800">
                {selectClass?.titulo}
              </h2>
              <h2 className="text-xl font-serif text-gray-800">
                Clave de acceso:{" "}
                <span className="font-bold">
                  {selectClass?.password_platform}
                </span>
              </h2>
              {/* Enlace */}
              <a
                href={selectClass?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-600 underline underline-offset-4 hover:text-red-700 transition-colors"
              >
                Ver detalles de la clase
              </a>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
