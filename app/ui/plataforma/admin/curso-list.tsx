"use client";

// import { CursoCard } from "./curso-card";
import { useState } from "react";
import { useRetrieveDiplomadosQuery } from "@/redux/features/admin/adminApiSlice";
import Link from "next/link";
import Image from "next/image";

// export default function CursosList() {
//   const [page, setPage] = useState<number | null>(1);
//   const { data: cursos } = useGetPaginetedCursosQuery(page);

//   const handlePrevious = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   const handleNext = () => {
//     if (page < cursos.count) {
//       setPage(page + 1);
//     }
//   };

//   const totalPages = Math.ceil(cursos?.count / 10);

//   // console.log(totalPages);
//   return (
//     <div className="flex flex-col">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {cursos?.results.map((curso) => {
//           const path = `/plataforma/cursos/${curso.id}`;
//           return (
//             <CursoCard
//               key={curso.id}
//               title={curso.nombre}
//               description={curso.descripcion}
//               progress={50} //este va a cambiar
//               type={curso.tipo}
//               path={path}
//             />
//           );
//         })}
//       </div>
//       <section className="flex justify-end p-2">
//         <div className="flex justify-center gap-4 mt-4">
//           <button
//             onClick={handlePrevious}
//             disabled={page === 1}
//             className="px-4 py-2 bg-sky-500 rounded hover:bg-sky-700 disabled:opacity-50"
//           >
//             Anterior
//           </button>

//           <span className="text-sm text-gray-700 mt-2">
//             Página {page} de {totalPages}
//           </span>

//           <button
//             onClick={handleNext}
//             disabled={page === totalPages}
//             className="px-4 py-2 bg-sky-500 rounded hover:bg-sky-700 disabled:opacity-50"
//           >
//             Siguiente
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function DiplomadosPage() {
  // Datos de ejemplo - aquí conectarías tu lógica
  const [page, setPage] = useState<number | null>(1);
  const { data: cursos } = useRetrieveDiplomadosQuery({
    q: "",
    page: page,
    estudiante_id: null,
  });

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < cursos.count) {
      setPage(page + 1);
    }
  };

  const totalPages = Math.ceil(cursos?.count / 10);

  // const categorias = [
  //   "Todas",
  //   "Administración",
  //   "Marketing",
  //   "Finanzas",
  //   "Recursos Humanos",
  //   "Tecnología",
  //   "Sostenibilidad",
  // ];
  // const modalidades = ["Todas", "Virtual", "Presencial", "Híbrida"];
  // const niveles = ["Todos", "Básico", "Intermedio", "Avanzado"];

  return (
    <div className="text-black mt-12">
      {/* Header */}
      <header className="bg-card border-b-2 border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground font-sans">
                {"Diplomados Institucionales"}
              </h1>
              {/* <p className="text-muted mt-2 text-lg">
                <select
                  id="campaña"
                  name="campaña"
                  className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Seleccionar una campaña</option>

                </select>
              </p> */}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-secondary/10 px-4 py-2 rounded-lg">
                <span className="text-secondary font-semibold">
                  {cursos?.count}
                </span>
                <span className="text-muted ml-1">
                  {"programas disponibles"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            {/* <div className="flex-1">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar diplomados..."
                  className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-gray-600 text-foreground placeholder-muted"
                />
              </div>
            </div> */}

            {/* Filter Dropdowns */}
            {/* <div className="flex flex-col sm:flex-row gap-3">
              <select className="px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground min-w-[140px]">
                <option value="">Categoría</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>

              <select className="px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground min-w-[140px]">
                <option value="">Modalidad</option>
                {modalidades.map((modalidad) => (
                  <option key={modalidad} value={modalidad}>
                    {modalidad}
                  </option>
                ))}
              </select>

              <select className="px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground min-w-[120px]">
                <option value="">Nivel</option>
                {niveles.map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        {/* <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-foreground">
            {"Resultados"}{" "}
            <span className="text-muted">({diplomados.length})</span>
          </h2>
          <select className="px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
            <option value="relevancia">Ordenar por relevancia</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="duracion">Duración</option>
            <option value="nivel">Nivel</option>
          </select>
        </div> */}

        {/* Diplomados Grid */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos?.results?.map((programa) => (
              <article
                key={programa.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden h-full flex flex-col"
              >
                {/* Imagen de portada */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {programa.imagen_url ? (
                    <Image
                      src={programa.imagen_url} // URL absoluta o /ruta-local
                      alt={programa.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      priority={false}
                    />
                  ) : (
                    // Fallback si no hay imagen
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B48] via-[#40143e] to-[#9B1C31]" />
                  )}
                  {/* Overlay sutil para legibilidad del título si lo quisieras arriba */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#121829] mb-3 leading-tight group-hover:text-[#a20519] transition-colors duration-300">
                    {programa.nombre}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base line-clamp-4 mb-6">
                    {programa.descripcion}
                  </p>

                  {/* Botón / CTA opcional */}
                  <div className="mt-auto">
                    {/* Reemplaza href según tu routing */}
                    <Link
                      href={`/plataforma/diplomados/${programa.id}`}
                      className="inline-flex items-center gap-2 text-[#0D1B48] font-semibold hover:text-[#a20519] transition-colors"
                    >
                      Ver más
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Barra inferior animada */}
                <div className="h-1 bg-gradient-to-r from-[#121b6a] to-[#a20519] origin-left" />
              </article>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-red-400 disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="text-sm text-gray-700 mt-2">
              Página {page} de {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-red-400 disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{"Contacto"}</h3>
              <div className="space-y-2 text-muted">
                <p>{"📧 diplomados@institucion.edu"}</p>
                <p>{"📞 +1 (555) 123-4567"}</p>
                <p>{"📍 Av. Universidad 123, Ciudad"}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{"Información"}</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted hover:text-secondary transition-colors">
                  {"Proceso de inscripción"}
                </a>
                <a href="#" className="block text-muted hover:text-secondary transition-colors">
                  {"Becas y financiamiento"}
                </a>
                <a href="#" className="block text-muted hover:text-secondary transition-colors">
                  {"Certificaciones"}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{"Síguenos"}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted hover:text-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-muted hover:text-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-muted hover:text-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted">{"© 2024 Institución Educativa. Todos los derechos reservados."}</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
