// import { AlertTriangle } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8">
        {/* Icono grande de mantenimiento */}
        <div className="flex justify-center">
          <div className="bg-red-500 rounded-full p-8 sm:p-10 md:p-12 shadow-2xl">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Título principal */}
        <div className="space-y-3 sm:space-y-4 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-500 leading-tight">
            En Mantenimiento
          </h1>
          <div className="h-1.5 sm:h-2 w-24 sm:w-32 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Descripción */}
        <div className="space-y-3 sm:space-y-4 px-4">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
            Estamos trabajando para mejorar tu experiencia
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Nuestra plataforma educativa está temporalmente fuera de servicio
            mientras realizamos actualizaciones importantes. Volveremos pronto
            con mejoras increíbles.
          </p>
        </div>

        {/* Información adicional */}
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3 mx-4">
          <p className="text-red-700 font-semibold text-base sm:text-lg">
            ⏰ Tiempo estimado de regreso
          </p>
          <p className="text-red-600 text-sm sm:text-base">
            Estaremos de vuelta en las próximas horas
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 sm:pt-8 px-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            Gracias por tu paciencia y comprensión
          </p>
        </div>
      </div>
    </div>
  );
}
