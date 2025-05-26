"use client";

import { Modal } from "@/app/components/common/Modal";
import Link from "next/link";
import { useState } from "react";
import LeadForm from "./lead-form";

export default function CallToSuscribe() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="bg-[#121b6a] text-white py-12 px-6 rounded-lg text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        ¿Estás listo para dar el siguiente paso en tu desarrollo profesional?
      </h2>
      <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
        Inscríbete hoy mismo y comienza a transformar tu carrera con nuestros
        diplomados especializados.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => setShow(true)}
          className="bg-white text-[#121b6a] hover:bg-gray-200 rounded-full px-8 py-3 font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Inscribirme ahora
        </button>
        {/* <Link
          href="#"
          className="border-2 border-white text-white hover:bg-white hover:text-[#121b6a] rounded-full px-8 py-3 font-semibold transition-all duration-300"
        >
          Solicitar información
        </Link> */}
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        <LeadForm />
      </Modal>
    </div>
  );
}
