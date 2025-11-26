import { useForm } from "react-hook-form";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  //   useDesinscripcionMutation,
  useRetrieveDiplomadosQuery,
} from "@/redux/features/admin/adminApiSlice";
import { useInscriptionStudentMutation } from "@/redux/features/admin/adminApiSlice";
import { PagoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { useGetTipoPagoQuery } from "@/redux/features/admin/adminApiSlice";
import { useRetrieveMetodoPagoQuery } from "@/redux/catalogos/CatApiSlice";
// type Tipo = "create" | "delete";

export default function useInscripcionPrograma(
  estudiante_id: string,
  campaniaPrograma: number,
  onSuccess?: (value: boolean) => void
) {
  const [inscriptionStudent] = useInscriptionStudentMutation();
  //   const [desinscripcion] = useDesinscripcionMutation();
  const dispatch = useAppDispatch();
  const { data: tipoPago } = useGetTipoPagoQuery();
  const { data: metodoPago } = useRetrieveMetodoPagoQuery();
  const form = useForm<PagoFormData>({
    mode: "onChange",
    defaultValues: {
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
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    // control,
    formState: { errors },
  } = form;
  const { data: diplomados, refetch } = useRetrieveDiplomadosQuery({
    q: null,
    page: 1,
    estudiante_id: parseInt(estudiante_id),
  });
  // const montoForm = watch("monto");

  const onSubmit = (data: PagoFormData) => {
    const next = { estudiante_id, campaniaPrograma, data };
    // console.log(next);

    inscriptionStudent({
      estudiante: next.estudiante_id,
      campaniaPrograma: next.campaniaPrograma,
      body: data,
    })
      .unwrap()
      .then((res) => {
        // console.log(res.message);
        refetch();
        onSuccess?.(true);
        reset();
        dispatch(setAlert({ message: res.message, type: "success" }));
      })
      .catch((error) => {
        // const errorMessage = Array.isArray(error?.data)
        //   ? "La respuesta viene en un arreglo"
        //   : error?.data;
        // console.log(error);
        dispatch(
          setAlert({
            message: error?.data?.detail || "Error al inscribir al alumno.",
            type: "error",
          })
        );
      });
  };
  const isMorePages = diplomados?.count <= 10;

  return {
    isMorePages,
    diplomados,
    errors,
    register,
    onSubmit,
    handleSubmit,
    tipoPago,
    reset,
    metodoPago,
    // control,
    setValue,
    watch,
    onSuccess,
  };
}
