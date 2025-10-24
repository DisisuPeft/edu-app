"use client";

import { useState } from "react";
import Tabs from "@/app/ui/components/tabs";
import ModulosPanel from "./modulos-panel";
import CommunityThread from "@/app/ui/plataforma/comunidad/community-thread";

type Tab = "Módulos" | "Comunidad" | "Proximas Clases" | "Calendario";

export default function TabsPanel({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("Módulos");

  const tabs: Tab[] = ["Módulos", "Comunidad", "Proximas Clases", "Calendario"];

  return (
    <div className="w-full">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <main className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "Módulos" && <ModulosPanel id={id} />}
        {activeTab === "Comunidad" && <CommunityThread diplomadoId={id} />}
      </main>
    </div>
  );
}
