import { ComentarioNode } from "@/redux/interface/comunidad/comments";
import CommentForm from "./comments-form";
import CommentCard from "./comment-card";
import { useGetCommentsQuery } from "@/redux/features/comunidad/comentariosApiSlice";

export interface CommunityThreadProps {
  diplomadoId: string;
  //   apiBase?: string;
  //   authToken?: string;
  //   onSuccessCreate?: (payload: {
  //     contenido: string;
  //     parentId?: string | number;
  //   }) => void;
  //   onErrorCreate?: (message: string) => void;
}

export default function CommunityThread({ diplomadoId }: CommunityThreadProps) {
  const { data: comentarios } = useGetCommentsQuery(diplomadoId);
  if (!comentarios?.results || comentarios?.results?.length === 0) {
    return (
      <section className="w-full max-w-3xl mx-auto">
        {/* Compose card */}
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <CommentForm diplomadoId={diplomadoId} />
        </div>
        <div className="mt-4 rounded-2xl bg-white p-6 text-center text-gray-500 shadow-sm">
          Aún no hay comentarios. ¡Sé el primero en participar!
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-3xl mx-auto">
      {/* Compose card */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <CommentForm diplomadoId={diplomadoId} />
      </div>

      {/* Thread */}
      <div className="mt-4 flex flex-col gap-5">
        {comentarios?.results?.map((node: ComentarioNode) => (
          <div key={node.id} className="rounded-2xl bg-white p-4 shadow-sm">
            <CommentCard node={node} diplomadoId={diplomadoId} />
          </div>
        ))}
      </div>
    </section>
  );
}
