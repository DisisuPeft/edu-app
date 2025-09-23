import { useGetMaterialesQuery } from "@/redux/features/admin/adminApiSlice";

export default function RightPanel({ id }: { id: string }) {
  const { data: materiales } = useGetMaterialesQuery(id);
  const handleDownload = (url: string, name: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", name);
    document.body.appendChild(link);
    link.click();
  };
  return (
    <aside className="w-[400px] rounded-lg shadow-xl overflow-y-auto text-black font-sans">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black mb-4">
            {"Materiales para descargar"}
          </h2>

          <div className="space-y-3">
            {/* <div className="text-sm font-medium text-black mb-2">
              {"Tema actual: Componentes"}
            </div> */}
            {materiales?.results
              ? materiales?.results?.map((material, index) => {
                  //   console.log(material, index);
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer group"
                      onClick={() =>
                        handleDownload(
                          material?.file?.download_url,
                          material?.file?.name
                        )
                      }
                    >
                      <div className="flex items-center gap-3">
                        {/* <span className="text-lg">{material.icon}</span> */}
                        <div>
                          <div className="font-medium text-sm text-foreground">
                            {material?.file?.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {/* {material.type} • {material.size} */}
                          </div>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-3">
                        <div className="w-5 h-5 border-2 border-muted-foreground rounded rotate-45"></div>
                      </div>
                    </div>
                  );
                })
              : "No existen materiales cargados"}
          </div>
        </div>

        {/* <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">
            {"Materiales generales"}
          </h3>
          <div className="space-y-3">
            {[
              {
                name: "Manual completo React",
                type: "PDF",
                size: "15.2 MB",
                icon: "📚",
              },
              {
                name: "Código fuente del curso",
                type: "ZIP",
                size: "8.7 MB",
                icon: "💻",
              },
              {
                name: "Recursos adicionales",
                type: "TXT",
                size: "0.1 MB",
                icon: "🔗",
              },
            ].map((material, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{material.icon}</span>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {material.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {material.type} • {material.size}
                    </div>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-5 h-5 border-2 border-muted-foreground rounded rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div>
          {/* <button className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium">
            {"Descargar todo"}
          </button> */}
        </div>
      </div>
    </aside>
  );
}
