"use client";

import { AlertTriangle } from "lucide-react";
import { Estudiante } from "@/redux/features/admin/types";

interface DeleteModalProps {
  estudiante?: Estudiante;
  onCancel?: () => void;
}

export function DeleteModal({ estudiante, onCancel }: DeleteModalProps) {
  const onConfirm = (id: number) => {
    console.log(`elminaste al estudiante con ID: ${id}`);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Confirmar Eliminación
            </h3>
            <p className="text-gray-600 text-sm">
              Esta acción no se puede deshacer.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          ¿Estás seguro de que deseas eliminar al usuario{" "}
          <strong>{estudiante?.user?.email}</strong>?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm(estudiante.id)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
