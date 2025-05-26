import { GraduationCap, Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import CallToSuscribe from "../ready-to";

export default function EducationalOfferingsSection() {
  // Array of diplomados data
  const diplomados = [
    {
      id: 1,
      title: "Diplomado en Urgencias Médicas",
      description:
        "Diseñado para quienes enfrentan el reto diario de salvar vidas, este programa responde a una necesidad urgente en nuestro sistema de salud: formar profesionales capaces de actuar con decisión frente a situaciones críticas, elevando así la calidad y dignidad de la atención médica en todo el país.",
      duration: "6 meses",
      // students: "150+",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "Diplomado en Nutrición y suplementación en la salud hormonal",
      description:
        "Este diplomado capacita a profesionales en el arte y la ciencia de comprender el sistema hormonal como un reflejo integral del cuerpo y el entorno. A través de herramientas clínicas, nutricionales y bioquímicas, los participantes aprenden a identificar desequilibrios que impactan profundamente la salud, y a intervenir con precisión y conciencia.",
      duration: "6 meses",
      // students: "120+",
      icon: GraduationCap,
    },
    {
      id: 3,
      title: "Diplomado en Síndrome de Down y Problemas de Aprendizaje",
      description:
        "Este diplomado ofrece una mirada humana y especializada al síndrome de Down y a los retos del aprendizaje, formando profesionales y familias capaces de acompañar con empatía y conocimiento. Promueve un enfoque inclusivo que reconoce el valor único de cada persona y construye las bases para una sociedad verdaderamente equitativa.",
      duration: "6 meses",
      students: "100+",
      icon: GraduationCap,
    },
    // {
    //   id: 4,
    //   title: "Diplomado en Pediatría Avanzada",
    //   description:
    //     "Actualiza tus conocimientos en el cuidado integral del paciente pediátrico, desde neonatología hasta adolescencia, con enfoque multidisciplinario.",
    //   duration: "6 meses",
    //   students: "90+",
    //   icon: Users,
    // },
    // {
    //   id: 5,
    //   title: "Diplomado en Ginecología y Obstetricia",
    //   description:
    //     "Fortalece tus competencias en salud reproductiva femenina, atención obstétrica y procedimientos ginecológicos con las últimas técnicas.",
    //   duration: "6 meses",
    //   students: "110+",
    //   icon: Award,
    // },
    // {
    //   id: 6,
    //   title: "Diplomado en Traumatología y Ortopedia",
    //   description:
    //     "Domina el manejo de lesiones traumatológicas, técnicas quirúrgicas ortopédicas y rehabilitación integral del sistema musculoesquelético.",
    //   duration: "6 meses",
    //   students: "80+",
    //   icon: GraduationCap,
    // },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center py-10 mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121829] mb-4">
            Oferta Educativa
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diplomados en línea diseñados para transformar tu carrera
            profesional en el área de la salud.
          </p>
          <div className="w-24 h-1 bg-[#121b6a] mx-auto mt-6"></div>
        </div>

        {/* Diplomados Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {diplomados.map((diplomado) => (
            <div
              key={diplomado.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-[#121b6a]/10 rounded-full mb-4 group-hover:bg-[#121b6a] transition-colors duration-300">
                <diplomado.icon className="h-8 w-8 text-[#121b6a] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#121829] mb-3 leading-tight">
                {diplomado.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {diplomado.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{diplomado.duration}</span>
                </div>
                {/* <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{diplomado.students} estudiantes</span>
                </div> */}
              </div>

              {/* Button */}
              {/* <Link
                href="#"
                className="inline-block w-full text-center bg-[#121b6a] text-white px-4 py-2 rounded-lg hover:bg-[#0f1655] transition-colors duration-300 font-medium"
              >
                Conoce más
              </Link> */}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#121829] text-center mb-8">
            ¿Por qué elegir nuestros diplomados?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#121b6a] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#121829] mb-2">
                Certificación Oficial
              </h4>
              <p className="text-gray-600 text-sm">
                Diplomas con validez oficial y reconocimiento profesional
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a20519] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#121829] mb-2">
                Flexibilidad Horaria
              </h4>
              <p className="text-gray-600 text-sm">
                Estudia a tu ritmo con acceso 24/7 a nuestros tutores academicos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#121b6a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#121829] mb-2">
                Expertos Docentes
              </h4>
              <p className="text-gray-600 text-sm">
                Profesores especialistas con amplia experiencia clínica
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a20519] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#121829] mb-2">
                Contenido Actualizado
              </h4>
              <p className="text-gray-600 text-sm">
                Material didáctico basado en las últimas evidencias científicas
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <CallToSuscribe />

        {/* Contact Information */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-2">¿Tienes dudas? Contáctanos</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            {/* call to action wa.link */}
            <a
              href="tel:+525512345678"
              className="text-[#121b6a] hover:underline"
            >
              📞 Conectame con un asesor
            </a>
            <a
              href="mailto:info@unszn.edu.mx"
              className="text-[#121b6a] hover:underline"
            >
              ✉️ direccioncomercialunszn@gmail.com
            </a>
            {/* <a href="#" className="text-[#121b6a] hover:underline">
              💬 Chat en línea
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
