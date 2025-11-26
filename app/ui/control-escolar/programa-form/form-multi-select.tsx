"use client";

import { type Control, Controller, type FieldErrors } from "react-hook-form";
import type { ProgramaEducativoFormData } from "@/redux/interface/control_escolar/types/programa-educativo";
import { useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface FormMultiSelectProps {
  label: string;
  name: keyof ProgramaEducativoFormData;
  options: SelectOption[];
  control: Control<ProgramaEducativoFormData>;
  errors: FieldErrors<ProgramaEducativoFormData>;
  placeholder?: string;
  className?: string;
}

export function FormMultiSelect({
  label,
  name,
  options,
  control,
  errors,
  placeholder = "Selecciona maestros",
  className = "",
}: FormMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const error = errors[name];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValues = (field.value as string[]) || [];

          const toggleOption = (optionValue: string) => {
            const newValues = selectedValues.includes(optionValue)
              ? selectedValues.filter((v) => v !== optionValue)
              : [...selectedValues, optionValue];
            field.onChange(newValues);
          };

          const getSelectedLabels = () => {
            if (selectedValues.length === 0) return placeholder;
            return options
              .filter((opt) => selectedValues.includes(opt.value))
              .map((opt) => opt.label)
              .join(", ");
          };

          return (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-left focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent flex justify-between items-center"
              >
                <span className="truncate">{getSelectedLabels()}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-popover border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => toggleOption(option.value)}
                        className={`w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground flex items-center gap-2 ${
                          isSelected ? "bg-accent text-accent-foreground" : ""
                        }`}
                      >
                        <div
                          className={`w-4 h-4 border rounded flex items-center justify-center ${
                            isSelected
                              ? "bg-primary border-primary"
                              : "border-input"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="w-3 h-3 text-primary-foreground"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }}
      />

      {error && (
        <span className="text-sm text-destructive">
          {error.message as string}
        </span>
      )}
    </div>
  );
}
