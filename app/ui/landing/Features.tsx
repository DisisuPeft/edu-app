import { GraduationCap, Globe, Home, BookOpen } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Docentes Especializados",
      description:
        "Formación impartida por profesionales con experiencia y actualización constante en su campo.",
    },
    {
      icon: Globe,
      title: "Formación Integral",
      description: "Educación con enfoque humano, profesional y ético.",
    },
    {
      icon: Home,
      title: "Enfoque Profesionalizante",
      description:
        "Diplomados orientados al ejercicio laboral real y competitivo.",
    },
    {
      icon: BookOpen,
      title: "Excelencia Académica",
      description:
        "Nuestros programas están diseñados para formar líderes altamente capacitados y comprometidos.",
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white shadow-md rounded-lg text-center pt-3 transition-all duration-500 group-hover:bg-[#a20519] group-hover:-translate-y-2 min-h-[260px]">
                <div className="p-4 flex flex-col justify-between h-full">
                  <service.icon
                    className="mx-auto mb-4 h-12 w-12 text-[#a20519] transition-colors duration-500 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                  <h5 className="mb-3 font-bold text-lg text-gray-800 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h5>
                  <p className="text-gray-600 transition-colors duration-500 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
