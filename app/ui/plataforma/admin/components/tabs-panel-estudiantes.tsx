"use client";

import { useState } from "react";
import Tabs from "@/app/ui/components/tabs";
import CourseEnrollment from "./inscription";
import UserEditForm from "@/app/components/admin/user-edit-model";

type Tab = "Editar" | "Inscripción";

export default function TabsPanelEstudiantes({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("Editar");

  const tabs: Tab[] = ["Editar", "Inscripción"];

  return (
    <div className="w-full">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <main className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "Editar" && <UserEditForm id={id} />}
        {activeTab === "Inscripción" && <CourseEnrollment estudiante_id={id} />}
      </main>
    </div>
  );
}
