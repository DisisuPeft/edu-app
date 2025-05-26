"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Phone, Mail } from "lucide-react";
import useCreateLeadLanding from "@/hooks/use-create-lead-landing";

export default function LeadForm() {
  // Form state

  const { formData, onSubmit, onChange } = useCreateLeadLanding();
  // Available diplomados
  const diplomados = [
    { id: "1", name: "Diplomado en Urgencias Médicas" },
    { id: "2", name: "Diplomado en Nutrición y salud hormonal" },
    {
      id: "3",
      name: "Diplomado en Síndrome de Down y problemas de aprendizaje",
    },
    { id: "4", name: "Diplomado en Rehabilitación de la ATM" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-2xl text-gray-800">
        <div className="bg-white rounded-lg p-8 border border-gray-100">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#121829] mb-4">
              Completa el formulario y un asesor académico se pondrá en contacto
              contigo
            </h2>
            {/* <p className="text-gray-600">
              Completa el formulario y un asesor académico se pondrá en contacto
              contigo
            </p> */}
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={onChange}
                required
                aria-label="Nombre completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-[#121b6a] transition-colors"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            {/* Correo */}
            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo electrónico *
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={onChange}
                required
                aria-label="Correo electrónico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-[#121b6a] transition-colors"
                placeholder="ejemplo@correo.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={onChange}
                required
                aria-label="Número de teléfono"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-[#121b6a] transition-colors"
                placeholder="(55) 1234-5678"
                maxLength={10}
              />
            </div>

            {/* Diplomado de interés */}
            <div>
              <label
                htmlFor="interesado_en_id"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Diplomado de interés *
              </label>
              <select
                id="interesado_en"
                name="interesado_en"
                value={formData.interesado_en}
                onChange={onChange}
                required
                aria-label="Selecciona el diplomado de tu interés"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#121b6a] focus:border-[#121b6a] transition-colors"
              >
                <option value="">Selecciona un diplomado</option>
                {diplomados.map((diplomado) => (
                  <option key={diplomado.id} value={diplomado.id}>
                    {diplomado.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy Notice */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600">
                Al enviar este formulario, aceptas que la Universidad Nacional
                Salvador Zubirán Anchondo se ponga en contacto contigo para
                proporcionarte información sobre nuestros programas académicos.
                Tus datos serán tratados conforme a nuestra política de
                privacidad.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              //   disabled={isSubmitting}
              className="w-full bg-[#121b6a] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#0f1655] focus:ring-2 focus:ring-[#121b6a] focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              Enviar
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-2">
              ¿Tienes dudas? Contáctanos directamente:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              {/* call to action */}
              <p className="mb-2 flex items-center text-sm">
                <Phone className="mr-3 h-4 w-4 flex-shrink-0" />
                +52 (961) 580-5154
              </p>
              <p className="mb-2 flex items-center text-sm">
                <Mail className="mr-3 h-4 w-4 flex-shrink-0" />
                direccioncomercialunszn@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
