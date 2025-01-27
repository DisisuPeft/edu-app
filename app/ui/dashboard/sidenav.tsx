// 'use client'
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import { UserIcon } from '@heroicons/react/16/solid';
// import { useAppSelector } from '@/app/redux/hooks';
// import { useLogoutMutation } from '@/app/redux/features/authApiSlice';
// import { logout as setLogout } from '@/app/redux/features/authSlice';
// import { useRetrieveUserQuery } from '@/app/redux/features/authApiSlice';
import { lusitana } from '../fonts';
import Logout from '@/app/utils/auth/Logout';
// import { FormEvent } from 'react';
// import { redirect } from 'next/navigation';
// import Loading from '@/app/components/common/Loading';

export default function SideNav() {

  // const [logout] = useLogoutMutation()
  // const {isAuth} = useAppSelector(state => state.auth)
  // const {data: user, isLoading, isFetching} = useRetrieveUserQuery()
  // console.log(user, isLoading, isFetching)
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-200">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 text-white md:w-40">
          {/* <AcmeLogo /> */}
          <UserIcon width={10} height={10}/>
          <p
          className={`${lusitana.className}
          truncate rounded-xl px-4 py-8 text-center text-2xl`}
          >
            {/* {user?.email} */}
          </p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* <Logout/> */}
        <Logout></Logout>
      </div>
    </div>
  );
}
