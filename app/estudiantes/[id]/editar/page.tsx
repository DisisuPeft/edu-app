import EditStudent from "@/app/ui/estudiantes/edit-student";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="mt-10 text-gray-800">
      <EditStudent id={id} />
    </div>
  );
}
