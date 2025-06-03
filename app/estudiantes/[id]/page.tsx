import StudentView from "@/app/ui/estudiantes/student-view";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="text-gray-800 mt-12">
      <StudentView id={id} />
    </div>
  );
}
