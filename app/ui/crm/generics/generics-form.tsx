import useGenericsForm from "@/hooks/leads/use-form-generis";
import { X } from "lucide-react";
// import { useState } from "react";
type ItemType = {
  id: number | null | undefined;
  nombre: string | null | undefined;
};
interface Props {
  tipo: string;
  item?: ItemType;
  onClose: (close: boolean) => void;
}
export default function GenericsForm({ tipo, item, onClose }: Props) {
  const { formData, onChange, onSubmit } = useGenericsForm(tipo, item);

  return (
    <div className="flex items-center justify-center p-4 text-gray-800">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">
            {item
              ? `Editar ${tipo === "fuente" ? "Fuente" : "Estatus"}`
              : `Crear ${tipo === "fuente" ? "Fuente" : "Estatus"}`}
          </h2>
          <button
            onClick={() => onClose(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={onChange}
              className="w-full p-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-blue-600"
            >
              {item ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
