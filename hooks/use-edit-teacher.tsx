import { useState, ChangeEvent, FormEvent } from "react";

import { Toast } from "@/alerts/toast";
import { useEditUsersMutation } from "@/redux/sistema/SistemaApiSlice";
import { useGetUserEditQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";
import { useCreateStudentMutation } from "@/redux/estudiante/studentApiSlice";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@/alerts/toast";
import { useRetrieveEditTeacherQuery } from "@/redux/maestro/teacherApiSlice";
import { useUpdateTeacherMutation } from "@/redux/maestro/teacherApiSlice";

export default function useEditTeacher(id: number) {
  // const [entidad_id, setEntidad] = useState<number>()
  const [updateTeacher, { isLoading }] = useUpdateTeacherMutation();
  const { data: maestro } = useRetrieveEditTeacherQuery(id);
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
  useEffect(() => {
    if (maestro) {
      setFormData({
        ...maestro,
        perfil: {
          nombre: maestro?.perfil?.nombre,
          apellidoP: maestro?.perfil?.apellidoP || "",
          apellidoM: maestro?.perfil?.apellidoM || "",
          edad: maestro?.perfil?.edad || "",
          fechaNacimiento: maestro?.perfil?.fechaNacimiento || "",
          genero: maestro?.perfil?.genero_info.id || null,
          nivEdu: maestro?.perfil?.nivEdu_info.id || null,
          telefono: maestro?.perfil?.telefono || "",
        },
        lugar_nacimiento: maestro?.estado?.toString() || "",
        municipio: maestro.municipio?.toString() || "",
        // tutor_nombre: maestro?.tutor_nombre || "",
        // tutor_telefono: maestro?.tutor_telefono || "",
      });
    }
  }, [maestro]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const processedValue = transformValue(name, value, type, checked);

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
    updateTeacher(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
        Alert({ title: "Exito", text: res, icon: "success" });
      })
      .catch((error) => {
        // console.log(error);
        Alert({
          title: "Alerta",
          text:
            error?.data || error?.data
              ? "Error al hacer la peticion al servidor"
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
