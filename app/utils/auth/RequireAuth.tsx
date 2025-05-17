'use client'

import { redirect } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
// import { Modal } from "@/app/components/common/Modal"
// import Loading from "@/app/components/common/Loading"
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice"
import { Role } from "@/redux/interface/authentication/Users";

interface Props {
    children: React.ReactNode;
    allowedRoles?: string []
}

export default function RequireAuth({children, allowedRoles}: Props){
    const {isLoading, isAuth} = useAppSelector(state => state.auth)
    const {data:user} = useRetrieveUserQuery()
    // console.log(user)
    if (isLoading){
        return (
            <div className="flex justify-center bg-white h-screen text-gray-900">

            
            </div>
        )
    }
    if(!isAuth){
        redirect('/auth/login')
    }

    if (allowedRoles?.length && !user?.roleID?.some((r: Role) => allowedRoles?.includes(r.name))) {
        redirect("/unauthorized"); // o muestra un mensaje bonito
    }

    return <>{children}</>
}