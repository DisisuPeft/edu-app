import { useUploadResources } from "@/hooks";
import { Controller } from "react-hook-form";

export default function UploadPage({ id }: { id: string }) {
  const {
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
  } = useUploadResources(id);

  return (
    <div className="bg-white font-sans text-black">
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

          {/* PASO 2: Metadatos */}
          <section className="mb-12">
            <div className="border-4 border-primary bg-card p-8 rounded-lg">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">
                Metadatos
              </h2>

              <div className="grid md:grid-cols-1 gap-6">
                {/* TypeFile */}
                <div>
                  <label className="block font-bold text-primary mb-2 uppercase tracking-wide">
                    Tipo de Archivo
                  </label>
                  <Controller
                    name="typeId"
                    control={control}
                    rules={{ required: "Selecciona un tipo" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full p-3 border-4 border-primary bg-input text-foreground"
                      >
                        <option value="">-- selecciona --</option>
                        {documentos?.map((doc) => (
                          <option key={doc.nombre} value={doc.id}>
                            {doc.nombre}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.typeId && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.typeId.message as string}
                    </p>
                  )}
                </div>
                -
                {/* <div>
                  <label className="block font-bold text-primary mb-2 uppercase tracking-wide">
                    Módulo
                  </label>
                  <Controller
                    name="moduloId"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        min={1}
                        placeholder="ID de módulo"
                        {...field}
                        className="w-full p-3 border-4 border-primary bg-input text-foreground"
                      />
                    )}
                  />
                </div>
=
                <div>
                  <label className="block font-bold text-primary mb-2 uppercase tracking-wide">
                    Submódulo
                  </label>
                  <Controller
                    name="submoduloId"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        min={1}
                        placeholder="ID de submódulo"
                        {...field}
                        className="w-full p-3 border-4 border-primary bg-input text-foreground"
                      />
                    )}
                  />
                </div> */}
              </div>
            </div>
          </section>
        </main>
      </form>
    </div>
  );
}
