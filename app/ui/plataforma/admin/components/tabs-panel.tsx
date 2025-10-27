"use client";

import { useState } from "react";
import Tabs from "@/app/ui/components/tabs";
import ModulosPanel from "./modulos-panel";
import UploadPage from "./upload-files";
import CommunityThread from "../../comunidad/community-thread";
import EnlaceClase from "../../links-clases/wrapper";

type Tab =
  | "Módulos"
  | "Enlace de la clase"
  | "Comunidad"
  | "Subir material de apoyo";

export default function TabsPanel({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("Módulos");

  const tabs: Tab[] = [
    "Módulos",
    "Enlace de la clase",
    "Comunidad",
    "Subir material de apoyo",
  ];

  return (
    <div className="w-full">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <main className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "Módulos" && <ModulosPanel id={id} />}
        {activeTab === "Enlace de la clase" && <EnlaceClase programaId={id} />}
        {activeTab === "Comunidad" && <CommunityThread diplomadoId={id} />}
        {activeTab === "Subir material de apoyo" && <UploadPage id={id} />}
      </main>
    </div>
  );
}
