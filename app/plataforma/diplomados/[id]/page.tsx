import CursoHeader from "@/app/ui/plataforma/admin/components/curso-header";
import TabsPanel from "@/app/ui/plataforma/admin/components/tabs-panel";
import { decodePayload } from "@/lib/blob";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { id: idRaw } = decodePayload(id);
  // console.log(idRaw);
  return (
    // <div className="">
    <div className="mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <header className="mb-8">
        <CursoHeader id={idRaw} />
      </header>

      <div className="w-full">
        <TabsPanel id={idRaw} />
      </div>
      {/* </div> */}
    </div>
  );
}
