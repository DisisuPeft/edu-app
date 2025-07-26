"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Calificacion {
  nombre: string;
  tipo: string;
  ponderacion: string;
  calificacion: number;
}

interface CalificacionCursoCardProps {
  curso: string;
  profesor: string;
  calificacionFinal: number;
  desglose: Calificacion[];
}

const getGradeColor = (grade: number): string => {
  if (grade >= 90) return "bg-green-500 text-white";
  if (grade >= 80) return "bg-blue-500 text-white";
  if (grade >= 70) return "bg-yellow-500 text-white";
  return "bg-red-500 text-white";
};

export function CalificacionCursoCard({
  curso,
  profesor,
  calificacionFinal,
  desglose,
}: CalificacionCursoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-gray-50/50 transition-colors hover:bg-gray-100/80">
      {/* Este es el botón que abre y cierra el acordeón */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left"
        aria-expanded={isOpen}
        aria-controls={`content-${curso.replace(/\s+/g, "-")}`}
      >
        <div>
          <h3 className="font-bold text-md text-gray-800">{curso}</h3>
          <p className="text-sm text-gray-500">{profesor}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:inline">
            Calificación Final
          </span>
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold ${getGradeColor(
              calificacionFinal
            )}`}
          >
            {calificacionFinal}
          </div>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Este es el contenido que se muestra/oculta con animación */}
      <div
        id={`content-${curso.replace(/\s+/g, "-")}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Actividad
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Ponderación
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Calificación
                  </th>
                </tr>
              </thead>
              <tbody>
                {desglose.map((item) => (
                  <tr
                    key={item.nombre}
                    className="bg-white border-b last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.nombre}
                    </th>
                    <td className="px-6 py-4">{item.tipo}</td>
                    <td className="px-6 py-4 text-center">
                      {item.ponderacion}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${getGradeColor(
                          item.calificacion
                        )}`}
                      >
                        {item.calificacion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
