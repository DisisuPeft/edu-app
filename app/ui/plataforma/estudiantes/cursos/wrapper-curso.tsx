"use client";

import CursoHeader from "./components/curso-header";
import TabsPanel from "./components/tabs-panel";
// import { useEffect } from "react";
// import { encodePayload, decodePayload } from "@/lib/blob";

export default function WrapperCurso({ id }: { id: string }) {
  //   useEffect(() => {

  //   })
  return (
    <div className="mx-auto p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <CursoHeader id={id} />
      </header>

      <div className="w-full">
        <TabsPanel id={id} />
      </div>
    </div>
  );
}
