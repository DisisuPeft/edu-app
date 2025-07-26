import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateCiclosMutation } from "@/redux/control-escolar/calendario/calendarioApiSlice";
import { Alert } from "@/alerts/toast";

export type FormData = {
  name: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: number;
};

export default function useCreateCiclos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      fecha_inicio: "",
      fecha_fin: "",
      estado: 0,
    },
  });

  const [createCiclos] = useCreateCiclosMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const estado = [
    { id: 0, name: "Inactivo" },
    { id: 1, name: "Activo" },
  ];

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    createCiclos(data)
      .then((res) => {
        setIsSubmitting(false);
        Alert({ title: "Exito", text: "Ciclo creado", icon: "success" });
        reset();
      })
      .catch((error) => {
        console.log(error);
        Alert({ title: "Error", text: "Ciclo no creado", icon: "error" });
      });
  };

  return {
    register,
    handleSubmit,
    reset,
    estado,
    onSubmit,
    errors,
    watch,
    isSubmitting,
  };
}
