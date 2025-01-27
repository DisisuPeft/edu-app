import { Map, TrendingUp, Clock, Shield } from "lucide-react"

const features = [
    {
      icon: <Map className="h-8 w-8 text-blue-600" />,
      title: "Mapeo inteligente",
      description: "Visualiza y optimiza tus rutas con nuestro sistema de mapeo avanzado.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Análisis de eficiencia",
      description: "Obtén insights detallados sobre el rendimiento de tus rutas y conductores.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Ahorro de tiempo",
      description: "Reduce el tiempo de planificación y maximiza la eficiencia de tus entregas.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Seguridad de datos",
      description: "Tus datos están seguros con nuestro sistema de encriptación de última generación.",
    },
]

export default function FeaturesSection() {
    return (
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Características principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}