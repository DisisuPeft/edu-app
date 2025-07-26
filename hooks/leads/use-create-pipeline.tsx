// import { Pipeline } from "@/redux/interface/crm/crm";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useCreatePipelineMutation } from "@/redux/crm/crmApiSlice";
import {
  useGetPipelinesQuery,
  useUpdatePipelineMutation,
} from "@/redux/crm/crmApiSlice";
import { Alert } from "@/alerts/toast";
import { PipelinesResponse } from "@/redux/crm/types";

export default function useCreatePipeline(pipeline?: PipelinesResponse) {
  const [createPipeline, { isLoading }] = useCreatePipelineMutation();
  const [updatePipeline] = useUpdatePipelineMutation();
  const { refetch } = useGetPipelinesQuery();
  const [etapa, setNewEtapa] = useState<string>("");
  const [formData, setFormData] = useState({
    id: null,
    nombre: "",
    orden: 0,
    programa: "",
    unidad_academica: "",
    empresa: "",
    etapas: [],
  });

  const reset = () => {
    setFormData({
      id: null,
      nombre: "",
      orden: 0,
      programa: "",
      unidad_academica: "",
      empresa: "",
      etapas: [],
    });
  };

  useEffect(() => {
    if (pipeline) {
      setFormData({
        id: pipeline.id,
        nombre: pipeline?.nombre,
        orden: pipeline?.orden,
        programa: String(pipeline?.programa?.id),
        unidad_academica: String(pipeline?.unidad_academica?.id),
        empresa: String(pipeline?.empresa?.id),
        etapas: [...pipeline.etapas],
      });
    }
  }, [pipeline]);
  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const processedValue = transformValue(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: processedValue,
    }));
  };
  const onEtapaChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const nuevasEtapas = [...prevData.etapas];
      const etapaActual = { ...nuevasEtapas[index] };
      etapaActual.nombre = value;
      nuevasEtapas[index] = etapaActual;

      return {
        ...prevData,
        etapas: nuevasEtapas,
      };
    });
  };
  const transformValue = (
    name: string,
    value: string,
    type?: string,
    checked?: boolean
  ) => {
    const castToIntFields = [
      "programa",
      "empresa",
      "unidad_academica",
      //   "fuente_id",
      //   "vendedor_asignado_id",
      //   "empresa_id",
      //   "institucion_id",
      //   "campania_id",
    ];
    // const castToSplit = [
    //   "etapas.nombre",
    // "perfil.nivEdu",
    // "perfil.genero",
    // "lugar_nacimiento",
    // "municipio",
    // ];
    // if (castToSplit.includes(name)) return value;
    if (castToIntFields.includes(name)) return parseInt(value);
    return value;
  };
  const handleMoveEtapa = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === formData.etapas.length - 1)
    ) {
      return;
    }

    const newEtapas = [...formData.etapas];
    const newIndex = direction === "up" ? index - 1 : index + 1;

    // Intercambiar elementos
    if (newIndex >= 0 && newIndex < newEtapas.length) {
      [newEtapas[index], newEtapas[newIndex]] = [
        newEtapas[newIndex],
        newEtapas[index],
      ];
    }
    const etapasActualizadas = newEtapas.map((etapa, i) => ({
      ...etapa,
      orden: i + 1, // puedes usar base 1 o base 0, según tu lógica
    }));

    setFormData({
      ...formData,
      etapas: etapasActualizadas,
    });
  };
  const handleAddEtapa = () => {
    setFormData((prevData) => {
      const nuevasEtapas = [...prevData.etapas];

      const nuevaEtapa = {
        id: null,
        nombre: etapa,
        orden: nuevasEtapas.length + 1,
      };

      return {
        ...prevData,
        etapas: [...nuevasEtapas, nuevaEtapa],
      };
    });
    setNewEtapa("");
  };
  const handleRemoveEtapa = (index: number) => {
    const newEtapas = [...formData.etapas];
    newEtapas.splice(index, 1);

    setFormData({
      ...formData,
      etapas: newEtapas,
    });
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    pipeline
      ? updatePipeline(formData)
          .unwrap()
          .then((res) => {
            refetch();
            Alert({ title: "Exito", text: res, icon: "success" });
          })
          .catch((error) => {
            // console.log(error);
            Alert({
              title: "Alerta",
              text: error?.data
                ? "Uno o mas campos estan vacios"
                : "Error, sin respuesta del servidor",
              icon: "error",
            });
          })
      : createPipeline(formData)
          .unwrap()
          .then((res) => {
            reset();
            refetch();
            Alert({ title: "Exito", text: res, icon: "success" });
          })
          .catch((error) => {
            // console.log(error);
            Alert({
              title: "Alerta",
              text: error?.data
                ? "Uno o mas campos estan vacios"
                : "Error, sin respuesta del servidor",
              icon: "error",
            });
          });
  };

  return {
    formData,
    onChange,
    onSubmit,
    reset,
    handleMoveEtapa,
    handleRemoveEtapa,
    setFormData,
    onEtapaChange,
    handleAddEtapa,
    etapa,
    setNewEtapa,
  };
}
