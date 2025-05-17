import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateStudentMutation } from "@/redux/estudiante/studentApiSlice";

export default function useCreateStudent() {
  const [ createStudent, {isLoading} ] = useCreateStudentMutation();
  // const { data } = useGetUserEditQuery(i);
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
    municipio: null,
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
  // useEffect(() => {
  // console.log(data);
  // });
  // const {
  //   email,
  //   nombre,
  //   apellidoP,
  //   apellidoM,
  //   edad,
  //   fechaNacimiento,
  //   genero,
  //   nivEdu,
  //   telefono,
  // } = formData;
  //     // console.log(name, description)
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
      municipio: null,
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
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const processedValue =
      type === "checkbox" && name === "activo"
        ? checked
          ? 1
          : 0
        : name === "curp" || name === "matricula"
        ? value.toUpperCase()
        : name === "profile.edad" ? parseInt(value) || ""
        : name === "profile.nivEdu" || name === "profile.genero" ? parseInt(value) : name === "lugar_nacimiento" ? parseInt(value) :  value;

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
        setFormData((prevData) => ({
          ...prevData,
          [name]: processedValue,
        }));
      }
    // }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
    // createTask(formData)
    //   .unwrap()
    //   .then(() => {
    //     // console.log()
    //     reset();
    //     Toast({ message: "Tarea creada!", icon: "success" });
    //   })
    //   .catch((error) => {
    //     // console.log(error)
    //     Toast({
    //       message:
    //         error?.data?.name[0] || error?.data?.description[0]
    //           ? "Uno o mas campos estan vacios"
    //           : "Error, sin respuesta del servidor",
    //       icon: "error",
    //     });
    //   });
  };

  return {
    formData,
    isLoading,
    onChange,
    onSubmit,
    reset,
  };
}
