import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreateCiclosMutation } from "@/redux/control-escolar/calendario/calendarioApiSlice";
import { Alert } from "@/alerts/toast";
import { ChangeEvent } from "react";
import { useGetCicloQuery } from "@/redux/control-escolar/calendario/calendarioApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  finishInitialLoad,
  setError,
  setCiclo,
} from "@/redux/control-escolar/calendario/calendarioSlice";

export default function useQueryCiclos() {
  const [queryID, setQueryID] = useState<string>("");
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setQueryID(value);
  };
  const dispatch = useAppDispatch();
  const {
    data: ciclo,
    isLoading,
    isSuccess,
    error,
  } = useGetCicloQuery(parseInt(queryID));
  // const onSubmit = (data: FormData) => {
  //   setIsSubmitting(true);
  //   createCiclos(data)
  //     .then((res) => {
  //       setIsSubmitting(false);
  //       Alert({ title: "Exito", text: "Ciclo creado", icon: "success" });
  //       reset();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       Alert({ title: "Error", text: "Ciclo no creado", icon: "error" });
  //     });
  // };
  useEffect(() => {
    if (isLoading) {
      dispatch(finishInitialLoad());
    }
    if (isSuccess && ciclo) {
      dispatch(setCiclo(ciclo));
    }
    if (error && "status" in error) {
      //   console.log(error);
      if (error.status === 404) {
        dispatch(setError("No se han definido ciclos"));
      }
    }
  }, [ciclo, error, isSuccess, isLoading]);
  return {
    onChange,
    ciclo,
    // reset,
    // estado,
    // onSubmit,
    // errors,
    // watch,
    // isSubmitting,
  };
}
