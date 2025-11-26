import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  show: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  closeable?: boolean;
  onClose: () => void;
  transparent?: boolean;
  children: React.ReactNode;
}

type MaxWidthClasses = {
  [key in Required<ModalProps>["maxWidth"]]: string;
};

export const Modal: React.FC<ModalProps> = ({
  show,
  maxWidth = "2xl",
  closeable = true,
  onClose,
  transparent = false,
  children,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  const close = useCallback(() => {
    if (closeable) {
      onClose();
    }
  }, [closeable, onClose]);

  const closeOnEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && show) {
        close();
      }
    },
    [show, close]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [closeOnEscape]);

  const maxWidthClass: MaxWidthClasses = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
  };

  if (!isMounted) return null;
  //   console.log(transparent)
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-0 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* === Fondo del modal (solo una capa, control total aquí) === */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* === Contenido del modal === */}
      <div
        className={`relative z-10 w-full sm:mx-auto ${
          maxWidthClass[maxWidth]
        } ${transparent ? "" : "bg-white"} rounded-lg ${
          transparent ? "shadow-none" : "shadow-2xl"
        } max-h-[90vh] overflow-y-auto p-6 transform transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
