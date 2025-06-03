import TeacherView from "@/app/ui/maestros/teacher-view";
type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params }: PageProps) {
  const { id } = params;
  return (
    <div className="text-gray-800 mt-12">
      <TeacherView id={id} />
    </div>
  );
}
