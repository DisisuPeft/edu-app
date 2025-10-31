import { useForm } from "react-hook-form";
import { CampaniaForm } from "@/redux/features/campanias/type";
import {
  useGetProgramasQuery,
  useSaveCampaniaMutation,
} from "@/redux/features/campanias/campaniaApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useGetCampanasQuery } from "@/redux/features/campanias/campaniaApiSlice";

export default function useCreateCampania() {
  const { data: programas } = useGetProgramasQuery();
  const { refetch } = useGetCampanasQuery();
  const [saveCampania] = useSaveCampaniaMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CampaniaForm>();

  const onSubmit = async (data: CampaniaForm) => {
    saveCampania(data)
      .unwrap()
      .then((res) => {
        dispatch(setAlert({ type: "success", message: res }));
        refetch();
      })
      .catch(() => {
        dispatch(
          setAlert({
            type: "error",
            message: "Error al crear la campaña. Informa al administrador.",
          })
        );
      });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    reset,
    programas,
  };
}
