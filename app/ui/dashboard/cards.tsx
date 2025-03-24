// 'use client'
// import {
//   BanknotesIcon,
//   ClockIcon,
//   UserGroupIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
// import { lusitana } from '../fonts';
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import type React from "react";
import { User } from "@/redux/features/authApiSlice";
// const iconMap = {
//   users:
// };
export const SkeletonLoader: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-md border border-black p-4 bg-black">
      <div className="flex animate-pulse space-x-4">
        {/* <div className="size-10 rounded-full bg-black"></div> */}
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-white"></div>
          {/* <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div> */}
          {/* <div className="h-2 rounded bg-gray-200"></div> */}
        </div>
      </div>
    </div>
    // </div>
  );
};
export default function CardWrapper({
  isLoading,
  isFetching,
  user,
}: {
  isLoading: boolean;
  isFetching: boolean;
  user: User | undefined;
}) {
  // const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices} = await fetchCardData()
  if (isLoading || isFetching) {
    return (
      // <div className="relative flex w-64 animate-pulse gap-2 p-4 z-0">
      //   <div className="h-12 w-12 rounded-full"></div>
      //   <div className="flex-1">
      //     <div className="mb-1 h-5 w-3/5 rounded-lg text-lg"></div>
      //     {/* <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div> */}
      //   </div>
      //   {/* <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div> */}
      // </div>
      // <div className='text-white bg-sky-500 p-1 rounded-xl'>Loading..</div>
      <SkeletonLoader />
    );
  }
  return <Card title={user?.usuario?.email} />;
}

export function Card({ title }: { title: string }) {
  return (
    <div className="rounded-md p-2 bg-[#121829]">
      <div className="">
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
}
