"use client";

import { useState } from "react";
import Tabs from "./tabs";
import { useGetTabsQuery } from "@/redux/sistema/SistemaApiSlice";
import UsuariosPanel from "./usuarios/usuarios-panel";
// import UnauthorizedPage from "../unauthorized"
import { Inform } from "@/alerts/toast";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<string | null>("Usuarios");
  const params = useSearchParams();
  const id = params.get("id");
  const query_id = id ? parseInt(id) : undefined;
  const { data: tabs, error } = useGetTabsQuery(query_id);
  //   console.log(tabs, isLoading)
  // useEffect(() => {
  //   console.log(params.get('id'))
  // })
  if (error) {
    return Inform({
      title: "Alerta",
      text: "No tienes acceso a las pestanias",
      icon: "error",
    });
  }
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <p className="text-gray-500 mt-2">
          Gestiona usuarios, roles, permisos y parámetros del sistema
        </p>
      </div>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <div className="mt-6">
        {activeTab === "Usuarios" && <UsuariosPanel />}
        {activeTab === "Roles" && <div>aqui roles</div>}
        {activeTab === "Permisos" && <div>aqui permisos</div>}
        {activeTab === "Modulos" && <div>aqui Modulos</div>}
        {activeTab === "Parametros" && <div>aqui parametros</div>}
      </div>
    </div>
  );
}
