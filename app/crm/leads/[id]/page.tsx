import LeadDetail from "@/app/ui/crm/leads/lead-detail";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="p-6 md:ml-64">
      <LeadDetail id={id} />
    </div>
  );
}
