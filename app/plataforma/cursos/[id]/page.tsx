import WrapperCurso from "@/app/ui/plataforma/estudiantes/cursos/wrapper-curso";
import { decodePayload } from "@/lib/blob";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { id: idRaw } = decodePayload(id);
  // console.log(identificador);
  return <WrapperCurso id={idRaw} />;
  // return <div className="mt-16 text-black">{id}</div>;
}
