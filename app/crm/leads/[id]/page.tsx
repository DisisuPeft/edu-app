import LeadDetail from "@/app/ui/crm/leads/lead-detail";
// type PageProps = {
//   params: {
//     id: string;
//   };
// };
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="p-6 md:ml-64">
      <LeadDetail id={id} />
    </div>
  );
}
