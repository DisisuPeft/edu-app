'use client'

import {
  // UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useRetrieveUserQuery } from '@/app/redux/features/authApiSlice';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

// const arraylength = null;
// console.log(arraylength)
export default function NavLinks() {
  const pathname = usePathname()
  const {data: user, isLoading, isFetching} = useRetrieveUserQuery()
  //checar como arreglar eso del user
  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon, roles: [1,2,3] },
    { name: 'Mis tareas', href: '/tasks', icon: ArrowsUpDownIcon, roles: [1,2,3]  },
    {
      name: 'Mis planes',
      href: '#',
      icon: DocumentDuplicateIcon,
      roles: [1,2,3]
    },
  ];
  // console.log(links[0].roles[user?.rol.[]])
  // links.length = arraylength
  if(isLoading || isFetching){
    return (
      <>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </>
    )
  }
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const {roles = []} = link || {}
        const { rol = [] } = user?.user || {}
        const canAccess = roles.some(role => rol.some(r => r.id === role))
        return canAccess ? (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[40px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-500  text-white': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        ) : null;
      })}
    </>
  );
}

export function Skeleton(){
  return (
    <div className="mx-auto w-full max-w-sm rounded-md border border-black p-2">
      <div className="flex animate-pulse space-x-4">
        <div className="size-10 rounded-full bg-white"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-[30px] rounded bg-white"></div>
          {/* <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div> */}
        </div>
      </div>
    </div>
  )
} 
