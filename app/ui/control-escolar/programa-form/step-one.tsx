import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { FormInput } from "./form-input";
import { FormTextarea } from "./form-textarea";
import { FormSelect } from "./form-select";
import {
  useRetrieveTiposProgramaQuery,
  useRetrieveInstitutoQuery,
} from "@/redux/features/catalagos/catalogosApiSlice";

interface StepOneProps {
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
}

export function StepOne({ register, errors }: StepOneProps) {
  const { data: tipoPrograma } = useRetrieveTiposProgramaQuery();
  const { data: institutos } = useRetrieveInstitutoQuery();
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Información Básica
        </h2>
        <p className="text-sm text-muted-foreground">
          Ingresa los datos principales del programa educativo
        </p>
      </div>

      <FormInput
        label="Nombre del Programa"
        name="nombre"
        placeholder="Ej: Diplomado en Inteligencia Artificial"
        required
        register={register}
        errors={errors}
      />

      <FormTextarea
        label="Descripción"
        name="descripcion"
        placeholder="Describe el contenido y objetivos del programa..."
        rows={5}
        required
        register={register}
        errors={errors}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          label="Tipo de Programa"
          name="tipo"
          options={tipoPrograma?.results}
          valueKey="id"
          labelKey="nombre"
          register={register}
          errors={errors}
        />

        <FormSelect
          label="Institución Académica"
          name="institucion"
          options={institutos?.results}
          register={register}
          errors={errors}
          valueKey="id"
          labelKey="nombre"
        />
      </div>
    </div>
  );
}
