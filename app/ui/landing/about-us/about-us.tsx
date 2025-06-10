"use client";

import { Target, Eye, Award, BookOpen, Users, Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

// Custom hook for animation on scroll
const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = true; // Always visible for simplicity in this example

  return { ref, isVisible };
};

export default function AboutUsSection() {
  const { ref, isVisible } = useInView();

  const strengths = [
    {
      title: "Formación especializada",
      description: "Diplomados diseñados por expertos del sector salud",
      color: "#121b6a",
      icon: BookOpen,
    },
    {
      title: "Modalidad 100% en línea",
      description: "Flexibilidad para estudiar desde cualquier lugar",
      color: "#a20519",
      icon: Users,
    },
    {
      title: "Acompañamiento cercano",
      description: "Atención personalizada durante todo el proceso",
      color: "#121b6a",
      icon: Heart,
    },
    {
      title: "En expansión",
      description: "Alianzas académicas y sector salud",
      color: "#a20519",
      icon: Award,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#121b6a] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a20519] rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl h-64 md:h-80 lg:h-full min-h-[500px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/logos/unsza_logo.webp"
              alt="Universidad Nacional Salvador Zubirán Anchondo"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121b6a]/80 via-transparent to-transparent"></div>

            {/* University Logo Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#121b6a] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div>
                  <h3 className="text-[#121b6a] font-bold text-sm">UNSZA</h3>
                  {/* <p className="text-xs text-gray-600">Est. 1985</p> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Section Subtitle */}
            <motion.div variants={itemVariants}>
              <h6 className="text-[#121829] text-sm font-bold uppercase tracking-widest mb-2 relative inline-flex items-center">
                <span className="bg-white px-4 py-2 rounded-full border-l-4 border-[#121b6a] shadow-sm">
                  <Award className="w-4 h-4 mr-2 inline text-[#121b6a]" />
                  Sobre nosotros
                </span>
              </h6>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121829] leading-tight"
              variants={itemVariants}
            >
              Universidad Nacional
              <span className="block text-[#a20519]">
                Salvador Zubirán Anchondo
              </span>
            </motion.h1>

            {/* Description Paragraphs */}
            <motion.div
              className="space-y-4 text-gray-700"
              variants={itemVariants}
            >
              <p className="text-lg leading-relaxed max-w-3xl">
                Somos una institución educativa comprometida con la excelencia
                académica y la formación integral de profesionales en el área de
                la salud. Con más de dos décadas de experiencia, nos hemos
                consolidado como una universidad de prestigio que combina la
                tradición educativa con la innovación tecnológica.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl">
                Nuestros programas académicos están diseñados para responder a
                las necesidades actuales del sector salud, ofreciendo una
                formación práctica y teórica que prepara a nuestros estudiantes
                para enfrentar los desafíos profesionales con competencia y
                ética.
              </p>
            </motion.div>

            {/* Mission and Vision Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
              variants={containerVariants}
            >
              {/* Mission */}
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#121b6a] hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#121b6a] to-[#1a2580] rounded-lg flex items-center justify-center shadow-lg">
                    <Target className="text-white h-6 w-6" />
                  </div>
                  <h5 className="font-bold text-xl text-[#121829] ml-4 tracking-wide">
                    Misión
                  </h5>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Formar profesionales altamente capacitados a través de
                  programas académicos de excelencia con actualización continua,
                  que impulsen la investigación, la innovación y el desarrollo
                  integral.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#a20519] hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a20519] to-[#c01122] rounded-lg flex items-center justify-center shadow-lg">
                    <Eye className="text-white h-6 w-6" />
                  </div>
                  <h5 className="font-bold text-xl text-[#121829] ml-4 tracking-wide">
                    Visión
                  </h5>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser una institución educativa de vanguardia, con excelencia en
                  la formación de profesionales altamente especializados,
                  reconocida a nivel nacional e internacional.
                </p>
              </motion.div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              className="bg-gradient-to-r from-[#121b6a]/10 to-[#a20519]/10 p-8 rounded-xl shadow-lg"
              variants={itemVariants}
            >
              <h5 className="font-bold text-xl text-[#121829] mb-6 tracking-wide">
                Nuestros Valores
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { letter: "E", name: "Excelencia", color: "#121b6a" },
                  { letter: "I", name: "Integridad", color: "#a20519" },
                  { letter: "R", name: "Responsabilidad", color: "#121b6a" },
                  { letter: "I", name: "Innovación", color: "#a20519" },
                  { letter: "C", name: "Compromiso", color: "#121b6a" },
                  { letter: "É", name: "Ética", color: "#a20519" },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${value.color}, ${
                          value.color === "#121b6a" ? "#1a2580" : "#c01122"
                        })`,
                      }}
                    >
                      <span className="text-white font-bold text-xl">
                        {value.letter}
                      </span>
                    </div>
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-[#a20519] transition-colors duration-300">
                      {value.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${
                        item.color === "#121b6a" ? "#1a2580" : "#c01122"
                      })`,
                    }}
                  >
                    <Icon className="text-white h-8 w-8" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-[#a20519] transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
