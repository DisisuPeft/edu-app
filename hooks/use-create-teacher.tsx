import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateTeacherMutation } from "@/redux/maestro/teacherApiSlice";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@/alerts/toast";

export default function useCreateTeacher() {
  // const [entidad_id, setEntidad] = useState<number>()
  const [createTeacher, { isLoading }] = useCreateTeacherMutation();
  const [formData, setFormData] = useState({
    curp: "",
    rfc: "",
    especialidad: "", // ID de la especialidad
    fecha_ingreso: "",
    numero_colaborador: "",
    telefono: "",
    direccion: "",
    email: "",
    estado: "", // ID del estado
    municipio: "", // ID del municipio
    estatus: "", // ID del estatus maestro
    activo: 0,
    user: {
      email: "",
      roleID: [], // O ID del rol seleccionado
      permission: [], // O lista de permisos
    },
    perfil: {
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      edad: "",
      fechaNacimiento: "",
      genero: 0,
      nivEdu: 0,
      telefono: "", // Puede estar duplicado con `telefono`, decide cuál usar
    },
  });
  const { data: municipios } = useRetrieveMunicipiosQuery(
    formData.estado ? parseInt(formData.estado) : 0
  );
  const reset = () => {
    setFormData({
      curp: "",
      rfc: "",
      especialidad: "", // ID de la especialidad
      fecha_ingreso: "",
      numero_colaborador: "",
      telefono: "",
      direccion: "",
      email: "",
      estado: "", // ID del estado
      municipio: "", // ID del municipio
      estatus: "", // ID del estatus maestro
      activo: 0,
      user: {
        email: "",
        roleID: [], // O ID del rol seleccionado
        permission: [], // O lista de permisos
      },
      perfil: {
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        edad: "",
        fechaNacimiento: "",
        genero: 0,
        nivEdu: 0,
        telefono: "", // Puede estar duplicado con `telefono`, decide cuál usar
      },
    });
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const processedValue = transformValue(name, value, type, checked);
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
  const transformValue = (
    name: string,
    value: string,
    type: string,
    checked: boolean
  ) => {
    const castToIntFields = [
      "estado",
      "municipio",
      "estatus",
      "especialidad",
      "perfil.edad",
      "perfil.genero",
      "perfil.nivEdu",
    ];

    if (type === "checkbox" && name === "activo") return checked ? 1 : 0;
    if (["curp", "rfc"].includes(name)) return value.toUpperCase();
    if (castToIntFields.includes(name)) return parseInt(value);
    return value;
  };
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
    // reset,
    municipios,
  };
}
