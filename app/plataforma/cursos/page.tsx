import CursosList from "@/app/ui/plataforma/estudiantes/cursos/curso-list";

export default function Page() {
  return (
    <div className="container mx-auto p-10 mt-16">
      <h1 className="hidden md:block text-3xl font-bold text-gray-900 mb-8">
        Mis Cursos
      </h1>
      <CursosList />
    </div>
  );
}
