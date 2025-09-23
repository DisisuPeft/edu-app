"use client";
import { StatCard } from "./stat-card";
import { useRetrieveTotalCursosQuery } from "@/redux/features/estudiante/studentApiSlice";
import { BookOpen } from "lucide-react";

export default function StatComponent() {
  const { data: total, isLoading } = useRetrieveTotalCursosQuery();
  return (
    <div>
      {!isLoading && (
        <StatCard
          icon={<BookOpen className="h-6 max-w-xl" />}
          label="Diplomado(s) activo"
          value={total}
          color="text-white bg-primary"
        />
      )}
    </div>
  );
}
