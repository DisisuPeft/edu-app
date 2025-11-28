import Acordeon from "@/app/ui/components/acordeon";
import ActivityCard from "./activity-card";
import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import { Pencil } from "lucide-react";
import Link from "next/link";

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
      <div className="grid grid-cols-[2fr,1fr] gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground text-balance">
            Contenido del diplomado
          </h2>
          <p className="text-muted-foreground text-pretty">
            Explora todos los módulos disponibles
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="rounded-full bg-primary p-2 text-white"
            title="Editar programa"
            href={`/plataforma/diplomados/${id}/edit`}
          >
            <Pencil />
          </Link>
        </div>
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
