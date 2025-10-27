import { EnlaceFormData } from "@/redux/interface/enlaces-clases/type";
import { useForm } from "react-hook-form";
import { useGetPlataformaQuery } from "@/redux/features/enlaces-clases/linkApiSlice";
import { useCreateEnlaceMutation } from "@/redux/features/enlaces-clases/linkApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAlert } from "@/redux/features/alert/alertSlice";

export default function useCreateEnlace(programaId: string) {
  const { data: plataformas } = useGetPlataformaQuery();
  const [createEnlace] = useCreateEnlaceMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnlaceFormData>();

  const onSubmit = async (data: EnlaceFormData) => {
    createEnlace({ body: data, programa_id: parseInt(programaId) })
      .unwrap()
      .then((res) => {
        dispatch(setAlert({ type: "success", message: res }));
        reset();
      })
      .catch(() => {
        dispatch(
          setAlert({ type: "error", message: "Error al crear el enlace" })
        );
      });
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    onSubmit,
    plataformas,
  };
}
