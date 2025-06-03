import StudentView from "@/app/ui/estudiantes/student-view";
type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params }: PageProps) {
  const { id } = params;
  return (
    <div className="text-gray-800 mt-12">
      <StudentView id={id} />
    </div>
  );
}
