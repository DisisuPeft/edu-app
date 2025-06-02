import CatalogoGenerico from "@/app/ui/crm/generics/catalogo-generico";
import PipelinesList from "@/app/ui/crm/leads/pipelines/pipelines-list";

export default function Page() {
  return (
    <div className="p-6 md:ml-64">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Fuentes</h1>
      <CatalogoGenerico
        tipo="fuente"
        titulo="Fuentes"
        descripcion="Gestiona las fuentes de donde provienen los leads."
      />
    </div>
  );
}
