import EditTeacher from "@/app/ui/maestros/edit-teacher";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className="mt-10 text-gray-800">
      <EditTeacher id={id} />
    </div>
  );
}
