"use client";
import Link from "next/link";

interface CursoCardProps {
  title: string;
  description: string;
  progress: number;
  type?: string | null;
  path?: string | null;
}
import { useGetCursosQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import useIsAdmin from "@/hooks/plataforma/admin/is-admin";

export function CursoWrapper() {
  const { isAdmin } = useIsAdmin();
  // console.log(isAdmin);
  const { data: cursos } = useGetCursosQuery(undefined, {
    skip: isAdmin,
  });
  return (
    <div>
      {cursos?.map((curso) => {
        const path = `/plataforma/cursos/${curso.id}`;
        return (
          <CursoCard
            key={curso.id}
            title={curso.nombre}
            description={curso.descripcion}
            progress={50} //este va a cambiar
            type={curso.tipo}
            path={path}
          />
        );
      })}
    </div>
  );
}

export function CursoCard({
  title,
  description,
  // progress,
  type,
  path,
}: CursoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full mb-4">
      <div className="p-6 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="mb-4">
          {/* <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Progreso</span>
            <span className="text-sm font-medium text-blue-700">
              {progress}%
            </span>
          </div> */}
          {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div> */}
        </div>
        {path ? (
          <Link
            href={path}
            className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Ir al {type ? type : "curso"}
          </Link>
        ) : (
          <button className="w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
            Ir al {type ? type : "curso"}
          </button>
        )}
      </div>
    </div>
  );
}
