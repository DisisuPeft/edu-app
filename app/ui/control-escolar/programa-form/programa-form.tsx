"use client";

import { useProgramaForm } from "@/hooks";
import type { StepConfig } from "@/redux/interface/control_escolar/types/programa-educativo";
import { StepIndicator } from "./step-indicator";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
// import { StepFour } from "./step-four";
// import { StepFive } from "./step-five";

const TOTAL_STEPS = 3;

const steps: StepConfig[] = [
  { id: 1, title: "Básica", description: "Información básica del programa" },
  { id: 2, title: "Duración", description: "Fechas y horarios" },
  { id: 3, title: "Costos", description: "Información de costos" },
  // { id: 4, title: "Configuración", description: "Maestros y modalidad" },
  // { id: 5, title: "Recursos", description: "Imágenes y banners" },
];

export default function ProgramaForm({ id }: { id: string }) {
  const {
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
  } = useProgramaForm(TOTAL_STEPS, id, true);

  const { register } = form;

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      if (isLastStep) {
        handleSubmitForm(onSubmit)();
      } else {
        goToNextStep();
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne register={register} errors={errors} />;
      case 2:
        return <StepTwo register={register} errors={errors} />;
      case 3:
        return <StepThree register={register} errors={errors} />;
      // case 4:
      //   return (
      //     <StepFour register={register} control={control} errors={errors} />
      //   );
      // case 5:
      //   return <StepFive register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Programa Educativo
        </h1>
        <p className="text-muted-foreground"></p>
      </div>

      <div className="bg-white rounded-lg p-6 md:p-8">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={goToStep}
        />

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="min-h-[400px]">{renderStep()}</div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
            <button
              type="button"
              onClick={goToPreviousStep}
              disabled={isFirstStep}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isFirstStep
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-secondary text-white hover:bg-secondary/80"
              }`}
            >
              Anterior
            </button>

            <div className="text-sm text-muted-foreground">
              Paso {currentStep} de {TOTAL_STEPS}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:text-white transition-colors"
            >
              {isLastStep ? "Guardar Programa" : "Siguiente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
