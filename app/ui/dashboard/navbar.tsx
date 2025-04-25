'use client'


import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/redux/interface/authentication/Users";
import { Settings } from "lucide-react";
import Logout from "@/app/utils/auth/Logout";
import Link from "next/link";

export default function Navbar(){
      const { data: user, isLoading, isFetching, refetch } = useRetrieveUserQuery();
      const [obj, setObj] = useState<User | undefined>();
      const { isAuth } = useAppSelector((state) => state.auth);
    
      useEffect(() => {
        if (isAuth) {
          refetch();
        //   console.log(user)
        }
      }, [isAuth]);
    
      useEffect(() => {
        setObj(user?.usuario);
      }, [user]);
    return (
        <nav className="h-16 bg-white shadow px-6 flex items-center justify-between fixed z-10 w-full">
            <Link className="text-lg font-bold text-gray-800" href="/dashboard">CEA ERP</Link>
            <div className="flex flex-row items-center p-2 gap-10">
                <div className="text-sm text-gray-800">Bienvenido {obj?.profile?.nombre}</div>
                <Logout></Logout>
            </div>
        </nav>
    )
}