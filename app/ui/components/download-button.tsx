"use client";

import { useLazyDownloadMaterialQuery } from "@/redux/features/admin/adminApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAlert } from "@/redux/features/alert/alertSlice";

interface Props {
  id: string;
  name: string;
}
export default function DownloadButton({ id, name }: Props) {
  const dispatch = useAppDispatch();
  const [triggerDownload, { isLoading }] = useLazyDownloadMaterialQuery();

  const handleDownload = async () => {
    try {
      const result = await triggerDownload(id).unwrap();
      // console.log(result);
      if (result) {
        const url = URL.createObjectURL(result);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      // console.error("Error descargando archivo:", error);
      const message =
        error.status === 404
          ? "Archivo no encontrado en el servidor, contacta con soporte"
          : "Error descargando archivo";
      dispatch(setAlert({ message, type: "error" }));
    }
  };
  return (
    <div
      className="opacity-0 group-hover:opacity-100 transition-opacity ml-3 cursor-pointer"
      onClick={handleDownload}
      title="Descargar archivo"
    >
      <div className="w-5 h-5 border-2 border-muted-foreground rounded rotate-45 flex items-center justify-center">
        {isLoading ? (
          <span className="animate-spin text-xs">⟳</span>
        ) : (
          <span className="text-xs">↓</span>
        )}
      </div>
    </div>
  );
}
