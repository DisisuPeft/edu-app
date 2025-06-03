"use client";
import { Target, Eye } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { useInView } from "../../animation/useInView";

export default function AboutUsSection() {
  const { ref, isVisible } = useInView();
  const strengths = [
    {
      title: "Formación especializada",
      description: "Diplomados diseñados por expertos del sector salud",
      color: "#121b6a",
    },
    {
      title: "Modalidad 100% en línea",
      description: "Flexibilidad para estudiar desde cualquier lugar",
      color: "#a20519",
    },
    {
      title: "Acompañamiento cercano",
      description: "Atención personalizada durante todo el proceso",
      color: "#121b6a",
    },
    {
      title: "En expansión",
      description: "Alianzas académicas y sector salud",
      color: "#a20519",
    },
  ];
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-opacity duration-400 ${
          isVisible ? "opacity-100 animate-fadeInDown" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-full min-h-[500px]">
            <Image
              src="/assets/logos/unsza_logo.webp"
              alt="Universidad Nacional Salvador Zubirán Anchondo"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Section Subtitle */}
            <div>
              <h6 className="text-[#121829] text-sm font-bold uppercase tracking-wider mb-2 relative inline-block">
                <span className="bg-white px-3 py-1 border-l-4 border-[#121b6a]">
                  Sobre nosotros
                </span>
              </h6>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#121829] leading-tight">
              Universidad Nacional Salvador Zubirán Anchondo
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-700">
              <p className="text-justify leading-relaxed">
                Somos una institución educativa comprometida con la excelencia
                académica y la formación integral de profesionales en el área de
                la salud. Con más de dos décadas de experiencia, nos hemos
                consolidado como una universidad de prestigio que combina la
                tradición educativa con la innovación tecnológica.
              </p>
              <p className="text-justify leading-relaxed">
                Nuestros programas académicos están diseñados para responder a
                las necesidades actuales del sector salud, ofreciendo una
                formación práctica y teórica que prepara a nuestros estudiantes
                para enfrentar los desafíos profesionales con competencia y
                ética.
              </p>
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Mission */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#121b6a]">
                <div className="flex items-center mb-3">
                  <Target className="text-[#121b6a] mr-3 h-6 w-6" />
                  <h5 className="font-bold text-lg text-[#121829]">Misión</h5>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  Formar profesionales altamente capacitados a través de
                  programas académicos de excelencia con actualización continua,
                  que impulsen la investigación, la innovación y el desarrollo
                  integral.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#a20519]">
                <div className="flex items-center mb-3">
                  <Eye className="text-[#a20519] mr-3 h-6 w-6" />
                  <h5 className="font-bold text-lg text-[#121829]">Visión</h5>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  Ser una institución educativa de vanguardia, con excelencia en
                  la formación de profesionales altamente especializados,
                  reconocida a nivel nacional e internacional.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-r from-[#121b6a]/5 to-[#a20519]/5 p-6 rounded-lg">
              <h5 className="font-bold text-lg text-[#121829] mb-4">
                Nuestros Valores
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#121b6a] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <span className="text-gray-700 font-medium">Excelencia</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#a20519] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">I</span>
                  </div>
                  <span className="text-gray-700 font-medium">Integridad</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#121b6a] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Responsabilidad
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#a20519] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">I</span>
                  </div>
                  <span className="text-gray-700 font-medium">Innovación</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#121b6a] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <span className="text-gray-700 font-medium">Compromiso</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#a20519] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">É</span>
                  </div>
                  <span className="text-gray-700 font-medium">Ética</span>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              {/* <Link
                href="#"
                className="inline-block bg-[#121b6a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0f1655] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Conoce más sobre nosotros
              </Link> */}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {strengths.map((item, index) => {
            return (
              <div
                key={index}
                // className="text-center bg-white p-6 rounded-lg shadow-sm"
                ref={ref}
                className={`text-center bg-white p-6 rounded-lg shadow-sm transition-opacity duration-400 ${
                  isVisible ? "opacity-100 animate-fadeInDown" : "opacity-0"
                }`}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </div>
                <div className="text-gray-600 text-sm">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
