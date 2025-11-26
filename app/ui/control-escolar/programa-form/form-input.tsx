import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";

interface FormInputProps {
  label: string;
  name: keyof ProgramaEducativoFormData;
  type?: "text" | "number" | "date" | "email";
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
  className?: string;
}

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  register,
  errors,
  className = "",
}: FormInputProps) {
  const error = errors[name];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline focus:ring-2 focus:ring-ring focus:border-transparent"
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
