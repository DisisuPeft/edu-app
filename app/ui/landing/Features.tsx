import { GraduationCap, Award, Clock } from "lucide-react"
// const features = [
//     {
//       icon: <Map className="h-8 w-8 text-blue-600" />,
//       title: "Mapeo inteligente",
//       description: "Visualiza y optimiza tus rutas con nuestro sistema de mapeo avanzado.",
//     },
//     {
//       icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
//       title: "Análisis de eficiencia",
//       description: "Obtén insights detallados sobre el rendimiento de tus rutas y conductores.",
//     },
//     {
//       icon: <Clock className="h-8 w-8 text-blue-600" />,
//       title: "Ahorro de tiempo",
//       description: "Reduce el tiempo de planificación y maximiza la eficiencia de tus entregas.",
//     },
//     {
//       icon: <Shield className="h-8 w-8 text-blue-600" />,
//       title: "Seguridad de datos",
//       description: "Tus datos están seguros con nuestro sistema de encriptación de última generación.",
//     },
// ]

export default function FeaturesSection() {
    return (
      <section id="features" className="container mx-auto px-4 py-16 h-[340px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center hover:shadow-xl hover:-translate-y-2
                                transition-all duration-300 ease-in-out bg-white p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-[#121829]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Profesores Expertos</h3>
              <p className="text-gray-700">Aprende de profesionales con amplia experiencia en la industria</p>
          </div>
          <div className="text-center hover:shadow-xl hover:-translate-y-2
                                transition-all duration-300 ease-in-out bg-white p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#121829]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Horarios Flexibles</h3>
              <p className="text-gray-700">Estudia a tu ritmo y adapta el aprendizaje a tu agenda</p>
          </div>
          <div className="text-center hover:shadow-xl hover:-translate-y-2
                                transition-all duration-300 ease-in-out bg-white p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#121829]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Certificación Oficial</h3>
              <p className="text-gray-700">Obtén certificados reconocidos en la industria</p>
          </div>
        </div>
      </section>
    )
}