"use client";

import {
  GraduationCap,
  Clock,
  Users,
  Award,
  BookOpen,
  Star,
  // CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import CallToSuscribe from "../ready-to";

// Custom hook for animation on scroll
const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = true; // Always visible for simplicity in this example

  return { ref, isVisible };
};

export default function EducationalOfferingsSection() {
  const { ref, isVisible } = useInView();

  // Array of diplomados data
  const diplomados = [
    {
      id: 1,
      title: "Diplomado en Urgencias Médicas",
      description:
        "Diseñado para quienes enfrentan el reto diario de salvar vidas, este programa responde a una necesidad urgente en nuestro sistema de salud: formar profesionales capaces de actuar con decisión frente a situaciones críticas, elevando así la calidad y dignidad de la atención médica en todo el país.",
      duration: "6 meses",
      icon: GraduationCap,
      featured: true,
    },
    {
      id: 2,
      title: "Diplomado en Nutrición y suplementación en la salud hormonal",
      description:
        "Este diplomado capacita a profesionales en el arte y la ciencia de comprender el sistema hormonal como un reflejo integral del cuerpo y el entorno. A través de herramientas clínicas, nutricionales y bioquímicas, los participantes aprenden a identificar desequilibrios que impactan profundamente la salud, y a intervenir con precisión y conciencia.",
      duration: "6 meses",
      icon: GraduationCap,
      featured: false,
    },
    {
      id: 3,
      title: "Diplomado en Síndrome de Down y Problemas de Aprendizaje",
      description:
        "Este diplomado ofrece una mirada humana y especializada al síndrome de Down y a los retos del aprendizaje, formando profesionales y familias capaces de acompañar con empatía y conocimiento. Promueve un enfoque inclusivo que reconoce el valor único de cada persona y construye las bases para una sociedad verdaderamente equitativa.",
      duration: "6 meses",
      students: "100+",
      icon: GraduationCap,
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#121b6a] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a20519] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#121829] text-sm font-semibold px-4 py-2 rounded-full mb-6 border-l-4 border-[#121b6a] shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BookOpen className="w-4 h-4 mr-2 text-[#121b6a]" />
            Formación Especializada
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121829] mb-6 leading-tight tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oferta
            <span className="block text-[#a20519]">Educativa</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Diplomados en línea diseñados para transformar tu carrera
            profesional en el área de la salud con metodologías innovadoras y
            contenido de vanguardia.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#121b6a] to-[#a20519] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {/* Diplomados Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {diplomados.map((diplomado) => (
            <motion.div
              key={diplomado.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-200 h-full flex flex-col relative overflow-hidden">
                {/* Featured Badge */}
                {diplomado.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#a20519] to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    <Star className="w-3 h-3 inline mr-1" />
                    Destacado
                  </div>
                )}

                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#121b6a]/10 to-[#a20519]/10 rounded-2xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#121b6a] group-hover:to-[#a20519] transition-all duration-500">
                  <diplomado.icon className="h-10 w-10 text-[#121b6a] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#121829] mb-4 leading-tight group-hover:text-[#a20519] transition-colors duration-300">
                    {diplomado.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-base line-clamp-4">
                    {diplomado.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-full">
                    <Clock className="h-4 w-4 mr-2 text-[#121b6a]" />
                    <span className="font-medium text-gray-700">
                      {diplomado.duration}
                    </span>
                  </div>
                  {/* {diplomado.students && (
                    <div className="flex items-center bg-[#a20519]/10 px-3 py-2 rounded-full">
                      <Users className="h-4 w-4 mr-2 text-[#a20519]" />
                      <span className="font-medium text-[#a20519]">
                        {diplomado.students}
                      </span>
                    </div>
                  )} */}
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#121b6a] to-[#a20519] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  initial={{ scaleX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#121829] text-center mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            ¿Por qué elegir nuestros diplomados?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {[
              {
                icon: GraduationCap,
                title: "Certificación Oficial",
                description: "RVOE ante SEP",
                color: "#121b6a",
              },
              {
                icon: Clock,
                title: "Flexibilidad Horaria",
                description:
                  "Estudia a tu ritmo con acceso a nuestros tutores académicos",
                color: "#a20519",
              },
              {
                icon: Users,
                title: "Expertos Docentes",
                description:
                  "Profesores especialistas con amplia experiencia clínica",
                color: "#121b6a",
              },
              {
                icon: Award,
                title: "Contenido Actualizado",
                description:
                  "Material didáctico basado en las últimas evidencias científicas",
                color: "#a20519",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, ${
                      feature.color === "#121b6a" ? "#1a2580" : "#c01122"
                    })`,
                  }}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-lg text-[#121829] mb-3 group-hover:text-[#a20519] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-700 text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <CallToSuscribe />
        </motion.div>

        {/* Contact Information */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        > */}
        {/* <p className="text-gray-600 mb-6 text-lg">
            ¿Tienes dudas? Contáctanos
          </p> */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6"> */}
        {/* <motion.a
              href="https://wa.link/xcxh5p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(37, 211, 102, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="mr-3 group-hover:animate-bounce"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.974 7.974 0 0 0 8.003 0a7.998 7.998 0 0 0-6.703 12.184L0 16l3.891-1.277A7.974 7.974 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.122-.847-4.122-2.399-5.674zM8 14.5a6.47 6.47 0 0 1-3.272-.89l-.234-.138-2.305.756.756-2.305-.138-.234A6.47 6.47 0 0 1 1.5 8c0-3.584 2.916-6.5 6.5-6.5 1.736 0 3.368.675 4.6 1.899A6.468 6.468 0 0 1 14.5 8c0 3.584-2.916 6.5-6.5 6.5z" />
                <path d="M11.107 9.113c-.158-.079-.934-.462-1.078-.515-.144-.054-.249-.079-.354.08-.105.158-.406.515-.498.62-.092.105-.184.118-.342.04-.158-.079-.666-.245-1.27-.78-.469-.417-.785-.933-.877-1.09-.092-.158-.01-.243.069-.322.071-.07.158-.184.237-.276.08-.092.105-.158.158-.263.053-.105.026-.197-.013-.276-.04-.079-.354-.855-.485-1.168-.127-.305-.258-.263-.354-.263-.092 0-.197-.013-.303-.013-.105 0-.276.04-.42.197-.144.158-.552.54-.552 1.31 0 .77.566 1.513.644 1.616.079.105 1.115 1.702 2.703 2.385.378.163.672.26.902.332.379.12.725.103.998.063.305-.046.934-.38 1.066-.746.131-.366.131-.679.092-.746-.04-.066-.144-.105-.303-.184z" />
              </svg>
              Conecta con tu ejecutivo por WhatsApp
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>
            </motion.a> */}
        {/* </div> */}

        {/* Trust Indicators */}
        {/* <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Respuesta inmediata
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Asesoría personalizada
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
              Sin compromiso
            </div>
          </motion.div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
