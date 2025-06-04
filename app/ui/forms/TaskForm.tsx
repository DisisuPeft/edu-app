// 'use client'
// // import { Modal } from "@/app/components/common/Modal";
// // import { useRouteTest } from "@/hooks"
// // import { DoorClosedIcon } from "lucide-react"
// import { useCreateTask } from "@/hooks"
// export default function TaskForm(){
//     const {name, description, isLoading, onChange, onSubmit} = useCreateTask()
//     // console.log(name, description)
//     return (
//             <form className="bg-white max-w-[700px] p-4 rounded-lg shadow-md" onSubmit={onSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
//                         Nombre
//                     </label>
//                     <input
//                     name="name"
//                     placeholder="Ingresar nombre de la tarea"
//                     type="text"
//                     value={name}
//                     onChange={onChange}
//                     className="border-4 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
//                         Descripcion
//                     </label>
//                     <textarea
//                     name="description"
//                     rows={5}
//                     placeholder="Enter your content"
//                     id="content"
//                     value={description}
//                     onChange={onChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     ></textarea>
//                 </div>
//                 <div className="flex items-center justify-end p-4">
//                     <button className="bg-slate-800 text-white p-2 rounded-lg">
//                         {isLoading ? (<div>
//                             Guardando...
//                         </div>): <div>Guardar</div>}
//                     </button>
//                 </div>
//             </form>
//     )
// }
