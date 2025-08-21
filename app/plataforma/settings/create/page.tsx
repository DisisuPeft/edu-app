import UserCreateForm from "@/app/components/admin/user-model";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-8 p-10">
      <div className="flex flex-row max-w-[600px]">
        <div className="flex justify-center items-center">
          <Link
            href="/plataforma/settings"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 ml-4 rounded-full bg-black p-4"
          >
            <ArrowLeftIcon className="h-[20px] w-[30px] mr-2 text-white" />
            {/* Volver a la lista */}
          </Link>
        </div>
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-3xl font-bold text-gray-900">Nuevo usuario</h1>
          <p className="text-gray-600 mt-1">Agregar nuevo estudiante.</p>
        </div>
      </div>
      <UserCreateForm />
    </div>
  );
}
