"use client";

import useComments from "@/hooks/plataforma/comunidad/use-comments";
import { useEffect } from "react";
// CommentForm + React Hook Form (Next.js + TS)
// - POST -> `/api/comentarios?diplomado=<id>`
// - Body: { contenido, padre? }
// - Maneja validación con RHF; expone onSuccess/onError para integrarlo con Redux si quieres

export interface CommentFormProps {
  diplomadoId: string;
  parentId?: number;
  maxLength?: number;
  placeholder?: string;
  // onSuccess?: (payload: { contenido: string }) => void;
  // onError?: (message: string) => void;
  className?: string;
}

const DEFAULT_MAX = 500;

export default function CommentForm({
  diplomadoId,
  parentId,
  maxLength = DEFAULT_MAX,
  placeholder = "Escribe tu comentario…",
  className = "",
}: CommentFormProps) {
  const {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isSubmitting,
    watch,
    reset,
  } = useComments(diplomadoId);
  const contenidoValue = watch("comentario");
  const remaining = maxLength - (contenidoValue?.length || 0);
  useEffect(() => {
    if (parentId) {
      reset({
        parent: parentId,
      });
    }
  }, [reset, parentId]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full text-black font-sans ${className}`}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="comentario"
          className="text-sm font-medium text-gray-700"
        >
          Nuevo comentario
        </label>

        <textarea
          id="comentario"
          {...register("comentario", {
            required: "El comentario es obligatorio",
            validate: (v) =>
              v?.trim().length ? true : "El comentario no puede estar vacío",
            maxLength: {
              value: maxLength,
              message: `Máximo ${maxLength} caracteres`,
            },
          })}
          placeholder={placeholder}
          rows={4}
          className={`w-full rounded-2xl border p-3 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
            errors.comentario ? "border-red-400" : "border-gray-300"
          }`}
        />

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {parentId ? (
              <>Respondiendo a comentario #{String(parentId)}</>
            ) : (
              <>Publicar en diplomado</>
            )}
          </span>
          <span className={remaining < 0 ? "text-red-600" : ""}>
            {remaining} caracteres restantes
          </span>
        </div>

        {errors.comentario && (
          <p className="text-sm text-red-600" role="alert">
            {errors.comentario.message}
          </p>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-2xl px-4 py-2 text-white transition ${
              isSubmitting ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {isSubmitting ? "Publicando…" : "Publicar"}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            disabled={isSubmitting}
            className="rounded-2xl px-3 py-2 border border-gray-300 hover:bg-gray-50"
          >
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
}
