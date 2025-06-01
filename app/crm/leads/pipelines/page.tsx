import PipelinesList from "@/app/ui/crm/leads/pipelines/pipelines-list";

export default function Page() {
  return (
    <div className="p-6 md:ml-64">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Pipelines</h1>
      <PipelinesList />
    </div>
  );
}
