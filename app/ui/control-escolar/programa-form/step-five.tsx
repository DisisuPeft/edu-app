import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { FormInput } from "./form-input";

interface StepFiveProps {
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
}

export function StepFive({ register, errors }: StepFiveProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Recursos Visuales
        </h2>
        <p className="text-sm text-muted-foreground">
          Agrega imágenes y banners para el programa
        </p>
      </div>

      <FormInput
        label="URL de Imagen"
        name="imagen_url"
        placeholder="https://ejemplo.com/imagen.jpg"
        register={register}
        errors={errors}
      />

      <FormInput
        label="URL de Banner"
        name="banner_url"
        placeholder="https://ejemplo.com/banner.jpg"
        register={register}
        errors={errors}
      />

      <div className="bg-muted p-4 rounded-lg space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Recomendaciones
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Imagen: Tamaño recomendado 800x600px</li>
            <li>• Banner: Tamaño recomendado 1920x400px</li>
            <li>• Formatos soportados: JPG, PNG, WebP</li>
            <li>• Peso máximo recomendado: 2MB por imagen</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
