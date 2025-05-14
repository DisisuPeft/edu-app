import { useState } from "react";
import { Send } from "lucide-react";

interface LeadNoteFormProps {
  leadId: string;
  onAddNote?: (
    leadId: string,
    nota: { autor: string; contenido: string; fecha: string }
  ) => void;
}

export default function LeadNoteForm({ leadId, onAddNote }: LeadNoteFormProps) {
//   const [nota, setNota] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("notas")
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-start">
        <textarea
          //   value={nota}
          //   onChange={(e) => setNota(e.target.value)}
          placeholder="Escribe una nota..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={3}
        ></textarea>
        <button
          //   type="submit"
          //   disabled={!nota.trim()}
          className="ml-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
