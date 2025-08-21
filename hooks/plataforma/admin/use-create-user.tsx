import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";
import {
  useGetRolesQuery,
  useRetrieveMunicipiosQuery,
} from "@/redux/catalogos/CatApiSlice";
import { useCreateUsersMutation } from "@/redux/features/admin/adminApiSlice";
import { useGetEntidadesQuery } from "@/redux/catalogos/CatApiSlice";
// import { Alert } from "@mui/material";
// import { Check, X } from "lucide-react";
import {
  useGetGeneroQuery,
  useGetNivelesQuery,
} from "@/redux/catalogos/CatApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function useUserProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    watch,
    reset,
    control,
  } = useForm<EstudianteForm>();

  const { data: entidades, error: errorResponse } = useGetEntidadesQuery();
  const { data: generos, error: errorG } = useGetGeneroQuery();
  const { data: niveles, error: errorNiv } = useGetNivelesQuery();
  const { data: roles, error: errorRole } = useGetRolesQuery();

  const [createUsers] = useCreateUsersMutation();
  const dispatch = useAppDispatch();
  const entidad = watch("lugar_nacimiento");

  const { data: municipios } = useRetrieveMunicipiosQuery(
    entidad ? parseInt(entidad) : 0
  );

  // const dispatch = useAppDispatch();

  if (errorResponse || errorG || errorNiv || errorRole) {
    console.error("error to fetching data");
  }
  const onSubmit = (data: EstudianteForm) => {
    createUsers(data)
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
    errors,
    isSubmitting,
    isDirty,
    control,
    roles,
  };
}
