import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateTeacherMutation } from "@/redux/maestro/teacherApiSlice";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@/alerts/toast";
import { useCreateLeadMutation } from "@/redux/crm/crmApiSlice";

export default function useCreateLeadLanding() {
  const [createLead, { isLoading }] = useCreateLeadMutation();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    interesado_en: "",
  });

  const reset = () => {
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      interesado_en: "",
    });
  };
  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const processValue = name === "interesado_en" ? parseInt(value) : value;
    setFormData({
      ...formData,
      [name]: processValue,
    });
  };
  // const transformValue = (
  //   name: string,
  //   value: string,
  //   type: string,
  //   checked: boolean
  // ) => {
  //   const castToIntFields = [
  //     "estado",
  //     "municipio",
  //     "estatus",
  //     "especialidad",
  //     "perfil.edad",
  //     "perfil.genero",
  //     "perfil.nivEdu",
  //   ];

  //   if (type === "checkbox" && name === "activo") return checked ? 1 : 0;
  //   if (["curp", "rfc"].includes(name)) return value.toUpperCase();
  //   if (castToIntFields.includes(name)) return parseInt(value);
  //   return value;
  // };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createLead(formData)
      .unwrap()
      .then((res) => {
        //     console.log(res);
        reset();
        Alert({ title: "Registrado", text: res, icon: "success" });
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
    isLoading,
    onChange,
    onSubmit,
    reset,
  };
}
