// import { useEditUser } from "@/hooks";
// import {
//   useGetGeneroQuery,
//   useGetNivelesQuery,
//   useGetRolesQuery,
//   useGetPermissionQuery,
// } from "@/redux/catalogos/CatApiSlice";

// interface Props {
//   id: number | undefined;
//   onClose?: (event: boolean) => void;
// }

// export default function EditUser({ id, onClose }: Props) {
//   const { formData, onChange, onSubmit } = useEditUser({
//     id,
//     onClose,
//   });

//   const { data: niveles } = useGetNivelesQuery();
//   const { data: generos } = useGetGeneroQuery();
//   const { data: roles } = useGetRolesQuery();
//   const { data: permissions } = useGetPermissionQuery();

//   return (
//     <div className="max-w-[900px] mx-auto mt-10 p-6">
//       <form onSubmit={onSubmit} className="space-y-4">
//         <div className="flex flex-col md:flex-row w-full gap-10">
//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="email"
//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={onChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               placeholder="Ingrese el email"
//             />
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="nombre"
//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Nombre
//             </label>
//             <input
//               id="nombre"
//               name="nombre"
//               type="text"
//               value={formData.profile.nombre}
//               onChange={onChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               placeholder="Ingrese el nombre"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row w-full gap-10">
//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="apellidoP"
//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Apellido Paterno
//             </label>
//             <input
//               id="apellidoP"
//               name="apellidoP"
//               type="text"
//               value={formData.profile.apellidoP}
//               onChange={onChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               placeholder="Ingrese el apellido paterno"
//             />
//           </div>

//           <div className="flex flex-col w-full">
//             <label
//               htmlFor="apellidoM"
//               className="text-sm font-medium text-gray-700 mb-1"
//             >
//               Apellido Materno
//             </label>
//             <input
//               id="apellidoM"
//               name="apellidoM"
//               type="text"
//               value={formData.profile.apellidoM}
//               onChange={onChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               placeholder="Ingrese el apellido materno"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="fechaNacimiento"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Fecha de Nacimiento
//           </label>
//           <input
//             id="fechaNacimiento"
//             type="date"
//             name="fechaNacimiento"
//             value={formData.profile.fechaNacimiento}
//             onChange={onChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="edad"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Edad
//           </label>
//           <input
//             id="edad"
//             name="edad"
//             type="number"
//             value={formData.profile.edad}
//             onChange={onChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//             placeholder="Ingrese la edad"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="nivEdu"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Niveles Educativos
//           </label>
//           <select
//             id="nivEdu"
//             name="nivEdu"
//             value={formData.profile.nivEdu}
//             onChange={onChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
//           >
//             <option value="0">Seleccionar</option>
//             {niveles?.map((nivel) => (
//               <option value={nivel.id ?? 0} key={nivel.id}>
//                 {nivel.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="genero"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Género
//           </label>
//           <select
//             id="genero"
//             name="genero"
//             value={formData.profile.genero}
//             onChange={onChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
//           >
//             <option value="0">Seleccionar</option>
//             {generos?.map((gen) => (
//               <option value={gen.id ?? 0} key={gen.id}>
//                 {gen.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="telefono"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Teléfono Celular
//           </label>
//           <input
//             id="telefono"
//             name="telefono"
//             type="text"
//             value={formData.profile.telefono}
//             onChange={onChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//             placeholder="Ingrese el teléfono"
//           />
//         </div>

//         <div className="bg-white border border-gray-300 rounded-md p-4">
//           <h2 className="text-sm font-medium text-gray-700 mb-3">
//             Seleccionar Roles
//           </h2>
//           <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto">
//             {roles?.map((role) => (
//               <label
//                 key={role.id}
//                 className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
//               >
//                 <input
//                   name="role"
//                   type="checkbox"
//                   value={role.id}
//                   checked={formData.roleID?.some((r) => r.id === role.id)}
//                   onChange={onChange}
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-gray-700">{role.name}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white border border-gray-300 rounded-md p-4">
//           <h2 className="text-sm font-medium text-gray-700 mb-3">
//             Seleccionar Permisos
//           </h2>
//           <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto">
//             {permissions?.map((p) => (
//               <label
//                 key={p.id}
//                 className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
//               >
//                 <input
//                   name="permission"
//                   type="checkbox"
//                   value={p.id}
//                   checked={formData.permission?.some((r) => r.id === p.id)}
//                   onChange={onChange}
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-gray-700">{p.name}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="w-[20%]">
//           <button
//             type="submit"
//             className="w-full bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-300 font-medium"
//           >
//             Guardar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
