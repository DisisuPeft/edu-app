import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";
import { useRetrieveMunicipiosQuery } from "@/redux/catalogos/CatApiSlice";
import {
  useRetrieveEditProfileStudentQuery,
  useUpdateStudentProfileMutation,
} from "@/redux/features/estudiante/studentApiSlice";
import { useGetEntidadesQuery } from "@/redux/catalogos/CatApiSlice";
import {
  useGetGeneroQuery,
  useGetNivelesQuery,
} from "@/redux/catalogos/CatApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function usePerfilForm() {
  const { data, isLoading } = useRetrieveEditProfileStudentQuery();
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
    if (!isLoading && data && municipios) {
      const mapped = {
        id: data.id,
        perfil: data.perfil,
        curp: data.curp,
        lugar_nacimiento: data.lugar_nacimiento,
        municipio: data.municipio,
        rfc: data.rfc,
        especialidad: data.especialidad,
        direccion: data.direccion,
        activo: data.activo,
      };
      reset(mapped, { keepDirtyValues: true, keepErrors: true });
    }
  }, [isLoading, reset, municipios]);

  if (errorResponse || errorG || errorNiv) {
    console.error("error to fetching data");
  }
  const onSubmit = (data: EstudianteForm) => {
    // console.log(data);
    updateStudentProfile(data)
      .unwrap()
      .then((res) => {
        dispatch(setAlert({ type: "success", message: `${res}` }));
      })
      .catch((error) => {
        const errorMessage = Array.isArray(error?.data)
          ? "Respuesta sin serializer"
          : error?.data;
        dispatch(setAlert({ type: "error", message: errorMessage }));
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
