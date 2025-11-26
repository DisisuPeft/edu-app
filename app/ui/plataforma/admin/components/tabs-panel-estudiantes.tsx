"use client";

import { useState } from "react";
import Tabs from "@/app/ui/components/tabs";
import CourseEnrollment from "./inscription";
import UserEditForm from "@/app/components/admin/user-edit-model";
import PermissionsAccessForm from "../access-permissions";
import { useGetMenuQuery } from "@/redux/sistema/SistemaApiSlice";
import { useRetrieveViewUserQuery } from "@/redux/features/admin/adminApiSlice";

type Tab = "Editar" | "Permisos y accesos" | "Inscripción";

export default function TabsPanelEstudiantes({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("Editar");
  const { data: estudiante } = useRetrieveViewUserQuery(id);
  const { data: modulos } = useGetMenuQuery();
  const tabs: Tab[] = ["Editar", "Permisos y accesos", "Inscripción"];

  return (
    <div className="w-full">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <main className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "Editar" && <UserEditForm id={id} />}
        {activeTab === "Permisos y accesos" && (
          <PermissionsAccessForm
            userId={estudiante?.perfil?.user?.id}
            modules={modulos}
          />
        )}
        {activeTab === "Inscripción" && <CourseEnrollment estudiante_id={id} />}
      </main>
    </div>
  );
}
