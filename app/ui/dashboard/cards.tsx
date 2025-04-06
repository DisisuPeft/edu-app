'use client'
// import {
//   BanknotesIcon,
//   ClockIcon,
//   UserGroupIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
// import { lusitana } from '../fonts';
// import { GraduationCap } from "lucide-react";
import { useGetMenuQuery } from "@/redux/sistema/SistemaApiSlice";
import type React from "react";
import { User } from "@/redux/interface/authentication/Users";
import Image from "next/image";
import Link from "next/link";
// const iconMap = {
//   users:
// // };
// export const SkeletonLoader: React.FC = () => {
//   return (
//     <div className="mx-auto w-full max-w-sm rounded-md border border-black p-4 bg-black">
//       <div className="flex animate-pulse space-x-4">
//         {/* <div className="size-10 rounded-full bg-black"></div> */}
//         <div className="flex-1 space-y-6 py-1">
//           <div className="h-2 rounded bg-white"></div>
//           {/* <div className="space-y-3">
//             <div className="grid grid-cols-3 gap-4">
//               <div className="col-span-2 h-2 rounded bg-gray-200"></div>
//               <div className="col-span-1 h-2 rounded bg-gray-200"></div>
//             </div> */}
//           {/* <div className="h-2 rounded bg-gray-200"></div> */}
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };
// export default function CardWrapper({
//   isLoading,
//   isFetching,
//   user,
// }: {
//   isLoading: boolean;
//   isFetching: boolean;
//   user: User | undefined;
// }) {
//   // const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices} = await fetchCardData()
//   if (isLoading || isFetching) {
//     return (
//       // <div className="relative flex w-64 animate-pulse gap-2 p-4 z-0">
//       //   <div className="h-12 w-12 rounded-full"></div>
//       //   <div className="flex-1">
//       //     <div className="mb-1 h-5 w-3/5 rounded-lg text-lg"></div>
//       //     {/* <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div> */}
//       //   </div>
//       //   {/* <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div> */}
//       // </div>
//       // <div className='text-white bg-sky-500 p-1 rounded-xl'>Loading..</div>
//       <SkeletonLoader />
//     );
//   }
//   return <Card title={user?.usuario?.email} />;
// }

// export function Card({ title }: { title: string }) {
//   return (
//     <div className="rounded-md p-2 bg-[#121829]">
//       <div className="">
//         {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
//         <h3 className="text-sm font-medium">{title}</h3>
//       </div>
//     </div>
//   );
// }

export default function Modulos(){
  const {data:modulos} = useGetMenuQuery()
  // console.log(modulos)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {modulos?.map((mod) => (
        <Link
          key={mod.id}
          className={`rounded-xl p-6 shadow transition cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
          style={{
            backgroundColor: mod.bgColor
          }}
          href={mod.route}
        >
              <div className="relative p-6">
                <div
                  className="mb-4 flex justify-center rounded-lg p-3"
                >
                  <Image className="h-[200px] w-[200px]" height={600} width={600} src={mod.icon} alt="imagenmodulo"/>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black">
                  {mod.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{mod.description}</p>
                {/* <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {item.itemCount}
                  </span>
                </div> */}
              </div>
        </Link>
      ))}
    </div>
  )
}
