"use client";

import { CursoCard } from "./curso-card";
import { useState } from "react";
import { useGetPaginetedCursosQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";

export default function CursosList() {
  const [page, setPage] = useState<number | null>(1);
  const { data: cursos, isLoading } = useGetPaginetedCursosQuery(page);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cursos?.results.map((curso) => {
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
