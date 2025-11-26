import StudentPaymentsPage from "@/app/ui/plataforma/pagos/payment";
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
    <div className="mx-auto p-2 sm:p-6 lg:p-8 font-sans mt-12 text-gray-800">
      <StudentPaymentsPage raw_param={idRaw} />
    </div>
  );
}
