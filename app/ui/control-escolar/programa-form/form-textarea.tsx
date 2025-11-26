import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";

interface FormTextareaProps {
  label: string;
  name: keyof ProgramaEducativoFormData;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
  rows?: number;
  className?: string;
}

export function FormTextarea({
  label,
  name,
  placeholder,
  required = false,
  register,
  errors,
  rows = 4,
  className = "",
}: FormTextareaProps) {
  const error = errors[name];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
        {...register(name, {
          required: required ? `${label} es requerido` : false,
        })}
      />
      {error && (
        <span className="text-sm text-destructive text-primary p-2 rounded-lg">
          {error.message as string}
        </span>
      )}
    </div>
  );
}
