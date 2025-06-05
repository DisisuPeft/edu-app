"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "/assets/img-landing/Diplomado-rehabilitación-de-la-articulación-temperomandibular-01.webp",
      subtitle: "",
      title: "Formamos profesionales que quieren marcar la diferencia.",
      description: "Descrubre todos nuestros diplomados",
      primaryButton: { text: "Explorar Diplomados", href: "/oferta-educativa" },
      secondaryButton: { text: "Inscríbete Ahora", href: "#" },
    },
    {
      image: "/assets/img-landing/Diplomado-en-urgencias-médicas-01.webp",
      subtitle: "",
      title: "Diplomado en Urgencias Médicas",
      description:
        "Dirigido a profesionales y estudiantes del área de la salud, enfocado en la atención inmediata de emergencias médicas para salvar vidas y elevar la calidad del servicio en unidades médicas.",
      primaryButton: { text: "Explorar Diplomados", href: "/oferta-educativa" },
      secondaryButton: { text: "Inscríbete Ahora", href: "#" },
    },
    {
      image:
        "/assets/img-landing/Diplomado-nutrición-y-suplementación-en-la-salud-hormonal01.webp",
      subtitle: "",
      title: "Diplomado en Nutrición y suplementación en la salud hormonal",
      description:
        "Orientado al análisis del sistema hormonal y su vínculo con la nutrición, brindando herramientas para detectar desequilibrios y aplicar estrategias de alimentación y suplementación.",
      primaryButton: { text: "Explorar Diplomados", href: "/oferta-educativa" },
      secondaryButton: { text: "Más Información", href: "#" },
    },
    // {
    //   image:
    //     "/assets/img-landing/Diplomado-nutrición-y-suplementación-en-la-salud-hormonal01.webp",
    //   subtitle: "",
    //   title: "Diplomado en Síndrome de Down y Problemas de Aprendizaje",
    //   description:
    //     "Enfocado en el abordaje integral del síndrome de Down y problemas de aprendizaje, con herramientas teóricas y prácticas para impulsar un desarrollo inclusivo y personalizado.",
    //   primaryButton: { text: "Explorar Diplomados", href: "#" },
    //   secondaryButton: { text: "Más Información", href: "#" },
    // },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] mb-0 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <div className="relative w-full h-[650px] bg-black">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
            {/* <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={1500}
              height={500}
              className="object-cover mx-auto max-h-[600px] w-full"
              priority={index === 0}
            /> */}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[rgba(24,29,56,0.7)] flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  {/* Content with animations */}
                  <h5
                    className={`text-white text-lg md:text-xl uppercase mb-3 transform ${
                      currentSlide === index ? "animate-fadeInDown" : ""
                    }`}
                  >
                    {slide.subtitle}
                  </h5>
                  <h1
                    className={`text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4 transform ${
                      currentSlide === index
                        ? "animate-fadeInDown animation-delay-200"
                        : ""
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-white text-base md:text-lg mb-6 transform ${
                      currentSlide === index
                        ? "animate-fadeInDown animation-delay-400"
                        : ""
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-4 transform ${
                      currentSlide === index
                        ? "animate-fadeInUp animation-delay-600"
                        : ""
                    }`}
                  >
                    <Link
                      href={slide.primaryButton.href}
                      className="px-6 py-3 bg-[#121b6a] text-white font-medium rounded hover:bg-[#0a1050] transition-colors"
                    >
                      {slide.primaryButton.text}
                    </Link>
                    {/* <Link
                      href={slide.secondaryButton.href}
                      className="px-6 py-3 bg-white text-[#121b6a] font-medium rounded hover:bg-gray-100 transition-colors"
                    >
                      {slide.secondaryButton.text}
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="hidden md:flex absolute top-1/2 right-8 transform -translate-y-1/2 z-20 flex flex-col gap-3">
        <button
          onClick={goToPrevSlide}
          className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-[#121b6a] hover:border-[#121b6a] transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNextSlide}
          className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:bg-[#121b6a] hover:border-[#121b6a] transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
