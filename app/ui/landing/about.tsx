"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Globe,
  Target,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      text: "Docentes especializados con experiencia real",
    },
    {
      icon: Globe,
      text: "Programas 100% en línea",
    },
    {
      icon: Target,
      text: "Enfoque práctico y profesionalizante",
    },
    {
      icon: Award,
      text: "Certificación con validez nacional",
    },
    {
      icon: BookOpen,
      text: "Actualización académica constante",
    },
    {
      icon: CheckCircle,
      text: "Formación con impacto social",
    },
  ];

  const stats = [
    { number: "40+", label: "Años de experiencia" },
    { number: "15,000+", label: "Egresados exitosos" },
    { number: "50+", label: "Programas académicos" },
    { number: "95%", label: "Satisfacción estudiantil" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={imageVariants}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/logos/unsza_logo.webp"
                alt="Campus Universidad Nacional Salvador Zubirán Anchondo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121b6a]/60 via-transparent to-transparent" />

              {/* Floating Stats Card */}
              {/* <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-[#121b6a]">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div> */}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#a20519] to-[#121b6a] rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#121b6a] to-[#a20519] rounded-full opacity-30"
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="order-1 lg:order-2" variants={itemVariants}>
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-[#121b6a]/10 to-[#a20519]/10 text-[#121b6a] text-sm font-semibold px-4 py-2 rounded-full mb-6 border-l-4 border-[#121b6a]"
              variants={itemVariants}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Sobre Nosotros
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121829] mb-6 leading-tight"
              variants={itemVariants}
            >
              Universidad Nacional
              <span className="block text-[#a20519]">
                Salvador Zubirán Anchondo
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              <p className="text-gray-600 text-lg leading-relaxed">
                En UNSZA, creemos en la transformación social a través de la
                educación superior de excelencia. Somos una institución
                comprometida con la formación de profesionales altamente
                capacitados mediante programas académicos innovadores.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestro compromiso trasciende las aulas: impulsamos la
                investigación, el desarrollo integral y la actualización
                continua, brindando oportunidades reales de crecimiento en áreas
                estratégicas como salud, educación, tecnología y ciencias
                humanas.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#121b6a] to-[#a20519] rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium group-hover:text-[#121b6a] transition-colors duration-200">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            {/* <motion.div
              className="grid grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-xl"
              variants={itemVariants}
            >
              {stats.slice(2).map((_stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-[#121b6a] mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about-us"
                  className="inline-flex items-center bg-[#121b6a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0f1654] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Conocenos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/oferta-educativa"
                  className="inline-flex items-center bg-white text-[#121b6a] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#121b6a] hover:bg-[#121b6a] hover:text-white transition-all duration-300 group"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Ver oferta educativa
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center mt-8 pt-6 border-t border-gray-200"
              variants={itemVariants}
            >
              <div className="flex items-center text-sm text-gray-500">
                <Award className="w-4 h-4 mr-2 text-[#a20519]" />
                Programa con validez oficial
              </div>
              <div className="mx-4 w-1 h-4 bg-gray-300 rounded-full" />
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 mr-2 text-[#a20519]" />
                RVOE ante SEP
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
