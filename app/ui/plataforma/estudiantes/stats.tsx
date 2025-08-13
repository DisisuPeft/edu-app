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
          icon={<BookOpen className="h-6 w-6" />}
          label="Cursos Activos"
          value={total}
          color="text-blue-600 bg-blue-100"
        />
      )}
    </div>
  );
}
