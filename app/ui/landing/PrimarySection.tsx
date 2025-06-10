"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "/assets/img-landing/Diplomado-rehabilitación-de-la-articulación-temperomandibular-01.webp",
      subtitle: "Excelencia Académica",
      title: "Formamos profesionales que quieren marcar la diferencia",
      description:
        "Descubre nuestros diplomados diseñados para transformar tu práctica profesional y ampliar tus horizontes académicos.",
      primaryButton: {
        text: "Explorar Diplomados",
        href: "/oferta-educativa",
      },
      secondaryButton: {
        text: "Conoce UNSZA",
        href: "/about-us",
      },
    },
    {
      image: "/assets/img-landing/Diplomado-en-urgencias-médicas-01.webp",
      subtitle: "Educación en Salud",
      title: "Diplomado en Urgencias Médicas",
      description:
        "Formación especializada para actuar de manera rápida y eficaz ante emergencias. Ideal para profesionales que buscan salvar vidas y mejorar la calidad del servicio médico.",
      primaryButton: {
        text: "Ver Programa",
        href: "/oferta-educativa",
      },
      secondaryButton: {
        text: "Inscríbete Ahora",
        href: "#cta",
      },
    },
    {
      image:
        "/assets/img-landing/Diplomado-nutrición-y-suplementación-en-la-salud-hormonal01.webp",
      subtitle: "Ciencia y Bienestar",
      title: "Diplomado en Nutrición y Salud Hormonal",
      description:
        "Analiza el sistema hormonal y aprende estrategias nutricionales para equilibrarlo. Ideal para quienes buscan aplicar conocimientos científicos al bienestar integral.",
      primaryButton: {
        text: "Más Información",
        href: "/oferta-educativa",
      },
      secondaryButton: {
        text: "Inscríbete",
        href: "#cta",
      },
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            currentSlide === index && (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* Background Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={90}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="max-w-4xl mx-auto text-center lg:text-left">
                        {/* Subtitle */}
                        <motion.h5
                          className="text-white/90 text-sm md:text-base lg:text-lg uppercase tracking-widest font-medium mb-4"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          {slide.subtitle}
                        </motion.h5>

                        {/* Main Title */}
                        <motion.h1
                          className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.4 }}
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          {slide.description}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 20px 40px rgba(18, 27, 106, 0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Link
                              href={slide.primaryButton.href}
                              className="inline-block px-8 py-4 bg-[#121b6a] text-white font-semibold text-lg rounded-lg hover:bg-[#0f1654] transition-all duration-300 shadow-lg"
                              role="button"
                              aria-label={slide.primaryButton.text}
                            >
                              {slide.primaryButton.text}
                            </Link>
                          </motion.div>

                          <motion.div
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Link
                              href={slide.secondaryButton.href}
                              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                              role="button"
                              aria-label={slide.secondaryButton.text}
                            >
                              {slide.secondaryButton.text}
                            </Link>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center pointer-events-none z-20">
        <motion.button
          onClick={goToPrevSlide}
          className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 pointer-events-auto"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Slide anterior"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNextSlide}
          className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 pointer-events-auto"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Siguiente slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              whileHover={{ scale: currentSlide === index ? 1.25 : 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          key={currentSlide}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm uppercase tracking-wider mb-2">Desliza</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
