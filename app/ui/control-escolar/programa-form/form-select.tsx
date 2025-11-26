import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";

interface FormSelectProps {
  label: string;
  name: keyof ProgramaEducativoFormData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Record<string, any>[];
  required?: boolean;
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
  placeholder?: string;
  className?: string;
  valueKey?: string;
  labelKey?: string;
}

export function FormSelect({
  label,
  name,
  options,
  required = false,
  register,
  errors,
  placeholder = "Selecciona una opción",
  className = "",
  valueKey = "value",
  labelKey = "label",
}: FormSelectProps) {
  const error = errors[name];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <select
        id={name}
        className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
        {...register(name, {
          required: required ? `${label} es requerido` : false,
        })}
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-sm text-destructive">
          {error.message as string}
        </span>
      )}
    </div>
  );
}
