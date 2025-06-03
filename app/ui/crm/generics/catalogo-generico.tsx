"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash } from "lucide-react";
import {
  useGetEstatusQuery,
  useGetFuentesQuery,
} from "@/redux/crm/crmApiSlice";
import GenericsForm from "./generics-form";
import { Modal } from "@/app/components/common/Modal";

interface CatalogoGenericoProps {
  tipo: "fuente" | "estatus";
  titulo: string;
  descripcion: string;
}
type ItemType = {
  id: number | null | undefined;
  nombre: string | null | undefined;
};
export default function CatalogoGenerico({
  tipo,
  titulo,
  descripcion,
}: CatalogoGenericoProps) {
  const { data: estatus } = useGetEstatusQuery();
  const { data: fuentes } = useGetFuentesQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState<ItemType>();

  //   // Determinar qué datos y funciones usar según el tipo
  const items = tipo === "fuente" ? fuentes : estatus;
  //   console.log(items);
  //   const addItem = tipo === "fuente" ? addFuente : addEstatus;
  //   const updateItem = tipo === "fuente" ? updateFuente : updateEstatus;
  //   const deleteItem = tipo === "fuente" ? deleteFuente : deleteEstatus;

  // Filtrar items basado en búsqueda
  //   const filteredItems = items.filter((item) =>
  //     item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  const handleEdit = (item: ItemType) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  //   const handleDelete = (id: string) => {
  //     if (window.confirm(`¿Estás seguro de que deseas eliminar este ${tipo}?`)) {
  //       deleteItem(id);
  //     }
  //   };

  const handleCloseModal = (close: boolean) => {
    // console.log(close);
    setShowModal(close);
    setCurrentItem(undefined);
  };
  const close = () => {
    setShowModal(false);
    setCurrentItem(undefined);
  };

  //   const handleSaveItem = (item: any) => {
  //     if (currentItem) {
  //       updateItem(item);
  //     } else {
  //       addItem(item);
  //     }
  //     handleCloseModal();
  //   };

  return (
    <div className="text-gray-800">
      {/* Barra de acciones */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder={`Buscar ${titulo.toLowerCase()}...`}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="mr-2 h-5 w-5" />
          {`${tipo === "fuente" ? "Nueva Fuente" : "Nuevo Estatus"}`}
        </button>
      </div>

      {/* Descripción */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <p className="text-gray-600">{descripcion}</p>
      </div>

      {/* Lista de items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.nombre}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 text-indigo-600 hover:text-indigo-900"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  //   onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-600 hover:text-red-900"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items?.length === 0 && (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-gray-500">
            No se encontraron {titulo.toLowerCase()} con los criterios de
            búsqueda.
          </p>
        </div>
      )}

      {/* Modal de creación/edición */}
      {showModal && (
        <Modal show={showModal} onClose={close}>
          <GenericsForm
            tipo={tipo}
            item={currentItem}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
}
