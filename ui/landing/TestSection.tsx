import { GraduationCap, BookOpen, Award, Clock, ChevronRight } from "lucide-react";
export default function TestSection() {
  const cursos = [
    {
      titulo: "Diplomado en urgencias medicas",
      duracion: "6 meses",
      precio: "$599",
      descripcion: "Aprende las últimas estrategias de atencion en urgencias medicas.",
      icono: <GraduationCap className="w-6 h-6" />
    },
    {
      titulo: "Diplomado en enfermeria asistida",
      duracion: "6 meses",
      precio: "$399",
      descripcion: "Domina la atencion medica asistida cuando el paciente se encuentra en una cirugia, asistes y produces.",
      icono: <BookOpen className="w-6 h-6" />
    },
    {
      titulo: "Certificación en medico de primer contacto",
      duracion: "6 meses",
      precio: "$299",
      descripcion: "Desarrolla habilidades esenciales para la gestión de proyectos.",
      icono: <Award className="w-6 h-6" />
    }
];
    return (
      <section id="cursos" className="py-[100px] bg-gray-100">
      <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cursos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cursos.map((curso) => (
              <div 
                  key={curso.titulo} 
                  className="bg-white rounded-lg shadow-md 
                              hover:shadow-xl hover:-translate-y-2
                              transition-all duration-300 ease-in-out"
              >
              {/* Header */}
                  <div className="p-6 border-b border-gray-200">
                      <div className="text-[#121829] mb-4">
                          {curso.icono}
                      </div>
                          <h3 className="text-xl font-semibold text-[#121829] mb-2">
                              {curso.titulo}
                          </h3>
                          <p className="text-sm text-[#121829] flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {curso.duracion}
                          </p>
                  </div>

                      {/* Content */}
                  <div className="p-6">
                      <p className="text-[#121829] mb-4">
                          {curso.descripcion}
                      </p>
                      <p className="text-3xl font-bold text-[#121829] mb-4">
                          {curso.precio}
                      </p>
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                      <button className="w-full bg-[#4b1804] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                          Inscríbete Ahora
                          <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                  </div>
              </div>
          ))}
          </div>
      </div>
  </section>
    )
  }