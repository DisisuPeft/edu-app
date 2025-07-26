import Acordeon from "@/app/ui/components/acordeon";
import ActivityCard from "./activity-card";
import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";

const modulos = [
  {
    id: 1,
    titulo: "Módulo 1: Introducción al Diseño UX",
    actividades: [
      { id: 1, titulo: "Clase 1: ¿Qué es UX?" },
      { id: 2, titulo: "Clase 2: Principios de usabilidad" },
      { id: 3, titulo: "Clase 3: El rol del diseñador UX" },
    ],
  },
  {
    id: 2,
    titulo: "Módulo 2: Investigación de Usuarios",
    actividades: [
      { id: 4, titulo: "Clase 4: Entrevistas y encuestas" },
      { id: 5, titulo: "Clase 5: Creación de User Personas" },
    ],
  },
  {
    id: 3,
    titulo: "Módulo 3: Arquitectura de Información",
    actividades: [
      { id: 6, titulo: "Clase 6: Card Sorting" },
      { id: 7, titulo: "Clase 7: Diseño de flujos de usuario" },
    ],
  },
];

export default function ModulosPanel({ id }: { id: string }) {
  const { data: modulos } = useGetCursoPanelQuery({
    id: parseInt(id),
    accion: "modulos",
  });
  //   console.log(data);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Contenido del Curso
      </h2>
      {modulos?.map((modulo) => {
        // console.log(modulo);
        return (
          <Acordeon key={modulo.id} title={modulo.nombre}>
            <div className="space-y-3 pt-2">
              {/* <div>Hola</div> */}
              {modulo?.submodulos?.map((actividad) => (
                <ActivityCard
                  key={actividad.id}
                  titulo={actividad.titulo}
                  buttonText="Ver clase grabada"
                />
              ))}
            </div>
          </Acordeon>
        );
      })}
    </div>
  );
}
