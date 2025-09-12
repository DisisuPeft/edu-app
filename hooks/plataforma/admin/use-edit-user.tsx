import { useForm } from "react-hook-form";
import { EstudianteForm } from "@/redux/interface/perfil/form-types";
import {
  useGetRolesQuery,
  useRetrieveMunicipiosQuery,
} from "@/redux/catalogos/CatApiSlice";
import { useRetrieveViewUserQuery } from "@/redux/features/admin/adminApiSlice";
import { useGetEntidadesQuery } from "@/redux/catalogos/CatApiSlice";
// import { Alert } from "@mui/material";
// import { Check, X } from "lucide-react";
import {
  useGetGeneroQuery,
  useGetNivelesQuery,
} from "@/redux/catalogos/CatApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { defaultEstudianteForm } from "@/redux/interface/perfil/form-types";
import { useUpdateUserMutation } from "@/redux/features/admin/adminApiSlice";

export default function useUserEditProfileForm(id: string) {
  const [updateUsers] = useUpdateUserMutation();
  const { data: estudiante, isLoading } = useRetrieveViewUserQuery(id);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    watch,
    reset,
    control,
  } = useForm<EstudianteForm>({
    defaultValues: defaultEstudianteForm,
  });

  const { data: entidades, error: errorResponse } = useGetEntidadesQuery();
  const { data: generos, error: errorG } = useGetGeneroQuery();
  const { data: niveles, error: errorNiv } = useGetNivelesQuery();
  const { data: roles, error: errorRole } = useGetRolesQuery();

  // const [createUsers] = useCreateUsersMutation();

  const dispatch = useAppDispatch();

  const entidad =
    estudiante?.lugar_nacimiento?.toString() ?? watch("lugar_nacimiento");

  const { data: municipios } = useRetrieveMunicipiosQuery(
    entidad ? parseInt(entidad) : 0
  );

  useEffect(() => {
    if (!isLoading && estudiante) {
      const mapped = {
        id: estudiante.id,
        perfil: estudiante.perfil,
        curp: estudiante.curp,
        lugar_nacimiento: estudiante.lugar_nacimiento,
        municipio: estudiante.municipio,
        rfc: estudiante.rfc,
        especialidad: estudiante.especialidad,
        direccion: estudiante.direccion,
        activo: estudiante.activo,
        user: estudiante.user,
      };
      reset(mapped, { keepDirtyValues: true, keepErrors: true });
    }
  }, [isLoading, reset]);

  if (errorResponse || errorG || errorNiv || errorRole) {
    console.error("error to fetching data");
  }
  const estuent_id = watch("id");
  const onSubmit = (data: EstudianteForm) => {
    // console.log(data, id);
    updateUsers({ id: estuent_id, payload: data })
      .unwrap()
      .then((res) => {
        console.log(res);
        dispatch(setAlert({ type: "success", message: `${res}` }));
      })
      .catch((error) => {
        console.log(error);
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
