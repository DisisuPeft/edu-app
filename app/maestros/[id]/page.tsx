import TeacherView from "@/app/ui/maestros/teacher-view";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className="text-gray-800 mt-12">
      <TeacherView id={id} />
    </div>
  );
}
