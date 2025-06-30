"use client";

import {
  CalendarDays,
  Plus,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function CalendarioModule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedView, setSelectedView] = useState<"month" | "year">("month");
  const [selectedCycle, setSelectedCycle] = useState("2023-2024");

  // Datos de ejemplo para ciclos escolares
  const ciclosEscolares = [
    {
      id: "2023-2024",
      nombre: "Ciclo 2023-2024",
      fechaInicio: "2023-08-15",
      fechaFin: "2024-07-15",
      estado: "Activo",
    },
    {
      id: "2022-2023",
      nombre: "Ciclo 2022-2023",
      fechaInicio: "2022-08-15",
      fechaFin: "2023-07-15",
      estado: "Finalizado",
    },
    {
      id: "2024-2025",
      nombre: "Ciclo 2024-2025",
      fechaInicio: "2024-08-15",
      fechaFin: "2025-07-15",
      estado: "Programado",
    },
  ];

  // Datos de ejemplo para periodos
  const periodos = [
    {
      id: 1,
      nombre: "Primer Semestre",
      fechaInicio: "2023-08-15",
      fechaFin: "2023-12-15",
      tipo: "Académico",
      estado: "Finalizado",
    },
    {
      id: 2,
      nombre: "Segundo Semestre",
      fechaInicio: "2024-01-15",
      fechaFin: "2024-05-15",
      tipo: "Académico",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Periodo de Exámenes",
      fechaInicio: "2024-05-16",
      fechaFin: "2024-05-30",
      tipo: "Evaluación",
      estado: "Programado",
    },
    {
      id: 4,
      nombre: "Vacaciones de Verano",
      fechaInicio: "2024-06-01",
      fechaFin: "2024-08-14",
      tipo: "Vacacional",
      estado: "Programado",
    },
  ];

  // Eventos importantes del calendario
  const eventosImportantes = [
    { fecha: "2024-01-15", evento: "Inicio Segundo Semestre", tipo: "inicio" },
    {
      fecha: "2024-03-25",
      evento: "Vacaciones de Primavera",
      tipo: "vacacion",
    },
    { fecha: "2024-05-15", evento: "Fin Segundo Semestre", tipo: "fin" },
    { fecha: "2024-05-20", evento: "Periodo de Exámenes", tipo: "examen" },
  ];

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

  const days = getDaysInMonth(currentDate);

  return (
    <div className="space-y-6 text-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <CalendarDays className="h-6 w-6 mr-2 text-gray-700" />
          <h1 className="text-2xl font-bold text-gray-800">
            Calendario Escolar
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={selectedCycle}
            onChange={(e) => setSelectedCycle(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {ciclosEscolares.map((ciclo) => (
              <option key={ciclo.id} value={ciclo.id}>
                {ciclo.nombre}
              </option>
            ))}
          </select>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Periodo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información del Ciclo Actual */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Ciclo Actual
          </h3>
          {ciclosEscolares.find((c) => c.id === selectedCycle) && (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium">
                  {ciclosEscolares.find((c) => c.id === selectedCycle)?.nombre}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Periodo</p>
                <p className="font-medium">
                  {
                    ciclosEscolares.find((c) => c.id === selectedCycle)
                      ?.fechaInicio
                  }{" "}
                  -{" "}
                  {
                    ciclosEscolares.find((c) => c.id === selectedCycle)
                      ?.fechaFin
                  }
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estado</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ciclosEscolares.find((c) => c.id === selectedCycle)
                      ?.estado === "Activo"
                      ? "bg-green-100 text-green-800"
                      : ciclosEscolares.find((c) => c.id === selectedCycle)
                          ?.estado === "Finalizado"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {ciclosEscolares.find((c) => c.id === selectedCycle)?.estado}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Estadísticas */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Estadísticas
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Periodos Activos</span>
              <span className="font-medium text-green-600">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                Periodos Programados
              </span>
              <span className="font-medium text-blue-600">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Días Hábiles</span>
              <span className="font-medium text-gray-800">180</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Días de Vacaciones</span>
              <span className="font-medium text-gray-800">45</span>
            </div>
          </div>
        </div>

        {/* Próximos Eventos */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Próximos Eventos
          </h3>
          <div className="space-y-3">
            {eventosImportantes.slice(0, 4).map((evento, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    evento.tipo === "inicio"
                      ? "bg-green-500"
                      : evento.tipo === "fin"
                      ? "bg-red-500"
                      : evento.tipo === "vacacion"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {evento.evento}
                  </p>
                  <p className="text-xs text-gray-500">{evento.fecha}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vista del Calendario */}
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
            {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
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

      {/* Gestión de Periodos */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium text-gray-800">
            Gestión de Periodos
          </h2>
          <div className="mt-2 md:mt-0 flex items-center">
            <select className="mr-2 border border-gray-300 rounded-md text-sm p-2">
              <option value="">Todos los tipos</option>
              <option value="academico">Académico</option>
              <option value="evaluacion">Evaluación</option>
              <option value="vacacional">Vacacional</option>
            </select>
            <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
              <Filter className="h-4 w-4 mr-1" />
              Filtrar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Periodo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tipo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha Inicio
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha Fin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duración
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Estado
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {periodos.map((periodo) => {
                const fechaInicio = new Date(periodo.fechaInicio);
                const fechaFin = new Date(periodo.fechaFin);
                const duracion = Math.ceil(
                  (fechaFin.getTime() - fechaInicio.getTime()) /
                    (1000 * 60 * 60 * 24)
                );

                return (
                  <tr key={periodo.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {periodo.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          periodo.tipo === "Académico"
                            ? "bg-blue-100 text-blue-800"
                            : periodo.tipo === "Evaluación"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {periodo.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {periodo.fechaInicio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {periodo.fechaFin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {duracion} días
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          periodo.estado === "Activo"
                            ? "bg-green-100 text-green-800"
                            : periodo.estado === "Finalizado"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {periodo.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Ver
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-900"
                      >
                        Editar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gestión de Ciclos Escolares */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium text-gray-800">
            Ciclos Escolares
          </h2>
          <button className="mt-2 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Ciclo
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ciclo Escolar
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha Inicio
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha Fin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duración
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Estado
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ciclosEscolares.map((ciclo) => {
                const fechaInicio = new Date(ciclo.fechaInicio);
                const fechaFin = new Date(ciclo.fechaFin);
                const duracion = Math.ceil(
                  (fechaFin.getTime() - fechaInicio.getTime()) /
                    (1000 * 60 * 60 * 24)
                );

                return (
                  <tr key={ciclo.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {ciclo.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ciclo.fechaInicio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ciclo.fechaFin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {duracion} días
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          ciclo.estado === "Activo"
                            ? "bg-green-100 text-green-800"
                            : ciclo.estado === "Finalizado"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {ciclo.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Ver
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-900"
                      >
                        Editar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
