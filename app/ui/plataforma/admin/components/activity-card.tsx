interface ActivityCardProps {
  titulo: string;
  buttonText?: string;
  tipo?: "actividad" | "examen";
  estado?: "pendiente" | "completado";
}

// const statusColors = {
//   pendiente: "bg-yellow-100 text-yellow-800",
//   completado: "bg-green-100 text-green-800",
// };

// const typeText = {
//   actividad: "Actividad",
//   examen: "Examen",
// };

export default function ActivityCard({
  titulo,
  tipo,
  estado,
}: ActivityCardProps) {
  return (
    <div
      className={
        "group flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-border transition-all duration-200 cursor-pointer"
      }
    >
      {/* <div className="flex-shrink-0">{getIcon()}</div> */}

      <div className="flex-1 min-w-0">
        <h4
          className={
            "text-sm font-medium text-black transition-colors duration-200 text-pretty"
          }
        >
          {titulo}
        </h4>
        {estado && (
          <p className="text-xs text-muted-foreground mt-1">{estado}</p>
        )}
      </div>

      {tipo && (
        <div className="flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      )}
    </div>
  );
}
