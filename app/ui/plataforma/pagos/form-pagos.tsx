import { Modal } from "@/app/components/common/Modal";
import { Button } from "../../Button";
import { useGetTipoPagoQuery } from "@/redux/features/admin/adminApiSlice";
import { usePagos } from "@/hooks";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  In: number;
}
export default function FormPagos({ show, setShow, In }: Props) {
  const { data: tipoPago } = useGetTipoPagoQuery();
  const toggleModal = () => {
    setShow(false);
  };
  const { register, handleSubmit, onSubmit, errors } = usePagos(In);
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-4 text-center text-black">
          <div className="flex flex-col justify-center p-4 mb-2">
            <div>
              <label
                htmlFor="monto"
                className="text-sm font-medium text-foreground"
              >
                Monto
              </label>
              <input
                id="monto"
                type="number"
                placeholder="Monto de pago"
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
                {...register("monto", {
                  required: "El monto es requerido",
                  validate: (value) => {
                    if (Number(value) <= 0) {
                      return "El monto debe ser mayor que 0";
                    }
                    if (/[^\d.]/.test(String(value))) {
                      return "El monto solo puede contener números y punto decimal";
                    }
                    return true;
                  },
                })}
              />
              {errors.monto && (
                <span className="text-sm text-primary">
                  {errors.monto.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="concepto"
                className="text-sm font-medium text-foreground"
              >
                Concepto
              </label>
              <input
                id="concepto"
                type="text"
                placeholder="Concepto de pago"
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
                {...register("concepto", {
                  required: "El concepto es requerido",
                })}
              />
              {errors.concepto && (
                <span className="text-sm text-primary">
                  {errors.concepto.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="tipo de pago"
                className="text-sm font-medium text-foreground"
              >
                Tipo de pago
              </label>
              <select
                id="tipo_pago"
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
                {...register("tipo_pago", {
                  required: "El tipo de pago es requerido",
                })}
              >
                <option value="">Seleccionar...</option>
                {tipoPago?.results?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.nombre}
                  </option>
                ))}
              </select>
              {errors.tipo_pago && (
                <span className="text-sm text-primary">
                  {errors.tipo_pago.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="metodo_pago"
                className="text-sm font-medium text-foreground"
              >
                Metodo de pago
              </label>
              <input
                id="metodo_pago"
                type="text"
                placeholder="Metodo de pago"
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
                {...register("metodo_pago", {
                  required: "El metodo de pago es requerido",
                })}
              />
              {errors.metodo_pago && (
                <span className="text-sm text-primary">
                  {errors.metodo_pago.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              {/* Descripción */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Descripción (Opcional)
                </label>
                <textarea
                  {...register("notas")}
                  rows={3}
                  placeholder="Agrega detalles adicionales sobre el proceso.."
                  className="text-black w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleModal}
              className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>

            <Button
              type="submit"
              className="px-4 py-2 rounded-xl bg-text-white hover:bg-red-600 transition"
            >
              Inscribir
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
