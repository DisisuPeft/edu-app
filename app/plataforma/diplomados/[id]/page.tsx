import CursoHeader from "@/app/ui/plataforma/admin/components/curso-header";
import TabsPanel from "@/app/ui/plataforma/admin/components/tabs-panel";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    // <div className="">
    <div className="mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <header className="mb-8">
        <CursoHeader id={id} />
      </header>

      <div className="w-full">
        <TabsPanel id={id} />
      </div>
      {/* </div> */}
    </div>
  );
}
