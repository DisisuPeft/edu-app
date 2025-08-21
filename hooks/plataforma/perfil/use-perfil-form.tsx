import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import {
  useRetrieveEditProfileStudentQuery,
  useUpdateStudentProfileMutation,
} from "@/redux/features/estudiante/studentApiSlice";
import { useGetEntidadesQuery } from "@/redux/catalogos/CatApiSlice";
import { Alert } from "@mui/material";
import { Check, X } from "lucide-react";
import {
  useGetGeneroQuery,
  useGetNivelesQuery,
} from "@/redux/catalogos/CatApiSlice";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function usePerfilForm() {
  const { data: user } = useRetrieveUserQuery();
  const { data } = useRetrieveEditProfileStudentQuery(user?.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<EstudianteForm>();

  const { data: entidades, error: errorResponse } = useGetEntidadesQuery();
  const { data: generos, error: errorG } = useGetGeneroQuery();
  const { data: niveles, error: errorNiv } = useGetNivelesQuery();

  const [updateStudentProfile] = useUpdateStudentProfileMutation();

  const entidad =
    data?.lugar_nacimiento?.toString() ?? watch("lugar_nacimiento");

  const { data: municipios } = useRetrieveMunicipiosQuery(
    entidad ? parseInt(entidad) : 0
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      reset({
        id: data.id,
        // user: data.user,
        curp: data.curp || "",
        lugar_nacimiento: data.lugar_nacimiento?.toString() ?? "",
        municipio: data.municipio?.toString() ?? "",
        direccion: data.direccion ?? "",
        telefono: data.telefono ?? "",
        activo: data.activo ?? 1,
        rfc: data?.rfc,
        especialidad: data?.especialidad,
        perfil: data.perfil
          ? {
              nombre: data.perfil.nombre || "",
              apellidoP: data.perfil.apellidoP || "",
              apellidoM: data.perfil.apellidoM || "",
              edad: data.perfil.edad || "",
              fechaNacimiento: data.perfil.fechaNacimiento || "",
              genero: data.perfil.genero || "",
              nivEdu: data.perfil.nivEdu || "",
              telefono: data.perfil.telefono || "",
              // user: data.perfil.user,
            }
          : {
              nombre: "",
              apellidoP: "",
              apellidoM: "",
              edad: "",
              fechaNacimiento: "",
              genero: "",
              nivEdu: "",
              telefono: "",
              // user: data.user,
            },
      });
    }
  }, [data, reset, municipios]);

  if (errorResponse || errorG || errorNiv) {
    console.error("error to fetching data");
  }
  const onSubmit = (data: EstudianteForm) => {
    // console.log(data);
    updateStudentProfile({
      id: user.id,
      payload: data,
    })
      .unwrap()
      .then((res) => {
        dispatch(setAlert({ type: "success", message: `${res}` }));
      })
      .catch((error) => {
        dispatch(
          setAlert({ type: "error", message: `Error al actualizar los datos` })
        );
      });
  };

  return {
    register,
    handleSubmit,
    entidades,
    onSubmit,
    generos,
    niveles,
    municipios,
  };
}
