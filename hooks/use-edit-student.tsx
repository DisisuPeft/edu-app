import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateStudentMutation } from "@/redux/estudiante/studentApiSlice";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@/alerts/toast";
import { useRetrieveEditStudentQuery } from "@/redux/estudiante/studentApiSlice";
import { useUpdateStudentMutation } from "@/redux/estudiante/studentApiSlice";

export default function useEditStudent(id: number) {
  // const [entidad_id, setEntidad] = useState<number>()
  const [updateStudent, { isLoading }] = useUpdateStudentMutation();
  const { data: estudiante } = useRetrieveEditStudentQuery(id);
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
    perfil: {
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
      perfil: {
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
  useEffect(() => {
    if (estudiante) {
      setFormData({
        ...estudiante,
        perfil: {
          nombre: estudiante?.perfil?.nombre,
          apellidoP: estudiante?.perfil?.apellidoP || "",
          apellidoM: estudiante?.perfil?.apellidoM || "",
          edad: estudiante?.perfil?.edad || "",
          fechaNacimiento: estudiante?.perfil?.fechaNacimiento || "",
          genero: estudiante?.perfil?.genero_info.id || null,
          nivEdu: estudiante?.perfil?.nivEdu_info.id || null,
          telefono: estudiante?.perfil?.telefono || "",
        },
        lugar_nacimiento: estudiante?.lugar_nacimiento?.id.toString() || "",
        municipio: estudiante.municipio?.id.toString() || "",
        tutor_nombre: estudiante?.tutor_nombre || "",
        tutor_telefono: estudiante?.tutor_telefono || "",
      });
    }
  }, [estudiante]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const processedValue =
      type === "checkbox" && name === "activo"
        ? checked
          ? 1
          : 0
        : ["curp", "matricula"].includes(name)
        ? value.toUpperCase()
        : [
            "perfil.edad",
            "perfil.nivEdu",
            "perfil.genero",
            "lugar_nacimiento",
            "municipio",
          ].includes(name)
        ? parseInt(value)
        : value;

    const keys = name.split(".");
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
      setFormData((prevData) => ({
        ...prevData,
        [name]: processedValue,
      }));
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    updateStudent(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
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
