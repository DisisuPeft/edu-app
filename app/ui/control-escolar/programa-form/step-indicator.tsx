"use client";

import type { StepConfig } from "@/redux/interface/control_escolar/types/programa-educativo";

interface StepIndicatorProps {
  steps: StepConfig[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function StepIndicator({
  steps,
  currentStep,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => onStepClick(step.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground text-white"
                      : isCompleted
                      ? "bg-primary/20 text-primary"
                      : "bg-gray-200 text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </button>
                <span
                  className={`mt-2 text-xs font-medium hidden sm:block text-center ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {!isLast && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    isCompleted ? "bg-primary/20" : "bg-muted"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
