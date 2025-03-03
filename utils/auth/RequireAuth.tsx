'use client'

import { redirect } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
// import { Modal } from "@/app/components/common/Modal"
// import Loading from "@/app/components/common/Loading"
interface Props {
    children: React.ReactNode;
}

export default function RequireAuth({children}: Props){
    const {isLoading, isAuth} = useAppSelector(state => state.auth)
    // console.log(isLoading)
    if (isLoading){
        return (
            <div className="flex justify-center bg-white h-screen text-gray-900">

            
            </div>
        )
    }
    if(!isAuth){
        redirect('/')
    }

    return <>{children}</>
}