"use client"

import { useGetLeadsQuery } from "@/redux/crm/crmApiSlice";
import { Lead } from "@/redux/interface/crm/crm";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
    getPaginationRowModel,
} from '@tanstack/react-table';
import { Edit, Delete, Plus, Search, Filter } from "lucide-react";
import Link from "next/link";
// Faltaria agregar filtos de busqueda
export default function LeadList(){
    const {data:leads, isLoading} = useGetLeadsQuery()
    const columns: ColumnDef<Lead>[] = [
        {
          accessorKey: "nombre",
          header: "Nombre del Lead",
        },
        {
          accessorKey: "correo",
          header: "Correo",
        },
        {
          accessorKey: "telefono",
          header: "Teléfono",
        },
        {
          accessorKey: "fuente.nombre",
          header: "Fuente",
        },
        {
          accessorKey: "etapa.nombre",
          header: "Etapa",
        },
        {
          accessorKey: "interesado_en.nombre",
          header: "Programa de Interés",
        },
        {
          accessorFn: (row) => `${row?.vendedor_asignado?.profile?.nombre} ${row?.vendedor_asignado?.profile.apellidoP}`,
          id: "vendedor",
          header: "Vendedor Asignado",
        },
        {
          accessorKey: "empresa.nombre",
          header: "Empresa",
          cell: ({ row }) => row.original.empresa?.nombre || "N/A",
        },
        {
          accessorKey: "institucion.nombre",
          header: "Institución",
        },
        {
          accessorKey: "fecha_creacion",
          header: "Fecha de Creación",
          cell: ({ row }) => new Date(row?.original?.fecha_creacion).toLocaleString(),
        },
              {
                accessorFn: (row) => row,
                cell: ({getValue}) => {
                  const lead = getValue() as Lead
                  return (
                    <div className="flex flex-row w-full p-2 gap-2">
                      <div className="flex justify-center">
                        <Link className="" href={{pathname: `/crm/leads/${lead.id}`, query:{id: 6}}}>
                          <Edit />
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <button className="">
                          <Delete />
                        </button>
                      </div>
                    </div>
                  )
                },
                id: 'actions',
                header: 'Acciones',
              }
    ];
    const table = useReactTable<Lead>({
        data: leads || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
      <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar leads..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <button
              // onClick={() => setShowCreateModal(true)}
              className="flex items-center px-4 py-2 bg-sky-500 rounded-lg text-white hover:bg-sky-700 transition-colors"
            >
              <Plus className="mr-2 h-5 w-5" />
              Nuevo Lead
            </button>
          </div>
                {/* Filtros */}
          <div className="bg-white p-4 rounded-lg shadow mb-6 text-gray-800">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium">Filtros</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <select
                className="w-full p-2 border rounded-md"
                // value={filters.programa}
                // onChange={(e) => setFilters({ ...filters, programa: e.target.value })}
              >
                <option value="">Todos los programas</option>
                {/* {programas.map((programa) => (
                  <option key={programa.id} value={programa.nombre}>
                    {programa.nombre}
                  </option>
                ))} */}
              </select>

              <select
                className="w-full p-2 border rounded-md"
                // value={filters.etapa}
                // onChange={(e) => setFilters({ ...filters, etapa: e.target.value })}
              >
                <option value="">Todas las etapas</option>
                {/* {etapas.map((etapa) => (
                  <option key={etapa} value={etapa}>
                    {etapa}
                  </option>
                ))} */}
              </select>

              <select
                className="w-full p-2 border rounded-md"
                // value={filters.estatus}
                // onChange={(e) => setFilters({ ...filters, estatus: e.target.value })}
              >
                <option value="">Todos los estatus</option>
                {/* {estatus.map((est) => (
                  <option key={est.id} value={est.nombre}>
                    {est.nombre}
                  </option>
                ))} */}
              </select>

              <select
                className="w-full p-2 border rounded-md"
                // value={filters.vendedor}
                // onChange={(e) => setFilters({ ...filters, vendedor: e.target.value })}
              >
                <option value="">Todos los vendedores</option>
                {/* {vendedores.map((vendedor) => (
                  <option key={vendedor.id} value={vendedor.nombre}>
                    {vendedor.nombre}
                  </option>
                ))} */}
              </select>

              <select
                className="w-full p-2 border rounded-md"
                // value={filters.fuente}
                // onChange={(e) => setFilters({ ...filters, fuente: e.target.value })}
              >
                <option value="">Todas las fuentes</option>
                {/* {fuentes.map((fuente) => (
                  <option key={fuente.id} value={fuente.nombre}>
                    {fuente.nombre}
                  </option>
                ))} */}
              </select>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border border-gray-200 shadow-md">
            <table className="min-w-full divide-y divide-gray-300 bg-white text-sm">
              <thead className="bg-gray-100">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="px-4 py-3 text-left font-semibold text-gray-700">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-4 py-2 text-gray-800">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>
    )
}