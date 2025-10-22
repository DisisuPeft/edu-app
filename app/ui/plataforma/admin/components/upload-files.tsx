import { useUploadResources } from "@/hooks";
// import { useRetrieveFilesQuery } from "@/redux/features/admin/fileApiSlice";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/app/components/common/Modal";
import DeleteFiles from "./delete-files";
import { Material } from "@/redux/features/admin/types";

export default function UploadPage({ id }: { id: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [file, setFile] = useState<Material | null>(null);
  const {
    onSubmit,
    removeFile,
    handleDrag,
    handleDrop,
    handleFileSelect,
    handleSubmit,
    // control,
    // errors,
    isValid,
    dragActive,
    files,
    // documentos,
    materiales,
  } = useUploadResources(id);

  // const { data: materiales } = useRetrieveFilesQuery(parseInt(id));

  // const deleteFile = (id: number) => {
  //   console.log(id);
  // };

  // const openModal = () => {
  //   setShow(true);
  // };

  const closeModal = (value?: boolean) => {
    if (!value) {
      return setShow(false);
    }
    return setShow(value);
  };

  return (
    <div className="bg-white font-sans text-black">
      <Modal show={show} onClose={closeModal}>
        <DeleteFiles material={file} onCancel={closeModal} id={id} />
      </Modal>
      {materiales?.results ? (
        <div className="border-b-4 border-primary">
          {/* border-b-4 border-primary  */}
          <header className="border-b-4 border-primary bg-card">
            <div className="max-w-4xl mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Archivos subidos
              </h1>
              <p className="text-muted text-lg">Materiales adjunto de apoyo</p>
            </div>
          </header>
          <div>
            {materiales?.results?.map((material, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {/* <span className="text-lg">{material.icon}</span>  cursor-pointer group*/}
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {material?.file?.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {/* {material.type} • {material.size} */}
                    </div>
                  </div>
                </div>
                <div className="">
                  {/* <div className="w-5 h-5 border-2 border-muted-foreground rounded rotate-45"></div> */}
                  <Trash2
                    className="cursor-pointer group"
                    onClick={() => {
                      setFile(material);
                      setShow(true);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <header className="border-b-4 border-primary bg-card">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Subir archivos
          </h1>
          <p className="text-muted text-lg">Adjunta materiales de apoyo</p>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* PASO 1: Archivos */}
          <section className="mb-12">
            <div className="border-4 border-primary bg-card p-8 rounded-lg">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">
                Selección
              </h2>

              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.ppt,.pptx"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="block w-full p-4 border-4 border-primary bg-input text-black text-center font-semibold cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    Seleccionar archivos
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={files.length === 0 || !isValid}
                  className="px-8 py-4 bg-secondary text-white font-bold border-4 border-secondary hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Subir
                </button>
              </div>

              <div
                className={`border-4 border-dashed p-12 text-center transition-colors ${
                  dragActive
                    ? "border-secondary bg-secondary/10"
                    : "border-primary bg-input"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <p className="text-lg font-semibold text-primary mb-2">
                  Arrastra y suelta archivos aquí
                </p>
                <p className="text-muted">
                  o haz clic en &quot;Seleccionar archivos&quot; arriba
                </p>
              </div>

              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-bold text-primary mb-4">
                    Archivos seleccionados:
                  </h3>
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-input border-2 border-border"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-foreground">
                            {file.name}
                          </span>
                          <span className="text-sm text-muted">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-destructive hover:text-destructive/80 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </form>
    </div>
  );
}
