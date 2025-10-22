import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import TabsPanelEstudiantes from "@/app/ui/plataforma/admin/components/tabs-panel-estudiantes";
import { decodePayload } from "@/lib/blob";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { id: idRaw } = decodePayload(id);
  return (
    <div className="space-y-8 py-14 font-sans">
      <div className="">
        <div className="flex justify-start items-center">
          <Link
            href="/plataforma/estudiantes"
            className="inline-flex items-center text-gray-800 hover:text-gray-900 ml-4 rounded-full p-4"
          >
            <ArrowLeftIcon className="h-[40px] w-[30px] mr-2" />
          </Link>
        </div>
        <div className="flex px-16">
          <TabsPanelEstudiantes id={idRaw} />
        </div>
      </div>
    </div>
  );
}
