"use client";

import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";

export default function CursoHeader({ id }: { id: string }) {
  const { data: curso, isLoading } = useGetCursoPanelQuery({
    id: parseInt(id),
  });
  // console.log(curso[0]?.nombre);
  if (isLoading) {
    return (
      <div className="mt-12">
        <h1 className="text-3xl font-bold text-gray-900 flex animate-pulse space-x-4 bg-gray-300 h-10 rounded-lg"></h1>
        <p className="text-md text-gray-600 mt-1 flex animate-pulse space-x-4 bg-gray-200 h-10"></p>
      </div>
    );
  }
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold text-gray-900">{curso[0]?.nombre}</h1>
      <p className="text-md text-gray-600 mt-1">{curso[0]?.descripcion}</p>
    </div>
  );
}
