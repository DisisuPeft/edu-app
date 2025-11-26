import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { FormInput } from "./form-input";

interface StepThreeProps {
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
}

export function StepThree({ register, errors }: StepThreeProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Costos</h2>
        <p className="text-sm text-muted-foreground">
          Establece los costos del programa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Costo de Inscripción"
          name="costo_inscripcion"
          type="number"
          placeholder="5000.00"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Costo de Mensualidad"
          name="costo_mensualidad"
          type="number"
          placeholder="3000.00"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Costo de Documentacion"
          name="costo_documentacion"
          type="number"
          placeholder="3000.00"
          register={register}
          errors={errors}
        />
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-foreground mb-2">
          Información
        </h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Ingresa los montos sin símbolos de moneda</li>
          <li>• Usa punto decimal para los centavos (Ej: 1500.50)</li>
          <li>• Los campos son opcionales si el programa es gratuito</li>
        </ul>
      </div>
    </div>
  );
}
