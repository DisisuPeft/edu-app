"use client";

import { useGetMenuQuery } from "@/redux/catalogos/CatalogosapiSlice";
import MenuCard from "./components/menu-card";

export default function MenuDashboard() {
  const { data: menuItem } = useGetMenuQuery();
  //   console.log(menuItem);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {menuItem?.map((item) => (
        <MenuCard key={item.id} menuItem={item} />
      ))}
    </div>
  );
}
