import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const features = [
    "Docentes especializados con experiencia real",
    "Diplomados 100% en línea y accesibles",
    "Enfoque práctico y profesionalizante",
    "Certificación con validez nacional",
    "Actualización académica constante",
    "Formación con impacto social",
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="relative h-64 md:h-80 lg:h-full min-h-[400px]">
            <Image
              src="/img/about.jpg"
              alt="Sobre nosotros"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Section Title */}
            <h6 className="inline-block bg-white text-[#121829] text-sm font-semibold px-3 py-1 mb-4 border-l-4 border-[#121b6a]">
              Sobre nosotros
            </h6>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#121829] mb-4 leading-tight">
              Bienvenido a la Universidad Nacional Salvador Zubirán Anchondo
            </h1>

            {/* Description Paragraphs */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              En UNSZA, creemos en la transformación social a través de la
              educación. Somos una institución que forma profesionales altamente
              capacitados mediante programas académicos de excelencia, con
              enfoque humano, científico y práctico.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Nuestro compromiso es impulsar la innovación, el desarrollo
              integral y la actualización continua, brindando oportunidades
              reales de crecimiento profesional en áreas clave como la salud, la
              educación y las ciencias humanas.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <ArrowRight className="text-[#121b6a] mr-2 h-4 w-4 flex-shrink-0" />
                  <p className="text-gray-700 text-sm md:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <Link
              href="/about-us"
              className="inline-block bg-[#121b6a] text-white py-3 px-6 rounded font-medium hover:bg-[#0a1050] transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-xl mt-2 w-fit"
            >
              Saber más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
