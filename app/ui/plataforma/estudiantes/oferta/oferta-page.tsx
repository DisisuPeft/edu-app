"use client";

import Image from "next/image";
import { useGetOfertaQuery } from "@/redux/control-escolar/programas-educativos/programApiSlice";
import { ProgramaType } from "@/redux/control-escolar/programas-educativos/types";

export default function DiplomasCatalog() {
  // Si en el futuro usas API, reemplaza `diplomas` por tu hook/consulta
  const { data: diplomasData } = useGetOfertaQuery();

  //   const diplomas: Diploma[] = diplomasData as Diploma[];

  //   const categorias = useMemo(() => {
  //     const setCats = new Set<string>();
  //     diplomasData?.forEach((d) => setCats.add(d.categoria ?? "Sin categoría"));
  //     return ["Todas", ...Array.from(setCats)];
  //   }, [diplomasData]);

  //   const filtered = useMemo(() => {
  //     const q = query.trim().toLowerCase();
  //     return diplomasData?.filter((d) => {
  //       if (
  //         categoria !== "Todas" &&
  //         (d.categoria ?? "Sin categoría") !== categoria
  //       )
  //         return false;
  //       if (soloAbiertos && !d.inscripcion_abierta) return false;
  //       if (!q) return true;
  //       return (
  //         (d.nombre ?? "").toLowerCase().includes(q) ||
  //         (d.descripcion ?? "").toLowerCase().includes(q) ||
  //         (d.tipo ?? "").toLowerCase().includes(q)
  //       );
  //     });
  //   }, [diplomas, query, categoria, soloAbiertos]);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Diplomados ofertados
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Explora los diplomados disponibles en la universidad.
              Inscripciones abiertas se muestran primero.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* <div className="relative">
              <input
                type="search"
                aria-label="Buscar diplomados"
                placeholder="Buscar por nombre, descripción o tipo..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-72 md:w-96 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#a20519]/30"
              />
            </div> */}

            {/* <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white"
              aria-label="Filtrar por categoría"
            >
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select> */}

            {/* <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={soloAbiertos}
                onChange={(e) => setSoloAbiertos(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span>Solo inscripciones abiertas</span>
            </label> */}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {diplomasData?.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-700">
                No se encontraron diplomados que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            diplomasData?.map((d) => <DiplomaCard key={d.id} diploma={d} />)
            // <div>hola</div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */
function DiplomaCard({ diploma }: { diploma: ProgramaType }) {
  const { id, nombre, descripcion, imagen_url, tipo, duracion } = diploma;

  const handleClick = () => {
    const phone = "+529615805154";
    const message = `Hola, me interesa el programa ${nombre}, ¿podrías darme más información?`;
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <article
      className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden"
      aria-labelledby={`dipl-${id}-title`}
    >
      <div className="relative h-44 w-full bg-gray-100">
        <Image
          src={imagen_url || "/images/default-course.jpg"}
          alt={nombre}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, 320px"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          {tipo && (
            <span className={`text-xs font-medium px-2 py-1 rounded-md`}>
              {tipo}
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3
          id={`dipl-${id}-title`}
          className="text-lg font-semibold text-gray-900 line-clamp-2"
        >
          {nombre}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{descripcion}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-4">
            {duracion && (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 7v5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>{duracion}</span>
              </span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md bg-[#a20519] text-white hover:bg-red-600 transition"
            aria-label={`Ver ${nombre}`}
          >
            Ver oferta
          </button>
        </div>
      </div>
    </article>
  );
}
