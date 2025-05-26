import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateTeacherMutation } from "@/redux/maestro/teacherApiSlice";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@/alerts/toast";

export default function useCreateLeadLanding() {
  // const [entidad_id, setEntidad] = useState<number>()
  const [createTeacher, { isLoading }] = useCreateTeacherMutation();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    interesado_en_id: "",
  });

  const reset = () => {
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      interesado_en_id: "",
    });
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
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
    // console.log(formData);
    createTeacher(formData)
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
    isLoading,
    onChange,
    onSubmit,
    reset,
  };
}
