'use client'
import { useAppDispatch } from '@/app/redux/hooks';
import { useLogoutMutation } from '@/app/redux/features/authApiSlice';
import { logout as setLogout } from '@/app/redux/features/authSlice';
import { PowerIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';

export default function Logout(){
    const dispatch = useAppDispatch()
    const [logout] = useLogoutMutation()
    const handleLogout = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        logout(undefined)
          .unwrap()
          .then(() => {
            dispatch(setLogout())
          })
      }
    return  (
        <form onSubmit={handleLogout}>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium bg-sky-500 text-white md:flex-none md:justify-start md:p-2 md:px-3"
            >
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
            </button>
        </form>
    )
}