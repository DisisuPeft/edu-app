import { ChangeEvent, useState } from "react";

export default function useCreatePrograma() {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tipo: null, // ID
    institucion: null, // ID
    duracion_horas: 0,
    fecha_inicio: "",
    fecha_fin: "",
    horario: "",
    costo_inscripcion: 0.0,
    costo_mensualidad: 0.0,
    activo: 1,
    maestro: null, // ID
    modalidad: null, // ID

    // Relaciones hijas (listas vacías al crear)
    dirigido: [
      {
        nombre: "",
      },
    ],
    publico_objetivo: [
      {
        nombre: "",
        descripcion: "",
      },
    ],
    perfil_ingreso: [
      {
        descripcion: "",
        orden: 0,
      },
    ],
    requisitos_actitudinales: [
      {
        texto: "",
      },
    ],
    requisitos_deseables: [
      {
        texto: "",
      },
    ],
    enfoque_pedagogico: [
      {
        texto: "",
      },
    ],
    requisito_ingreso: [
      {
        texto: "",
        orden: 0,
      },
    ],
    requisito_permanencia: [
      {
        texto: "",
        orden: 0,
      },
    ],
    requisito_egreso: [
      {
        texto: "",
        orden: 0,
      },
    ],
    perfil_egreso: [
      {
        descripcion: "",
        orden: 0,
      },
    ],
    resultado_aplicacion: [
      {
        texto: "",
        orden: 0,
      },
    ],
    resultado_actualizacion: [
      {
        texto: "",
        orden: 0,
      },
    ],
    resultado_crecimiento: [
      {
        texto: "",
        orden: 0,
      },
    ],
    justificacion: [
      {
        contenido: "",
      },
    ],
    modulos: [
      {
        nombre: "",
        horas_teoricas: 0,
        horas_practicas: 0,
        horas_totales: 0,
        creditos: 0.0,
        calendario_modulo: [
          {
            periodo: "",
            numero_horas: 0,
            numero_semanas: 0,
          },
        ],
        submodulos: [
          {
            titulo: "",
            descripcion: "",
            orden: 0,
          },
        ],
      },
    ],
  });

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    // const checked = (event.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { formData, setFormData, onChange };
}
