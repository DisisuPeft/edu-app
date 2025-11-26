"use client";

import type React from "react";

import { useForm, type UseFormReturn, type FieldErrors } from "react-hook-form";
import { useEffect, useState } from "react";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { useRetrieveDiplomadoQuery } from "@/redux/features/admin/adminApiSlice";
import { useEditProgramaMutation } from "@/redux/features/control-escolar/peApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAlert } from "@/redux/features/alert/alertSlice";
// import {
//   useRetrieveTiposProgramaQuery,
//   useRetrieveInstitutoQuery,
// } from "@/redux/features/catalagos/catalogosApiSlice";
// import {
//   TipoProgramaPaginated,
//   InstitutoPaginated,
// } from "@/redux/interface/catalogos/catalagos";

interface UseProgramaFormReturn {
  form: UseFormReturn<ProgramaEducativoFormData>;
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  errors: FieldErrors<ProgramaEducativoFormData>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  handleSubmitForm: (
    onSubmit: (data: ProgramaEducativoFormData) => void
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  validateCurrentStep: () => Promise<boolean>;
  onSubmit: (data: ProgramaEducativoFormData) => void;
  diplomado: ProgramaEducativoFormData;
  // tipoPrograma: TipoProgramaPaginated;
  // institutos: InstitutoPaginated;
}

export default function useProgramaForm(
  totalSteps: number,
  id: string,
  isEdit?: boolean
): UseProgramaFormReturn {
  const [editPrograma] = useEditProgramaMutation();
  const { data: diplomado, isLoading: programaLoading } =
    useRetrieveDiplomadoQuery(id);
  const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const form = useForm<ProgramaEducativoFormData>({
    defaultValues: {
      nombre: "",
      descripcion: "",
      tipo: "",
      institucion: "",
      duracion_horas: null,
      fecha_inicio: "",
      fecha_fin: "",
      duracion_meses: null,
      periodo_imparticion: "",
      horario: "",
      costo_inscripcion: null,
      costo_mensualidad: null,
      costo_documentacion: null,
      activo: 1,
      maestro: [],
      modalidad: "",
      imagen_url: "",
      banner_url: "",
    },
    mode: "onChange",
  });

  const {
    formState: { errors },
    trigger,
    reset,
  } = form;

  useEffect(() => {
    if (!programaLoading && diplomado && isEdit) {
      const mapped = {
        nombre: diplomado.nombre ?? "",
        descripcion: diplomado.descripcion ?? "",
        tipo: String(diplomado.tipo ?? ""),
        institucion: String(diplomado.institucion ?? ""),
        duracion_horas:
          diplomado.duracion_horas != null
            ? Number(diplomado.duracion_horas)
            : null,
        fecha_inicio: diplomado.fecha_inicio ?? "",
        fecha_fin: diplomado.fecha_fin ?? "",
        duracion_meses:
          diplomado.duracion_meses != null
            ? Number(diplomado.duracion_meses)
            : null,
        periodo_imparticion: String(diplomado.periodo_imparticion ?? ""),
        horario: diplomado.horario ?? "",
        costo_inscripcion:
          diplomado.costo_inscripcion != null
            ? Number(diplomado.costo_inscripcion)
            : null,
        costo_mensualidad:
          diplomado.costo_mensualidad != null
            ? Number(diplomado.costo_mensualidad)
            : null,
        costo_documentacion:
          diplomado.costo_documentacion != null
            ? Number(diplomado.costo_documentacion)
            : null,
        activo: diplomado.activo ?? 1,
        maestro: Array.isArray(diplomado.maestro)
          ? diplomado.maestro.map(String)
          : [],
        modalidad: String(diplomado.modalidad ?? ""),
        imagen_url: diplomado.imagen_url ?? "",
        banner_url: diplomado.banner_url ?? "",
      };
      reset(mapped, { keepDirty: true, keepErrors: true });
    }
  }, [programaLoading, diplomado, reset]);
  // Campos por paso para validación
  const stepFields: Record<number, (keyof ProgramaEducativoFormData)[]> = {
    1: ["nombre", "descripcion", "tipo", "institucion"],
    2: [
      "duracion_horas",
      "duracion_meses",
      "fecha_inicio",
      "fecha_fin",
      "duracion_meses",
      "periodo_imparticion",
      "horario",
    ],
    3: ["costo_inscripcion", "costo_mensualidad"],
    4: ["activo", "maestro", "modalidad"],
    5: ["imagen_url", "banner_url"],
  };

  const validateCurrentStep = async (): Promise<boolean> => {
    const fieldsToValidate = stepFields[currentStep];
    if (!fieldsToValidate) return true;

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const goToNextStep = (): void => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number): void => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const handleSubmitForm = (
    onSubmit: (data: ProgramaEducativoFormData) => void
  ) => {
    return form.handleSubmit(onSubmit);
  };

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  const onSubmit = (data: ProgramaEducativoFormData) => {
    editPrograma({ formData: data, id: id })
      .unwrap()
      .then((res) => {
        dispatch(setAlert({ type: "success", message: res }));
      })
      .catch(() => {
        dispatch(
          setAlert({
            type: "error",
            message: "Error al actualizar el plan de estudios",
          })
        );
      });
  };

  return {
    form,
    currentStep,
    isFirstStep,
    isLastStep,
    errors,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    handleSubmitForm,
    validateCurrentStep,
    onSubmit,
    diplomado,
  };
}
