import { useForm } from "react-hook-form";
import { FormValues } from "@/redux/interface/sistema/modulos";
import { useGetTabsQuery } from "@/redux/sistema/SistemaApiSlice";
import { useAddAccessUserMutation } from "@/redux/sistema/SistemaApiSlice";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function useUserAccess({ userId }: { userId: number }) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty },
  } = useForm<FormValues>({
    values: { user: userId, module: 0, tabmodule: [] },
    mode: "onBlur",
  });
  const dispatch = useAppDispatch();
  const [addAccessUser] = useAddAccessUserMutation();
  const module = watch("module");

  const { data: tabsmodules } = useGetTabsQuery(module ? module : 0);

  const onSubmit = (data: FormValues) => {
    // Solo regresamos los valores tal cual, sin lógica extra.
    addAccessUser(data)
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
    control,
    handleSubmit,
    isSubmitting,
    isDirty,
    tabsmodules,
    onSubmit,
  };
}
