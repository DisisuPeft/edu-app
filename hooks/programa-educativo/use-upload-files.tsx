"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRetrieveTypeDocumentosQuery } from "@/redux/features/admin/adminApiSlice";
import { useSendDocumentsMutation } from "@/redux/features/admin/adminApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAlert } from "@/redux/features/alert/alertSlice";
import { useRetrieveFilesQuery } from "@/redux/features/admin/fileApiSlice";

type FormData = {
  files: File[];
  typeId: number | "";
  moduloId: number | "";
  programaId: number | null;
};

export default function useUploadResources(id: string) {
  const [dragActive, setDragActive] = useState(false);
  const [sendDocuments] = useSendDocumentsMutation();
  const { data: materiales, refetch } = useRetrieveFilesQuery(parseInt(id));
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      files: [],
      typeId: 1,
      moduloId: "",
      programaId: parseInt(id),
    },
    mode: "onChange",
  });

  const files = watch("files");

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      const newFiles = Array.from(e.dataTransfer.files);
      setValue("files", [...files, ...newFiles], { shouldValidate: true });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setValue("files", [...files, ...newFiles], { shouldValidate: true });
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setValue("files", updatedFiles, { shouldValidate: true });
  };

  const onSubmit = (data: FormData) => {
    // console.log(data);
    const formData = new FormData();
    data.files.forEach((file) => {
      formData.append("files", file, file.name);
    });

    formData.append("typeId", String(data.typeId));
    formData.append("moduloId", String(data.moduloId));
    formData.append("programaId", String(data.programaId));
    sendDocuments(formData)
      .unwrap()
      .then(() => {
        dispatch(
          setAlert({ type: "success", message: "Documento(s) subido(s)" })
        );
        refetch();
        reset();
      })
      .catch(() => {
        dispatch(
          setAlert({
            type: "error",
            message: "No se pudieron subir los documentos",
          })
        );
      });
  };

  // Request a tipos de documentos
  const { data: documentos } = useRetrieveTypeDocumentosQuery();
  return {
    onSubmit,
    removeFile,
    handleDrag,
    handleDrop,
    handleFileSelect,
    handleSubmit,
    control,
    errors,
    isValid,
    dragActive,
    files,
    documentos,
    materiales,
  };
}
