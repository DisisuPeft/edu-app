"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useGetCursosQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import useIsAdmin from "@/hooks/plataforma/admin/is-admin";
import { DiplomadoCampaniaType } from "@/redux/control-escolar/programas-educativos/types";

interface CursoCardProps {
  id?: string | number;
  title: string;
  description: string;
  type?: string | null;
  path?: string | null;
  imagen?: string | null;
}

export function CursoWrapper() {
  const { isAdmin } = useIsAdmin();
  const { data, isLoading, isFetching, error } = useGetCursosQuery(undefined, {
    skip: isAdmin,
  });

  // fallback list empty
  const cursos = useMemo(() => data || [], [data]);

  if (isLoading || isFetching) {
    return (
      <div className="py-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              role="status"
              aria-hidden
              key={i}
              className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gray-100" />
              <div className="p-6">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-full mb-4" />
                <div className="h-9 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <p className="text-center text-red-600">Error al cargar tus cursos.</p>
      </div>
    );
  }

  if (!cursos.length) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Aún no tienes diplomados
        </h3>
        <p className="text-gray-600 mb-6">
          Inscríbete en un diplomado para que aparezca acá.
        </p>
        <Link
          href="/plataforma/catalogo"
          className="inline-block bg-[#a20519] text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Explorar diplomados
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso: DiplomadoCampaniaType) => {
          const id = curso.programa?.id;
          const path = `/plataforma/cursos/${id}`;
          return (
            <div key={id} className="h-full">
              <CursoCard
                id={id}
                title={curso.programa?.nombre ?? "Sin título"}
                description={curso.programa?.descripcion ?? ""}
                // progress={Math.min(Math.max(prog, 0), 100)}
                type={curso.programa?.tipo}
                path={path}
                imagen={curso.programa?.imagen_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CursoCard({
  id,
  title,
  description,
  type,
  path,
  imagen,
}: CursoCardProps) {
  return (
    <article
      aria-labelledby={`curso-title-${id}`}
      className="max-w-[320px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full mx-auto"
    >
      {/* Imagen */}
      <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
        <Image
          src={imagen || "/images/default-course.jpg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          priority={false}
        />
        {/* Badge tipo arriba a la izquierda */}
        {type && (
          <span className="absolute left-3 top-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm">
            {type}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div>
          <h3
            id={`curso-title-${id}`}
            className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2"
            title={title}
          >
            {title}
          </h3>
          <p
            className="text-gray-600 text-sm mb-2 line-clamp-2"
            title={description}
          >
            {description}
          </p>
        </div>

        {/* Progreso */}
        {/* <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-medium text-gray-700">
              {statusLabel}
            </div>
            <div className="text-xs font-semibold text-gray-700">
              {progressRounded}%
            </div>
          </div>

          <div
            className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progressRounded}
            aria-label={`Progreso ${progressRounded}%`}
          >
            <div
              className="h-full bg-gradient-to-r from-[#a20519] via-[#d23333] to-[#f97373] transition-all duration-500"
              style={{ width: `${progressRounded}%` }}
            />
          </div>
        </div> */}

        {/* Botón */}
        <div>
          {path ? (
            <Link
              href={path}
              className="inline-flex items-center justify-center w-full bg-[#a20519] text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-[#a20519]/30 transition-colors duration-200"
              title={`Ir al ${type ?? "curso"}`}
              aria-label={`Ir al ${type ?? "curso"}`}
            >
              {`Ir al ${type ?? "curso"}`}
            </Link>
          ) : (
            <button
              className="inline-flex items-center justify-center w-full bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-200"
              disabled
            >
              Ir al {type ?? "curso"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
