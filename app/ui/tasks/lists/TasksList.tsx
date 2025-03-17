'use client'
import { useGetTaskQuery } from "@/redux/task/taskapiSlice"
import { PencilIcon, Delete } from "lucide-react"
import Link from "next/link"

export default function TasksList(){
    const {data: tasks} = useGetTaskQuery()
    return (
        <section>
            <div className="overflow-x-auto xl:overflow-hidden bg-white shadow-md rounded-lg">
                <table className="min-w-full table-auto border border-gray-600">
                    <thead className="bg-gray-600">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">Nombre</th>
                                <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">Descripcion</th>
                                    <th className="px-4 py-2 text-left text-xs font-semibold text-white uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {tasks?.map((task, index) => (
                                    <tr key={task.id} className={index % 2 === 0 ? "bg-gray-50 border border-gray-600" : "bg-white"}>
                                        <td className="px-4 py-2 whitespace-nowrap border border-gray-600">
                                            <div className="text-lg font-medium text-gray-900">{task.name}</div>
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap border border-gray-600">
                                            <div className="text-lg font-medium text-gray-900">{task.description}</div>
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <div className="flex flex-row max-w-5 gap-2">
                                                <div className="flex items-center">
                                                    <Link className="text-black" href={`/tasks/edit/${task.id}`}>
                                                        <PencilIcon/>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="text-black">
                                                        <Delete />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        </section>
    )
}