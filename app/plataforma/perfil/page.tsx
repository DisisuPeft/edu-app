// import CalificationPage from "@/app/ui/plataforma/estudiantes/calificaciones/calification-dash";
import PerfilForm from "@/app/ui/plataforma/estudiantes/perfil/perfil-form";
import UserName from "@/app/ui/plataforma/user-name";

export default function Page() {
  return (
    <div className="space-y-8 p-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          <UserName title="Perfil de" />
        </h1>
        <p className="text-gray-600 mt-1">Consulta tus datos y actualizalos</p>
      </div>
      <PerfilForm />
    </div>
  );
}
