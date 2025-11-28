interface ActivityCardProps {
  titulo: string;
  buttonText?: string;
  tipo?: "actividad" | "examen";
  estado?: "pendiente" | "completado";
}

const statusColors = {
  pendiente: "bg-yellow-100 text-yellow-800",
  completado: "bg-green-100 text-green-800",
};

const typeText = {
  actividad: "Actividad",
  examen: "Examen",
};

export default function ActivityCard({
  titulo,
  tipo,
  estado,
}: ActivityCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 font-serif">
      <div>
        <div className="flex justify-between items-start mb-2">
          {tipo && (
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {typeText[tipo]}
            </span>
          )}
          {estado && (
            <span
              className={`px-2 py-1 text-xs font-bold rounded-full ${statusColors[estado]}`}
            >
              {estado.charAt(0).toUpperCase() + estado.slice(1)}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-gray-800 mb-4">{titulo}</h3>
      </div>
      {/* {buttonText ?? (
        <button className="w-full mt-auto px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          {buttonText}
        </button>
      )} */}
    </div>
  );
}
