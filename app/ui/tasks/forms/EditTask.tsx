'use client'
// import { useEditTaskQuery } from "@/app/redux/task/taskapiSlice"
import { useEditTask } from "@/hooks"
import { Loader } from "lucide-react"
import dynamic from "next/dynamic"
// import { useParams } from "next/navigation"
// import Map from "../../map/Map"
import { useMemo } from "react"
// import { Card } from "../../dashboard/cards"
export function Card({
  title,
}: {
  title: number | null | undefined;
}) {

  return (
    <div className="max-w-[700px] rounded-xl bg-gray-200 shadow-xl">
      {/* <div className=""> */}
        <h3 className="ml-2 text-lg text-black font-medium">{title}</h3>
      {/* </div> */}
    </div>
  );
}
export default function EditTask(){
    // const id = parseInt(params.id)
    // const params = useParams()
    // const {data: task} = useEditTaskQuery(taskID ? parseInt(taskID): 0)
    const {onChange, isLoading, onSubmit, formData} = useEditTask()
    // console.log(formData)
    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-[50px]">
                {/* <form className="" onSubmit={onSubmit}> */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre
                        </label>
                        <input
                        name="name"
                        placeholder="Ingresar nombre de la tarea"
                        type="text"
                        value={formData?.name}
                        onChange={onChange}
                        className="border border-gray-600 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="md:mt-16">
                        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                            Descripcion
                        </label>
                        <textarea
                        name="description"
                        rows={5}
                        placeholder="Enter your content"
                        id="content"
                        value={formData?.description}
                        onChange={onChange}
                        className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></textarea>
                    </div>
                {/* </form> */}
            </div>
            <div className="flex items-center justify-end p-4">
                    <button className="bg-slate-800 text-white p-2 rounded-lg">
                        {isLoading ? (<div>
                            Guardando...
                        </div>): <div>Guardar</div>}
                    </button>
            </div>
        </form>
    )

}