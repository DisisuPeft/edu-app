"use client";

// import { CursoCard } from "./curso-card";
import { useState } from "react";
import { useGetPaginetedCursosQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import { CursoCard } from "./curso-card";

export default function CursosList() {
  const [page, setPage] = useState<number | null>(1);
  const { data } = useGetPaginetedCursosQuery(page);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < data?.count) {
      setPage(page + 1);
    }
  };

  const totalPages = Math.ceil(data?.count / 10);

  // console.log(totalPages);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.results.map((curso) => {
          const path = `/plataforma/cursos/${curso.programa.id}`;
          return (
            <CursoCard
              key={curso.programa.id}
              title={curso.programa.nombre}
              description={curso.programa.descripcion}
              // progress={50} //este va a cambiar
              type={curso.programa.tipo}
              path={path}
              imagen={curso.programa.imagen_url}
            />
          );
        })}
      </div>
      <section className="flex justify-end p-2">
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className="px-4 py-2 bg-primary rounded hover:bg-red-500 disabled:opacity-50"
          >
            Anterior
          </button>

          <span className="text-sm text-gray-700 mt-2">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-4 py-2 bg-primary rounded hover:bg-red-500 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </section>
    </div>
  );
}
