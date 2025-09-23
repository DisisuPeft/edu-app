import UserEditForm from "@/app/components/admin/user-edit-model";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import CourseEnrollment from "@/app/ui/plataforma/admin/components/inscription";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-8 py-14 font-sans">
      <div className="flex flex-row max-w-[600px]">
        <div className="flex justify-center items-center">
          <Link
            href="/plataforma/settings"
            className="inline-flex items-center text-gray-800 hover:text-gray-900 ml-4 rounded-full p-4"
          >
            <ArrowLeftIcon className="h-[40px] w-[30px] mr-2" />
            {/* Volver a la lista */}
          </Link>
        </div>
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-3xl font-bold text-gray-900">Editar</h1>
          {/* <p className="text-gray-600 mt-1">Agregar nuevo estudiante.</p> */}
        </div>
      </div>
      <div>
        <UserEditForm id={id} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 ml-12">Inscripción</h1>
      <div className="flex justify-center">
        <CourseEnrollment estudiante_id={id} />
      </div>
    </div>
  );
}
