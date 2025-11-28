"use client";

import { useState } from "react";
import Tabs from "@/app/ui/components/tabs";
import ModulosPanel from "./modulos-panel";
import CommunityThread from "@/app/ui/plataforma/comunidad/community-thread";
import Calender from "../../../calender/calender";

type Tab = "Módulos" | "Comunidad" | "Proximas Clases" | "Calendario de clases";

export default function TabsPanel({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("Módulos");

  const tabs: Tab[] = [
    "Módulos",
    "Comunidad",
    // "Proximas Clases",
    "Calendario de clases",
  ];

  return (
    <div className="w-full">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <main className="mt-6 bg-white p-6 rounded-lg shadow-sm font-serif">
        {activeTab === "Módulos" && <ModulosPanel id={id} />}
        {activeTab === "Comunidad" && <CommunityThread diplomadoId={id} />}
        {activeTab === "Calendario de clases" && <Calender programaId={id} />}
      </main>
    </div>
  );
}
