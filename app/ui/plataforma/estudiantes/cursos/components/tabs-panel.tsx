"use client";

import { useState } from "react";
import Tabs from "@/app/ui/components/tabs";
import ModulosPanel from "./modulos-panel";

type Tab = "Módulos" | "Actividades y Exámenes" | "Comunidad";

export default function TabsPanel({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("Módulos");

  const tabs: Tab[] = ["Módulos", "Actividades y Exámenes", "Comunidad"];

  return (
    <div className="w-full">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <main className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "Módulos" && <ModulosPanel id={id} />}
        {/* {activeTab === "modulos" && <ModulosPanel />}
          {activeTab === "actividades-y-examenes" && <ActividadExamenPanel />}
          {activeTab === "comunidad" && <ComunidadPanel />} */}
      </main>
    </div>
  );
}
