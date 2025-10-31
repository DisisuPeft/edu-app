"use client";

import { useGetCursoPanelQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import Image from "next/image";

export default function CursoHeader({ id }: { id: string }) {
  const { data: curso, isLoading } = useGetCursoPanelQuery({
    id: parseInt(id),
  });
  // console.log(curso[0]?.nombre);
  return (
    <>
      {isLoading ? (
        <div className="relative mt-12 h-64 sm:h-72 w-full rounded-3xl overflow-hidden bg-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-60" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="h-9 w-3/4 bg-gray-400 rounded-md mb-3"></div>
            <div className="h-5 w-full max-w-[48rem] bg-gray-300 rounded-md"></div>
          </div>
        </div>
      ) : (
        <div className="relative mt-12 w-full rounded-3xl overflow-hidden shadow-xl">
          {/* Imagen de fondo */}
          <Image
            src={curso[0]?.imagen_url || "/images/default-course.jpg"}
            alt={curso[0]?.nombre || "Imagen del curso"}
            className="absolute inset-0 h-full w-full object-cover object-center"
            fill
          />

          {/* Overlay para contraste */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B48]/85 via-[#1a2d5f]/75 to-[#9B1C31]/60 md:to-[#9B1C31]/30" />

          {/* Contenido centrado */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-8 md:py-14">
            {/* Tarjeta tipo glass para mejorar lectura en títulos largos */}
            <div className="max-w-6xl">
              <div className="bg-white/10 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-5 sm:p-7 md:p-9 shadow-lg">
                <h1 className="text-white font-extrabold tracking-tight leading-tight text-balance text-3xl sm:text-4xl md:text-5xl">
                  {curso[0]?.nombre}
                </h1>
                {/* <p className="mt-3 text-gray-100/95 leading-relaxed text-sm sm:text-base md:text-lg max-w-4xl">
                  {curso[0]?.descripcion}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
