// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EstudianteFicha } from "@/redux/features/control-escolar/fichasApiSlice";
// import { setAlert } from "@/redux/features/alert/alertSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { useCampaniasGenericosQuery } from "@/redux/features/campanias/campaniaApiSlice";
import { useGetTipoPagoQuery } from "@/redux/features/admin/adminApiSlice";
import { useRetrieveMetodoPagoQuery } from "@/redux/catalogos/CatApiSlice";
import { useCreateFichasMutation } from "@/redux/features/admin/adminApiSlice";
import { ErrorResponse } from "@/redux/interface/response";
import { sweetAlert } from "@/sweetalert/sweet-alert";
import { useGetFichasQuery } from "@/redux/features/control-escolar/fichasApiSlice";

interface Props {
  campaniaPrograma: string;
  emitCloseModal?: (value: boolean) => void;
}
export default function useFichas({ campaniaPrograma, emitCloseModal }: Props) {
  const { data: tipoPago } = useGetTipoPagoQuery();
  const { data: metodoPago } = useRetrieveMetodoPagoQuery();
  const { data: campanias } = useCampaniasGenericosQuery();
  const { refetch } = useGetFichasQuery({});
  const [createFichas] = useCreateFichasMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    control,
    watch,
    setValue,
    reset,
  } = useForm<EstudianteFicha>({
    mode: "onChange",
    defaultValues: {
      curp: "",
      email: "",
      activo: 0,
      perfil: {
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        telefono: "",
      },
      precios: {
        tipo_pago: [],
        monto: 0,
        fecha_vencimiento: "",
        metodo_pago: "",
        notas: "",
        concepto: "",
        tiene_precio_custom: false,
        precios_custom: {
          costo_inscripcion: 0,
          costo_mensualidad: 0,
          costo_documentacion: 0,
        },
        razon_precio_custom: "",
      },
    },
  });

  // const dispatch = useAppDispatch();

  const onSubmit = async (data: EstudianteFicha) => {
    // console.log(data, campaniaPrograma);
    try {
      const res = await createFichas({
        formData: data,
        campaniaPrograma: campaniaPrograma,
      }).unwrap();
      reset();
      emitCloseModal(false);
      sweetAlert("success", `${res.message}`, "Exito");
      refetch();
    } catch (error) {
      const e = error as ErrorResponse;
      emitCloseModal(false);
      sweetAlert("error", `${e.data.detail}`, "Atencion");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isDirty,
    control,
    campanias,
    watch,
    setValue,
    tipoPago,
    metodoPago,
  };
}
