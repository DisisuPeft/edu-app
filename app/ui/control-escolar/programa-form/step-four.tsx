import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { FormSelect } from "./form-select";
// import { FormMultiSelect } from "./form-multi-select";

interface StepFourProps {
  register: UseFormRegister<ProgramaEducativoFormData>;
  // control?: Control<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
}

// Datos de ejemplo
const estadosPrograma = [
  { value: "1", label: "Activo" },
  { value: "0", label: "Inactivo" },
];

// const modalidades = [
//   { value: "1", label: "Presencial" },
//   { value: "2", label: "En Línea" },
//   { value: "3", label: "Híbrido" },
// ];

// const maestros = [
//   { value: "1", label: "Dr. Juan Pérez García" },
//   { value: "2", label: "Mtra. María López Rodríguez" },
//   { value: "3", label: "Ing. Carlos Hernández Martínez" },
//   { value: "4", label: "Dra. Ana González López" },
//   { value: "5", label: "Mtro. Roberto Sánchez Torres" },
// ];

export function StepFour({ register, errors }: StepFourProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Configuración Adicional
        </h2>
        <p className="text-sm text-muted-foreground">
          Configura el estado, maestros y modalidad del programa
        </p>
      </div>

      <FormSelect
        label="Estado del Programa"
        name="activo"
        options={estadosPrograma}
        required
        register={register}
        errors={errors}
      />

      {/* <FormSelect
        label="Modalidad"
        name="modalidad_id"
        options={modalidades}
        register={register}
        errors={errors}
      />

      <FormMultiSelect
        label="Maestros Asignados"
        name="maestro_ids"
        options={maestros}
        control={control}
        errors={errors}
        placeholder="Selecciona uno o más maestros"
      /> */}

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-foreground mb-2">Nota</h3>
        <p className="text-sm text-muted-foreground">
          Puedes seleccionar múltiples maestros que impartirán el programa
          educativo
        </p>
      </div>
    </div>
  );
}
