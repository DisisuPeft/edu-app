import { useState } from "react";
import { useGetEnlacesQuery } from "@/redux/features/enlaces-clases/linkApiSlice";

export default function useCalender(programaId: string) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data: enlaces } = useGetEnlacesQuery(programaId);

  const days_on_week = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  // const eventosImportantes = [
  //   { fecha: "2025-10-15", evento: "Inicio Segundo Semestre", tipo: "inicio" },
  //   {
  //     fecha: "2025-10-25",
  //     evento: "Vacaciones de Primavera",
  //     tipo: "vacacion",
  //   },
  //   { fecha: "2025-10-15", evento: "Fin Segundo Semestre", tipo: "fin" },
  //   { fecha: "2025-10-20", evento: "Periodo de Exámenes", tipo: "examen" },
  // ];

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

  const getEventForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return enlaces?.results.find(
      (enlace) => enlace.fecha_imparticion === dateStr
    );

    // return eventosImportantes.find((evento) => evento.fecha === dateStr);
    // if (!isLoading && enlaces) {
    //   return enlaces?.results.find(
    //     (enlace) => enlace.fecha_imparticion === dateStr
    //   );
    // }
  };

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

  return {
    getDaysInMonth,
    getEventForDate,
    monthNames,
    currentDate,
    navigateMonth,
    days_on_week,
  };
}
