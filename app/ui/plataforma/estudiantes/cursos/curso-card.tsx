"use client";
import Link from "next/link";
import Image from "next/image";
interface CursoCardProps {
  title: string;
  description: string;
  progress: number;
  type?: string | null;
  path?: string | null;
  imagen?: string | null;
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
        console.log(curso);
        return (
          <CursoCard
            key={curso.id}
            title={curso.nombre}
            description={curso.descripcion}
            progress={50} //este va a cambiar
            type={curso.tipo}
            path={path}
            imagen={curso.imagen_url}
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
  imagen,
}: CursoCardProps) {
  console.log(imagen);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full mb-4">
      {/* Imagen del curso */}
      <div className="relative h-40 w-full">
        <Image
          src={imagen || "/images/default-course.jpg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          fill
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Botón */}
        <div className="mt-auto">
          {path ? (
            <Link
              href={path}
              className="block w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 text-center"
            >
              Ir al {type ? type : "curso"}
            </Link>
          ) : (
            <button className="block w-full bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 text-center">
              Ir al {type ? type : "curso"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
