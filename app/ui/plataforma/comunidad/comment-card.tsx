import { ComentarioNode } from "@/redux/interface/comunidad/comments";
import { useState, useMemo } from "react";
import { initialsFromName, timeAgo } from "./helpers/helper";
import CommentForm from "./comments-form";

export default function CommentCard({
  node,
  diplomadoId,
}: {
  node: ComentarioNode;
  diplomadoId: string;
}) {
  const [showReply, setShowReply] = useState(false);
  const [expand, setExpand] = useState(true);

  const hasChildren = (node.respuestas?.length || 0) > 0;

  const avatar = useMemo(() => {
    const ini = initialsFromName(node.usuario);
    return (
      <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold">
        {ini}
      </div>
    );
  }, [node.usuario]);
  //   console.log(typeof node.id);
  return (
    <div className="flex gap-3">
      {avatar}
      <div className="flex-1">
        <div className="inline-block rounded-2xl bg-gray-100 px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-900">{node.usuario}</span>
            <span className="text-gray-400">
              · {timeAgo(node.fecha_creacion)}
            </span>
          </div>
          <p className="mt-1 whitespace-pre-line text-[15px] text-gray-800">
            {node.comentario}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-4 text-xs text-gray-500">
          <button
            className="hover:underline ml-3 font-bold"
            onClick={() => setShowReply((s) => !s)}
          >
            {showReply ? "Cancelar" : "Responder"}
          </button>
          {hasChildren && (
            <button
              className="hover:underline"
              onClick={() => setExpand((e) => !e)}
            >
              {expand
                ? "Ocultar respuestas"
                : `Ver respuestas (${node.respuestas!.length})`}
            </button>
          )}
        </div>
        {showReply && (
          <div className="mt-3 pl-2">
            <CommentForm
              diplomadoId={diplomadoId}
              parentId={node.id}
              placeholder={`Responder a ${node.usuario}…`}
            />
          </div>
        )}
        {hasChildren ? (
          expand && (
            <div className="mt-3 ml-10 flex flex-col gap-4 border-l pl-4">
              {node.respuestas!.map((child) => (
                <CommentCard
                  key={child.id}
                  node={child}
                  diplomadoId={diplomadoId}
                />
              ))}
            </div>
          )
        ) : (
          <div className="mt-2 ml-10 border-l pl-4 text-xs text-gray-400">
            Sin respuestas aún
          </div>
        )}
      </div>
    </div>
  );
}
