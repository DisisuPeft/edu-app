// "use client";

// import { useCreateLead } from "@/hooks";
// import type React from "react";

// export default function CreateLeadPage() {
//   const { formData, onChange, onSubmit, etapas } = useCreateLead();

//   return (
//     <div className="bg-gray-50 py-8 px-4 text-gray-800">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-lg p-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-6">
//             Crear Nuevo Lead
//           </h1>

//           <form onSubmit={onSubmit} className="space-y-6">
//             {/* ID Field */}
//             {/* <div>
//               <label
//                 htmlFor="id"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 ID
//               </label>
//               <input
//                 type="text"
//                 id="id"
//                 name="id"
//                 value={formData.id}
//                 disabled
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none"
//               />
//             </div> */}

//             {/* Nombre Field */}
//             <div>
//               <label
//                 htmlFor="nombre"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Nombre *
//               </label>
//               <input
//                 type="text"
//                 id="nombre"
//                 name="nombre"
//                 value={formData.nombre}
//                 onChange={onChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                 placeholder="Ingresa el nombre completo"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="correo"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Fecha de inicio *
//               </label>
//               <input
//                 type="email"
//                 id="correo"
//                 name="correo"
//                 value={formData.correo}
//                 onChange={onChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                 placeholder="ejemplo@correo.com"
//               />
//             </div>

//             {/* Teléfono Field */}
//             <div>
//               <label
//                 htmlFor="telefono"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Teléfono
//               </label>
//               <input
//                 type="tel"
//                 id="telefono"
//                 name="telefono"
//                 value={formData.telefono}
//                 onChange={onChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                 placeholder="+52 55 1234 5678"
//               />
//             </div>

//             {/* Botones */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-6">
//               <button
//                 type="submit"
//                 className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
//               >
//                 Crear Lead
//               </button>
//               <button
//                 type="button"
//                 className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
//               >
//                 Cancelar
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
