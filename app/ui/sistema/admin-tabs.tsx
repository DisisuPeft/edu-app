"use client"

import { useState } from "react"
import Tabs from "./tabs"
import { useGetTabsQuery } from "@/redux/sistema/SistemaApiSlice"
import UsuariosTabla from "./usuarios/usuarios-table"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<string | null>("Usuarios")
  const {data:tabs, isLoading} = useGetTabsQuery()
//   console.log(tabs, isLoading)  
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <p className="text-gray-500 mt-2">Gestiona usuarios, roles, permisos y parámetros del sistema</p>
      </div>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <div className="mt-6">
        {activeTab === "Usuarios" && <UsuariosTabla/>}
        {activeTab === "Roles" && <div>aqui roles</div>}
        {activeTab === "Permisos" && <div>aqui permisos</div>}
        {activeTab === "Parametros" && <div>aqui parametros</div>}
      </div>
    </div>
  )
}
