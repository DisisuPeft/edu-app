"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  Award,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: GraduationCap,
      title: "Docentes Especializados",
      description:
        "Formación impartida por profesionales con experiencia y actualización constante en su campo de expertise.",
    },
    {
      icon: Globe,
      title: "Formación Integral",
      description:
        "Educación con enfoque humano, profesional y ético que trasciende las aulas universitarias.",
    },
    {
      icon: Target,
      title: "Enfoque Profesionalizante",
      description:
        "Programas orientados al ejercicio laboral real y competitivo en el mercado actual.",
    },
    {
      icon: BookOpen,
      title: "Excelencia Académica",
      description:
        "Programas diseñados para formar líderes altamente capacitados y comprometidos con la sociedad.",
    },
    {
      icon: Users,
      title: "Comunidad Académica",
      description:
        "Red de estudiantes, egresados y profesionales que enriquecen la experiencia educativa.",
    },
    {
      icon: Award,
      title: "Certificación Reconocida",
      description:
        "Títulos y certificaciones con reconocimiento nacional e internacional en el sector educativo.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Educativa",
      description:
        "Metodologías pedagógicas modernas que integran tecnología y práctica profesional.",
    },
    {
      icon: Heart,
      title: "Compromiso Social",
      description:
        "Formación de profesionales comprometidos con el desarrollo sostenible y la responsabilidad social.",
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
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Servicios Académicos
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#a20519] to-[#121b6a] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Descubre los pilares fundamentales que hacen de UNSZA una
            institución de excelencia académica, comprometida con la formación
            integral de profesionales líderes.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 text-center h-full flex flex-col justify-between transition-all duration-500 group-hover:bg-[#a20519] border border-gray-100 hover:border-[#a20519]/20"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(162, 5, 25, 0.15)",
                }}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-[#a20519]/10 to-[#121b6a]/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-500"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon
                      className="w-8 h-8 text-[#a20519] group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="w-8 h-0.5 bg-white/50 mx-auto rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#a20519] to-[#121b6a] rounded-2xl p-8 md:p-12 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para formar parte de nuestra comunidad académica?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Únete a miles de estudiantes que han transformado su futuro
              profesional con nosotros.
            </p>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#a20519] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Información
            </motion.a>
            {/* <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#a20519] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(162, 5, 25, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src="/assets/logos/icons8-whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="object-contain"
              />
              Habla con un asesor
            </motion.a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
