import LeadDetail from "@/app/ui/crm/leads/lead-detail";
type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params }: PageProps) {
  const { id } = params;
  return (
    <div className="p-6 md:ml-64">
      <LeadDetail id={id} />
    </div>
  );
}
