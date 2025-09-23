import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  color: string;
}

export function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
      <div className={`rounded-full p-3 ${color}`}>{icon}</div>
      <div className="flex-wrap">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
