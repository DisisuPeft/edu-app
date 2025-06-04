"use client";

import {
  // UserGroupIcon,
  HomeIcon,
  PencilIcon,
  BookmarkIcon,
  // DocumentDuplicateIcon,
  // ArrowsUpDownIcon
} from "@heroicons/react/24/outline";
// import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Role } from "@/redux/interface/authentication/Users";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

// const arraylength = null;
// console.log(arraylength)
export default function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  //checar como arreglar eso del user
  const links = [
    {
      name: "Menu",
      route: () => router.push("/dashboard"),
      icon: HomeIcon,
      roles: [1, 2, 3],
      nameroute: "/dashboard",
    },
    {
      name: "Diplomas asignados",
      route: () => router.push("/diplomas"),
      icon: PencilIcon,
      roles: [1, 2],
      nameroute: "/diplomas",
    },
    {
      name: "Control escolar",
      route: () => router.push("/cea"),
      icon: BookOpenIcon,
      roles: [1, 2, 3],
      nameroute: "/cea",
    },
    {
      name: "Mi Aprendizaje",
      route: () => router.push("/mi-aprendizaje"),
      icon: BookmarkIcon,
      roles: [1, 3],
      nameroute: "/mi-aprendizaje",
    },
    // {
    //   name: 'Mis planes',
    //   href: '#',
    //   icon: DocumentDuplicateIcon,
    //   roles: [1,2,3]
    // },
  ];
  // console.log(links[0].roles[user?.rol.[]])
  // links.length = arraylength
  if (isLoading || isFetching) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const { roles = [] } = link || {};
        const { roleID = [] } = user || {};
        // console.log(roleID)
        const canAccess = roles.some((role) =>
          roleID.some((r: Role) => r.id === role)
        );
        return canAccess ? (
          <button
            key={link.name}
            onClick={link.route}
            className={clsx(
              "flex h-[40px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[#a20519]  text-white": pathname === link.nameroute,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </button>
        ) : null;
      })}
    </>
  );
}

export function Skeleton() {
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
  );
}
