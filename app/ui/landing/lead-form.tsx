"use client";

// import { useState } from "react";
import {
  // CheckCircle, AlertCircle, Loader2, Phone,
  Mail,
} from "lucide-react";
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
                <a
                  href="https://wa.link/xcxh5p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.974 7.974 0 0 0 8.003 0a7.998 7.998 0 0 0-6.703 12.184L0 16l3.891-1.277A7.974 7.974 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.122-.847-4.122-2.399-5.674zM8 14.5a6.47 6.47 0 0 1-3.272-.89l-.234-.138-2.305.756.756-2.305-.138-.234A6.47 6.47 0 0 1 1.5 8c0-3.584 2.916-6.5 6.5-6.5 1.736 0 3.368.675 4.6 1.899A6.468 6.468 0 0 1 14.5 8c0 3.584-2.916 6.5-6.5 6.5z" />
                    <path d="M11.107 9.113c-.158-.079-.934-.462-1.078-.515-.144-.054-.249-.079-.354.08-.105.158-.406.515-.498.62-.092.105-.184.118-.342.04-.158-.079-.666-.245-1.27-.78-.469-.417-.785-.933-.877-1.09-.092-.158-.01-.243.069-.322.071-.07.158-.184.237-.276.08-.092.105-.158.158-.263.053-.105.026-.197-.013-.276-.04-.079-.354-.855-.485-1.168-.127-.305-.258-.263-.354-.263-.092 0-.197-.013-.303-.013-.105 0-.276.04-.42.197-.144.158-.552.54-.552 1.31 0 .77.566 1.513.644 1.616.079.105 1.115 1.702 2.703 2.385.378.163.672.26.902.332.379.12.725.103.998.063.305-.046.934-.38 1.066-.746.131-.366.131-.679.092-.746-.04-.066-.144-.105-.303-.184z" />
                  </svg>
                  <span className="text-gray-800">Escríbenos por WhatsApp</span>
                </a>
              </p>
              <a
                href="mailto:direccioncomercialunszn@gmail.com"
                className="mb-2 flex items-center text-sm"
              >
                <Mail className="mr-3 h-4 w-4 flex-shrink-0" />
                direccioncomercialunszn@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
