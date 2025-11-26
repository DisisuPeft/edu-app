import { useCreatePagoMutation } from "@/redux/control-escolar/pagos/pagosApiSlice";
import { Pago } from "@/redux/interface/control_escolar/types/pagos";
import { useForm } from "react-hook-form";

export default function usePagos(ins_id: number) {
  const [createPago] = useCreatePagoMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Pago>();

  const onSubmit = (data: Pago) => {
    // console.log(data);
    createPago({ formData: data, ins: ins_id })
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("Error");
      });
  };
  const applyPago = (pago_id: number) => {};
  return {
    register,
    handleSubmit,
    reset,
    setValue,
    errors,
    onSubmit,
  };
}
