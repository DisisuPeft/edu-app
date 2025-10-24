import { useForm } from "react-hook-form";
import { FormValues } from "@/redux/interface/comunidad/comments";
import { useGetCommentsQuery } from "@/redux/features/comunidad/comentariosApiSlice";
import { useCreateCommentMutation } from "@/redux/features/comunidad/comentariosApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function useComments(diplomadoId?: string) {
  // const { data: comentarios } = useGetCommentsQuery(diplomadoId);
  const [createComment] = useCreateCommentMutation();
  const { refetch } = useGetCommentsQuery(diplomadoId);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { comentario: "", parent: null },
    mode: "onSubmit",
  });

  const onSubmit = async (values: FormValues) => {
    // console.log(values);
    createComment({ body: values, diplomadoId: diplomadoId })
      .unwrap()
      .then((res) => {
        reset();
        refetch();
        // console.log(res)
        dispatch(setAlert({ type: "success", message: res }));
      })
      .catch(() => {
        dispatch(
          setAlert({
            type: "error",
            message:
              "Error al cargar el comentario, intentalo en unos minutos.",
          })
        );
      });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    watch,
    errors,
    isSubmitting,
    reset,
  };
}
