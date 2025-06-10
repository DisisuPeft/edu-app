"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Send,
  User,
  AtSign,
  Building,
  Calendar,
  CheckCircle,
} from "lucide-react";

// Custom hook for animation on scroll
const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = true; // Always visible for simplicity in this example

  return { ref, isVisible };
};

export default function ContactSection() {
  const { ref, isVisible } = useInView();

  // WhatsApp configuration
  const whatsappNumber = "5219611234567"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa obtener información sobre los diplomados y programas académicos de UNSZA. ¿Podrían brindarme asesoría personalizada?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#121b6a] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a20519] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
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
            <MessageCircle className="w-4 h-4 mr-2 text-[#121b6a]" />
            Contacto Institucional
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121829] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Estamos aquí para
            <span className="block text-[#a20519]">ayudarte</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Nuestro equipo de asesores académicos está listo para resolver tus
            dudas y acompañarte en tu proceso de formación profesional.
            Contáctanos por el medio que prefieras.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#121b6a] to-[#a20519] mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Card */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#121b6a] to-[#1a2580] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#121829] ml-4">
                    Ubicación
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  7ª sur oriente #163
                  <br />
                  Col. Terán
                  <br />
                  Tuxtla Gutiérrez, Chiapas
                  <br />
                  C.P. 06000
                </p>
              </motion.div>

              {/* Schedule Card */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a20519] to-[#c01122] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#121829] ml-4">
                    Horarios
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium text-[#a20519]">Cerrado</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* WhatsApp CTA */}

            {/* Additional Contact Methods */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="tel:+525512345678"
                className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-[#121b6a]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#121b6a]" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-semibold text-[#121829]">
                    +52 55 1234 5678
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@unsza.edu.mx"
                className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-[#a20519]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#a20519]" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-[#121829]">
                    info@unsza.edu.mx
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div className="" variants={itemVariants}>
            <motion.div
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl p-8 text-white shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">
                    ¡Chatea con nosotros!
                  </h3>
                  <p className="text-white/90">
                    Respuesta inmediata por WhatsApp
                  </p>
                </div>
              </div>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#25D366] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 w-full justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar conversación
              </motion.a>
            </motion.div>
            {/* <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#121b6a] to-[#a20519] rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#121829] ml-4">
                Envíanos un mensaje
              </h3>
            </div> */}

            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-transparent transition-all duration-200"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="diplomados">
                    Información sobre diplomados
                  </option>
                  <option value="admisiones">Proceso de admisiones</option>
                  <option value="becas">Becas y financiamiento</option>
                  <option value="general">Consulta general</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#121b6a] to-[#a20519] text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-[#0f1654] hover:to-[#8a0415] transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(18, 27, 106, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 inline mr-2" />
                Enviar mensaje
              </motion.button>
            </form> */}

            {/* Trust Indicators */}
            {/* <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                  Respuesta en 24 horas
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                  Información confidencial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                  Asesoría personalizada
                </div>
              </div>
            </div> */}
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#121b6a] to-[#a20519] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-[#121829]">
                  Nuestra ubicación
                </h3>
                <p className="text-gray-600">
                  Visítanos en nuestras instalaciones
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9234567890123!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92c2c2c2c2c%3A0x1234567890abcdef!2sZócalo%2C%20Centro%20Histórico%2C%20Ciudad%20de%20México!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-[#121b6a] to-[#a20519] rounded-xl p-8 md:p-12 text-white">
            <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Prefieres visitarnos en persona?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nuestras puertas están abiertas para ti. Agenda una cita y conoce
              nuestras instalaciones.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#121b6a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar visita
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
