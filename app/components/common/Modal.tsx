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
      className={`fixed inset-0 overflow-y-auto px-4 py-[200px] sm:px-0 z-50 transition-opacity duration-200 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={close}
    >
      <div
        className={`fixed inset-0 transform transition-all ${
          show ? "opacity-20" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
      </div>
      <div
        className={`mb-6 ${
          transparent ? "" : "bg-white"
        } rounded-lg overflow-hidden ${
          transparent ? "shadow-none" : "shadow-xl"
        } transform transition-all w-full sm:mx-auto ${
          maxWidthClass[maxWidth]
        }`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
