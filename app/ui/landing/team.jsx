"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Award,
  BookOpen,
} from "lucide-react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Carlos López",
      role: "Director Administrativo",
      department: "Administración",
      image: "/assets/fotos-team/carlos_unsza.webp",
      email: "carlos.lopez@unsza.edu.pe",
      phone: "+51 999 123 456",
      specialization: "Gestión Educativa",
      // experience: "15+ años",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 2,
      name: "Dr. Ricardo Hernández",
      role: "Director Operativo",
      department: "Administración",
      image: "/assets/fotos-team/ricardo.webp",
      email: "laura.molina@unsza.edu.pe",
      phone: "+51 999 123 457",
      specialization: "Pedagogía Digital",
      experience: "12+ años",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 3,
      name: "Lic. Leonardo Abadia",
      role: "Director comercial",
      department: "Ventas",
      image: "/assets/fotos-team/abadia_unsza.webp",
      email: "andrea.brindis@unsza.edu.pe",
      phone: "+51 999 123 459",
      specialization: "Psicología Educativa",
      experience: "10+ años",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 4,
      name: "Lic. Amayrani López",
      role: "Asesora Educativa",
      department: "Asesoría Académica",
      image: "/assets/fotos-team/ejecutivo_unsza.webp",
      email: "amayrani.lopez@unsza.edu.pe",
      phone: "+51 999 123 458",
      specialization: "Orientación Estudiantil",
      experience: "8+ años",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 5,
      name: "Lic. Carlos Cruz Arroyo",
      role: "Diseño",
      department: "Marketing y Diseño",
      image: "/assets/fotos-team/ejecutivo_2.webp",
      email: "grecia.palacios@unsza.edu.pe",
      phone: "+51 999 123 460",
      specialization: "Desarrollo Curricular",
      experience: "9+ años",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: 6,
      name: "Lic. Sofia Muñoz",
      role: "Líder de Marketing",
      department: "Marketing y Diseño",
      image: "/assets/fotos-team/marketing.webp",
      email: "miguel.hernandez@unsza.edu.pe",
      phone: "+51 999 123 461",
      specialization: "Investigación Educativa",
      experience: "18+ años",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center bg-white text-[#121829] text-sm font-semibold px-4 py-2 rounded-full mb-6 border-l-4 border-[#121b6a] shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="w-4 h-4 mr-2 text-[#121b6a]" />
            Nuestro Equipo
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121829] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expertos de la
            <span className="block text-[#a20519]">Educación</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Conoce a los profesionales comprometidos que hacen posible la
            excelencia académica en UNSZA, cada uno aportando su experiencia y
            dedicación para tu formación integral.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, _index) => (
            <motion.div
              key={member.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Social Links Overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex space-x-3">
                        <motion.a
                          href={member.social.linkedin}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#121b6a] hover:bg-[#121b6a] hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={member.social.twitter}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#121b6a] hover:bg-[#121b6a] hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Twitter de ${member.name}`}
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={member.social.facebook}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#121b6a] hover:bg-[#121b6a] hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Facebook de ${member.name}`}
                        >
                          <Facebook className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div> */}

                    {/* Experience Badge */}
                    {/* <div className="absolute top-4 right-4 bg-[#a20519] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {member.experience}
                    </div> */}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg text-[#121829] mb-1 group-hover:text-[#a20519] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#a20519] font-semibold text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-xs">{member.department}</p>
                  </div>

                  {/* Specialization */}
                  {/* <div className="flex items-center justify-center mb-4">
                    <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                      <BookOpen className="w-3 h-3 mr-1 text-[#121b6a]" />
                      <span className="text-xs text-gray-600">
                        {member.specialization}
                      </span>
                    </div>
                  </div> */}

                  {/* Contact Info */}
                  {/* <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center text-xs text-gray-500">
                      <Mail className="w-3 h-3 mr-2 text-[#121b6a]" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Phone className="w-3 h-3 mr-2 text-[#121b6a]" />
                      <span>{member.phone}</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#121b6a] to-[#a20519] rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Estamos siempre en búsqueda de profesionales talentosos y
              comprometidos con la educación de calidad.
            </p>
            <motion.button
              className="bg-white text-[#121b6a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Oportunidades
            </motion.button>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
