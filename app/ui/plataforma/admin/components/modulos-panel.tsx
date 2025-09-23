import Acordeon from "@/app/ui/components/acordeon";
import ActivityCard from "./activity-card";
import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";

export default function ModulosPanel({ id }: { id: string }) {
  const { data: modulos } = useGetCursoPanelQuery({
    id: parseInt(id),
    accion: "modulos",
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Contenido del Curso
      </h2>
      {modulos?.map((modulo) => {
        return (
          <Acordeon key={modulo.id} title={modulo.nombre}>
            <div className="space-y-3 pt-2">
              {modulo?.submodulos?.map((actividad) => (
                <ActivityCard key={actividad.id} titulo={actividad.titulo} />
              ))}
            </div>
          </Acordeon>
        );
      })}
    </div>
  );
}
