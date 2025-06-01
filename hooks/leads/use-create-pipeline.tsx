import { Pipeline } from "@/redux/interface/crm/crm";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useCreatePipelineMutation } from "@/redux/crm/crmApiSlice";
import { Alert } from "@/alerts/toast";
export default function createPipeline(pipeline?: Pipeline) {
  const [createPipeline, { isLoading }] = useCreatePipelineMutation();
  const [etapa, setNewEtapa] = useState<string>("");
  const [formData, setFormData] = useState({
    nombre: "",
    orden: 0,
    programa: "",
    unidad_academica: "",
    empresa: "",
    etapas: [],
  });

  const reset = () => {
    setFormData({
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
        nombre: pipeline?.nombre,
        orden: pipeline?.orden,
        programa: pipeline?.programa?.id,
        unidad_academica: pipeline?.unidad_academica?.id,
        empresa: pipeline?.empresa?.id,
        etapas: [...pipeline.etapas],
      });
    }
  }, [pipeline]);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    // const castToIntFields = [
    //   "interesado_en_id",
    //   "estatus_id",
    //   "etapa_id",
    //   "fuente_id",
    //   "vendedor_asignado_id",
    //   "empresa_id",
    //   "institucion_id",
    //   "campania_id",
    // ];
    const castToSplit = [
      "etapas.nombre",
      // "perfil.nivEdu",
      // "perfil.genero",
      // "lugar_nacimiento",
      // "municipio",
    ];
    if (castToSplit.includes(name)) return value;
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
    createPipeline(formData)
      .unwrap()
      .then((res) => {
        //     console.log(res);
        reset();
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
