"use client";

import { useState } from "react";
import {
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useGetTabsQuery } from "@/redux/sistema/SistemaApiSlice";
import { useSearchParams } from "next/navigation";

export default function Sidebar() {
  const params = useSearchParams();
  const id = params.get("id");
  const query_id = id ? parseInt(id) : undefined;
  const { data: tabs } = useGetTabsQuery(query_id);
  console.log(tabs);
  return <div>Hola</div>;
}
