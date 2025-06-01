import { useState, ChangeEvent, FormEvent } from "react";

export default function createLead() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    interesado_en_id: "",
    estatus_id: "",
    etapa_id: "",
    fuente_id: "",
    vendedor_asignado_id: "",
    empresa_id: "",
    institucion_id: "",
    campania_id: "",
  });

  const reset = () => {
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      interesado_en_id: "",
      estatus_id: "",
      etapa_id: "",
      fuente_id: "",
      vendedor_asignado_id: "",
      empresa_id: "",
      institucion_id: "",
      campania_id: "",
    });
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const processValue = transformValue(name, value);
    setFormData({
      ...formData,
      [name]: processValue,
    });
  };
  const transformValue = (
    name: string,
    value: string,
    type?: string,
    checked?: boolean
  ) => {
    const castToIntFields = [
      "interesado_en_id",
      "estatus_id",
      "etapa_id",
      "fuente_id",
      "vendedor_asignado_id",
      "empresa_id",
      "institucion_id",
      "campania_id",
    ];

    if (castToIntFields.includes(name)) return parseInt(value);
    return value;
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // createLead(formData)
    //   .unwrap()
    //   .then((res) => {
    //     //     console.log(res);
    //     reset();
    //     Alert({ title: "Registrado", text: res, icon: "success" });
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //     Alert({
    //       title: "Alerta",
    //       text: error?.data
    //         ? "Uno o mas campos estan vacios"
    //         : "Error, sin respuesta del servidor",
    //       icon: "error",
    //     });
    //   });
  };

  return {
    formData,
    onChange,
    onSubmit,
    reset,
  };
}
