import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface DataTableProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  data: T[];
}

export function DataTable<T>({ columns, data }: DataTableProps<T>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-2 text-sm text-gray-800 border-b"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import { Column } from "@/redux/interface/data-table/data-table-types";
// // import { useEffect, useState } from "react";
// import Link from "next/link";
// // import Edit, Trash2
// import { Edit } from "lucide-react";

// interface HasId {
//   id: number | string;
// }
// interface ControlledProps<T extends HasId> {
//   columns: Column<T>[];
//   data: T[] | undefined;
//   totalCount: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
//   itemsPerPage: number;
//   path?: string;
//   query_id?: number;
// }

// export default function DataTable<T extends HasId>({
//   columns,
//   data,
//   totalCount,
//   currentPage,
//   onPageChange,
//   itemsPerPage,
//   path,
//   query_id,
// }: ControlledProps<T>) {
//   const totalPages = Math.ceil(totalCount / itemsPerPage);
//   return (
//     <div className="w-full">
//       <table className="min-w-full border border-gray-200 text-gray-800">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             {columns.map((col) => (
//               <th key={col.accessor as string} className="p-2 border">
//                 {col.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((item, idx) => (
//             <tr key={idx}>
//               {columns.map((col) => (
//                 <td key={col.accessor as string} className="p-2 border">
//                   {col.accessor === "acciones" ? (
//                     <div className="flex gap-2">
//                       {/* <button onClick={() => onDelete(row.id)}>
//                         <Trash2 className="w-4 h-4 text-red-600" />
//                       </button> */}
//                       <Link
//                         href={{
//                           pathname: `${path}${item.id}`,
//                           query: { id: query_id },
//                         }}
//                       >
//                         <Edit className="text-blue-600" size={30} />
//                       </Link>
//                     </div>
//                   ) : (
//                     String(item[col.accessor])
//                   )}
//                   {/* {String(item[col.accessor])} */}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Paginación */}
//       <div className="flex justify-center gap-2 mt-4 text-gray-800 p-2">
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Anterior
//         </button>
//         <span className="px-3 py-1">
//           Página {currentPage} de {totalPages}
//         </span>
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// }
