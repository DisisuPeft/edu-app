import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { FormInput } from "./form-input";

interface StepTwoProps {
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
}

export function StepTwo({ register, errors }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Duración y Fechas
        </h2>
        <p className="text-sm text-muted-foreground">
          Define la duración y calendario del programa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Duración en Horas"
          name="duracion_horas"
          type="number"
          placeholder="120"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Duración en Meses"
          name="duracion_meses"
          type="number"
          required
          placeholder="6"
          register={register}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Fecha de Inicio"
          name="fecha_inicio"
          required
          type="date"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Fecha de Fin"
          name="fecha_fin"
          required
          type="date"
          register={register}
          errors={errors}
        />
      </div>

      {/* <FormSelect
        label="Periodo de Impartición"
        name="periodo_imparticion_id"
        options={periodosImparticion}
        register={register}
        errors={errors}
      /> */}

      <FormInput
        label="Horario"
        name="horario"
        placeholder="Ej: Sábados y Domingos de 8:00 a 14:00 hrs"
        register={register}
        errors={errors}
      />
    </div>
  );
}
