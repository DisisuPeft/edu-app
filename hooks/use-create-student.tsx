import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateStudentMutation } from "@/redux/estudiante/studentApiSlice";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@/alerts/toast";

export default function useCreateStudent() {
  // const [entidad_id, setEntidad] = useState<number>()
  const [createStudent, { isLoading }] = useCreateStudentMutation();
  const [formData, setFormData] = useState({
    curp: "",
    matricula: "",
    lugar_nacimiento: "",
    direccion: "",
    tutor_nombre: "",
    tutor_telefono: "",
    activo: 0,
    // grupo: null,
    email: "",
    municipio: "",
    user: {
      email: "",
      roleID: [],
      permission: [],
    },
    profile: {
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      edad: "",
      fechaNacimiento: "",
      genero: 0,
      nivEdu: 0,
      telefono: "",
    },
  });
  const { data: municipios } = useRetrieveMunicipiosQuery(
    formData.lugar_nacimiento ? parseInt(formData.lugar_nacimiento) : 0
  );
  const reset = () => {
    setFormData({
      curp: "",
      matricula: "",
      lugar_nacimiento: "",
      direccion: "",
      tutor_nombre: "",
      tutor_telefono: "",
      activo: 0,
      // grupo: null,
      email: "",
      municipio: "",
      user: {
        email: "",
        roleID: [],
        permission: [],
      },
      profile: {
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        edad: "",
        fechaNacimiento: "",
        genero: 0,
        nivEdu: 0,
        telefono: "",
      },
    });
  };
  const onChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;
    const processedValue =
      type === "checkbox" && name === "activo"
        ? checked
          ? 1
          : 0
        : name === "curp" || name === "matricula"
        ? value.toUpperCase()
        : name === "profile.edad"
        ? parseInt(value) || ""
        : name === "profile.nivEdu" || name === "profile.genero"
        ? parseInt(value)
        : name === "lugar_nacimiento"
        ? parseInt(value)
        : name === "municipio"
        ? parseInt(value)
        : value;
    // console.log(entidad_id)
    // const { data: municipios } = useRetrieveMunicipiosQuery(entidad_id);
    const keys = name.split(".");
    // console.log(keys)
    if (keys.length === 2) {
      const [parentKey, childKey] = keys;
      setFormData((prevData) => ({
        ...prevData,
        [parentKey]: {
          ...prevData[parentKey],
          [childKey]: processedValue,
        },
      }));
    } else {
      // if (type === "checkbox" && name === "activo"){
      //   const checked = (event.target as HTMLInputElement).checked;
      // const id = name ===
      // const {data:municipios} = useRetrieveMunicipiosQuery(formData.lugar_nacimiento ? parseInt(formData.lugar_nacimiento) : 0)
      // console.log(entidad_id)
      setFormData((prevData) => ({
        ...prevData,
        // municipio:
        [name]: processedValue,
      }));
    }
    // }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(formData)
    createStudent(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
        reset();
        Alert({ title: "Exito", text: res, icon: "success" });
      })
      .catch((error) => {
        // console.log(error)
        Alert({
          title: "Alerta",
          text:
            error?.data?.name[0] || error?.data?.description[0]
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
    municipios,
  };
}
