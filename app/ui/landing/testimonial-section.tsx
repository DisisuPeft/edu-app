"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "María García",
      profession: "Médico General",
      image: "/img/user.png",
      text: "El diplomado superó mis expectativas. Los profesores son expertos en su campo y el contenido es actualizado y relevante para mi práctica diaria.",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      profession: "Enfermero Especialista",
      image: "/img/user.png",
      text: "La flexibilidad de las clases en línea me permitió continuar trabajando mientras me especializaba. El material didáctico es excelente.",
    },
    {
      id: 3,
      name: "Ana Martínez",
      profession: "Estudiante de Medicina",
      image: "/img/user.png",
      text: "Como estudiante, estos cursos complementaron perfectamente mi formación universitaria. Los casos prácticos fueron especialmente útiles.",
    },
    {
      id: 4,
      name: "Roberto Sánchez",
      profession: "Cardiólogo",
      image: "/img/user.png",
      text: "La calidad académica es excepcional. He aplicado inmediatamente los conocimientos adquiridos en mi consulta diaria con excelentes resultados.",
    },
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Left Gradient Overlay (visible on large screens only) */}
      <div className="hidden lg:block absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Right Gradient Overlay (visible on large screens only) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="container mx-auto px-4 relative z-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h6 className="inline-block bg-white text-[#121829] text-sm font-semibold px-3 py-1 mb-4 border-l-4 border-[#121b6a]">
            Testimonios
          </h6>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121829] mb-5">
            ¡Nuestros estudiantes dicen!
          </h1>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          {/* Testimonial Items */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="text-center">
                {/* User Image */}
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full border-2 border-gray-200 p-1 object-cover"
                    sizes="80px"
                  />
                </div>

                {/* User Info */}
                <h5 className="font-bold text-lg text-[#121829] mb-1">
                  {testimonial.name}
                </h5>
                <p className="text-gray-600 mb-4">{testimonial.profession}</p>

                {/* Testimonial Text */}
                <div
                  className={`p-6 rounded-lg shadow-sm transition-all duration-500 ${
                    currentSlide === index
                      ? "bg-[#121b6a] text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <p className="mb-0 italic">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#121b6a] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
