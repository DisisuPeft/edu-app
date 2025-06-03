"use client";
// import Link from "next/link";
// import NavLinks from "@/app/ui/dashboard/nav-links";
// import AcmeLogo from '@/app/ui/acme-logo';
// import { UserIcon } from "@heroicons/react/16/solid";
// import { useAppSelector } from '@/app/redux/hooks';
// import { useLogoutMutation } from '@/app/redux/features/authApiSlice';
// import { logout as setLogout } from '@/app/redux/features/authSlice';
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
// import { lusitana } from '../fonts';
// import Logout from "@/app/utils/auth/Logout";
// import CardWrapper from "./cards";
import { useState } from "react";
// import { User } from "@/redux/interface/authentication/Users";
import { Modulos } from "@/redux/interface/sistema/modulos";
// import { FormEvent } from 'react';
// import { redirect } from 'next/navigation';
// import Loading from '@/app/components/common/Loading';
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function SideNav() {
  // const [logout] = useLogoutMutation()
  // const {isAuth} = useAppSelector(state => state.auth)
  const { data: user, isLoading, isFetching, refetch } = useRetrieveUserQuery();
  const [modulo, setModulo] = useState<Modulos | undefined>();
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      refetch();
    }
  }, [isAuth]);

  useEffect(() => {
    setModulo(user);
  }, [user, modulo]);
  return (
    // <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#121829]">
    //   <Link
    //     className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
    //     href="/dashboard"
    //   >
    //     <div className="text-white md:w-40">
    //       <div className="relative flex items-center gap-2 p-2">
    //         <div className="rounded-full flex items-center justify-center">
    //           <UserIcon width={25} height={25} />
    //         </div>
    //         <div className="flex-1">
    //           <div className="rounded-lg bg-slate-400 text-lg">
    //             <CardWrapper
    //               isFetching={isFetching}
    //               isLoading={isLoading}
    //               user={obj}
    //             />
    //           </div>
    //           {/* <div className="rounded-lg bg-slate-400 text-sm"></div> */}
    //         </div>
    //         {/* <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full"></div> */}
    //       </div>
    //     </div>
    //     {/* mb-1 h-5 w-3/5  h-5 w-[90%] */}
    //     {/* <div className="relative flex w-64 gap-2 p-4">
    //       <div className="h-12 rounded-full flex justify-center">
    //         <UserIcon width={40} height={40}/>
    //       </div>
    //       <div className="flex-1">
    //         <div className="rounded-lg bg-slate-400 text-lg">
    //           <CardWrapper/>
    //         </div>
    //         <div className="rounded-lg bg-slate-400 text-sm"></div>
    //       </div>
    //       <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full"></div>
    //     </div> */}
    //   </Link>
    //   <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    //     <NavLinks />
    //     <div className="hidden h-auto w-full grow rounded-md md:block"></div>
    //     <Logout />
    //     {/* <Logout></Logout> */}
    //   </div>
    // </div>

    <aside className="w-[200px] bg-white shadow-xl h-full p-4 hidden md:block">
      <h2 className="text-4xl font-semibold mb-4 text-gray-800">Módulos</h2>
      <ul className="space-y-2">
        {/* {links.map((link) => (
              <li
                key={link}
                className="hover:bg-gray-200 rounded px-2 py-1 cursor-pointer"
              >
                {link}
              </li>
            ))} */}
        <li className="hover:bg-gray-200 rounded px-2 py-1 cursor-pointer text-gray-800">
          En construccion
        </li>
      </ul>
      {/* <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 relative top-[700px]">
              <Logout></Logout>
          </div> */}
    </aside>
  );
}
