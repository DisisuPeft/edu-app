"use client";

import { useState, useContext } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash,
  Calendar,
  Target,
  Users,
  Megaphone,
} from "lucide-react";

import { useGetCampaniasQuery } from "@/redux/crm/crmApiSlice";

export default function CampanasList() {
  //   const { campanas, leads, addCampana, updateCampana, deleteCampana } = useContext(LeadContext)
  //   const [searchTerm, setSearchTerm] = useState("")
  //   const [showModal, setShowModal] = useState(false)
  //   const [currentCampana, setCurrentCampana] = useState<any>(null)
  const { data: campanias } = useGetCampaniasQuery();
  //   // Filtrar campañas basado en búsqueda
  //   const filteredCampanas = campanas.filter(
  //     (campana: any) =>
  //       campana.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       campana.descripcion.toLowerCase().includes(searchTerm.toLowerCase()),
  //   )

  //   const handleEdit = (campana: any) => {
  //     setCurrentCampana(campana)
  //     setShowModal(true)
  //   }

  //   const handleDelete = (id: string) => {
  //     if (window.confirm("¿Estás seguro de que deseas eliminar esta campaña?")) {
  //       deleteCampana(id)
  //     }
  //   }

  //   const handleCloseModal = () => {
  //     setShowModal(false)
  //     setCurrentCampana(null)
  //   }

  //   const handleSaveCampana = (campana: any) => {
  //     if (currentCampana) {
  //       updateCampana(campana)
  //     } else {
  //       addCampana(campana)
  //     }
  //     handleCloseModal()
  //   }

  //   // Función para obtener el número de leads asignados a una campaña
  //   const getLeadsCount = (campanaId: string) => {
  //     return leads.filter((lead: any) => lead.campana === campanaId).length
  //   }

  //   // Función para determinar el estado de la campaña
  //   const getCampanaStatus = (fechaInicio: string, fechaFin: string) => {
  //     const now = new Date()
  //     const inicio = new Date(fechaInicio)
  //     const fin = new Date(fechaFin)

  //     if (now < inicio) return { status: "Programada", color: "bg-blue-100 text-blue-800" }
  //     if (now >= inicio && now <= fin) return { status: "Activa", color: "bg-green-100 text-green-800" }
  //     return { status: "Finalizada", color: "bg-gray-100 text-gray-800" }
  //   }

  return (
    <div>
      {/* Barra de acciones */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 text-gray-800">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Buscar campañas..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <button
          //   onClick={() => setShowModal(true)}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="mr-2 h-5 w-5" />
          Nueva Campaña
        </button>
      </div>

      {/* Grid de campañas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {filteredCampanas.map((campana: any) => {
          const { status, color } = getCampanaStatus(campana.fechaInicio, campana.fechaFin)
          const leadsCount = getLeadsCount(campana.id)

          return (
            <div
              key={campana.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{campana.nombre}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>{status}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{campana.descripcion}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(campana.fechaInicio).toLocaleDateString()} -{" "}
                      {new Date(campana.fechaFin).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Target className="h-4 w-4 mr-2" />
                    <span>Objetivo: {campana.objetivo || "No definido"}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{leadsCount} leads asignados</span>
                  </div>
                </div>

                {campana.programasAsociados && campana.programasAsociados.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Programas asociados:</p>
                    <div className="flex flex-wrap gap-1">
                      {campana.programasAsociados.slice(0, 2).map((programa: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                          {programa}
                        </span>
                      ))}
                      {campana.programasAsociados.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{campana.programasAsociados.length - 2} más
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {campana.presupuesto && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Presupuesto:</span> ${campana.presupuesto.toLocaleString()}
                    </p>
                  </div>
                )}

                <div className="flex justify-end space-x-2 pt-4 border-t">
                  <button
                    onClick={() => handleEdit(campana)}
                    className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(campana.id)}
                    className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )
        })} */}
      </div>

      {/* {filteredCampanas.length === 0 && (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <Megaphone className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500">
            No se encontraron campañas con los criterios de búsqueda.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Crear primera campaña
          </button>
        </div>
      )} */}

      {/* Modal de creación/edición */}
      {/* {showModal && (
        <CampanaModal
          campana={currentCampana}
          onClose={handleCloseModal}
          onSave={handleSaveCampana}
        />
      )} */}
    </div>
  );
}
