"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* <div className="flex-1 flex flex-col overflow-hidden"> */}
      <main
        className={`flex-1 overflow-y-auto ${
          sidebarOpen ? "md:ml-[0px]" : "md:ml-[-200px]"
        }`}
      >
        {children}
      </main>
      {/* </div> */}
    </div>
  );
}
