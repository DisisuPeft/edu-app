import Acordeon from "@/app/ui/components/acordeon";
import ActivityCard from "./activity-card";
import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import RightPanel from "@/app/ui/components/right-panel";

export default function ModulosPanel({ id }: { id: string }) {
  const { data: modulos } = useGetCursoPanelQuery({
    id: parseInt(id),
    accion: "modulos",
  });

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6">
      <div className="flex-1 min-w-0 space-y-4">
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
      <div className="w-full lg:w-[400px] shrink-0 ">
        <RightPanel id={id} />
      </div>
    </div>
  );
}
