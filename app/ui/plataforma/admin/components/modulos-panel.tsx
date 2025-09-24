import Acordeon from "@/app/ui/components/acordeon";
import ActivityCard from "./activity-card";
import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";

export default function ModulosPanel({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const { data: modulos } = useGetCursoPanelQuery({
    id: parseInt(id),
    accion: "modulos",
  });

  return (
    <div className={`space-y-6 text-black font-sans ${className || ""}`}>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground text-balance">
          Contenido del Curso
        </h2>
        <p className="text-muted-foreground text-pretty">
          Explora todos los módulos disponibles
        </p>
      </div>

      <div className="space-y-4">
        {modulos?.map((modulo) => {
          return (
            <Acordeon key={modulo.id} title={modulo.nombre}>
              <div className="space-y-2">
                {modulo?.submodulos?.map((actividad) => (
                  <ActivityCard key={actividad.id} titulo={actividad.titulo} />
                ))}
              </div>
            </Acordeon>
          );
        })}
      </div>
    </div>
  );
}
