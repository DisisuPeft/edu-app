"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/app/components/common/Modal";
import LeadForm from "./lead-form";
export default function DiplomadosSection() {
  // Sample data for diplomados
  const [show, setShow] = useState<boolean>(false);
  const diplomados = [
    {
      id: 1,
      title: "Diplomado en urgencias médicas",
      image: "/assets/img-landing/Diplomado-en-urgencias-médicas.webp",
    },
    {
      id: 2,
      title: "Diplomado en medicina interna",
      image:
        "/assets/img-landing/Diplomado-nutrición-y-suplementación-en-la-salud-hormonal.webp",
    },
    {
      id: 3,
      title: "Diplomado en cardiología",
      image:
        "/assets/img-landing/Diplomado-síndrome-de-down-y-problemas-de-aprendizaje.webp",
    },
    // {
    //   id: 4,
    //   title: "Diplomado en pediatría",
    //   image:
    //     "/assets/img-landing/Diplomado-rehabilitación-de-la-articulación-temperomandibular.png",
    // },
  ];
  // const onSubscribe = () => {
  //   // const diplomado = diplomados.find((diplomado) => {
  //   //   return diplomado.id === id;
  //   // });
  //   // console.log(diplomado);
  //   setShow(true);
  // };
  return (
    <div className="py-12 md:py-16 lg:py-20 bg-[#121829]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Diplomados
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diplomados.map((diplomado) => (
            <div
              key={diplomado.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl h-[300px] md:h-[480px] flex flex-col"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={diplomado.image || "/placeholder.svg"}
                    alt={diplomado.title}
                    width={500}
                    height={500}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* <div className="relative h-[400px] w-full">
                  <Image
                    src={diplomado.image || "/placeholder.svg"}
                    alt={diplomado.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div> */}
                {/* <div className="absolute bottom-0 w-full flex justify-center mb-2">
                  <Link
                    href="#"
                    className="bg-[#121b6a] text-white px-3 py-1 text-sm rounded-l-full hover:bg-[#0a1050] transition-colors duration-300"
                  >
                    Saber más
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#121b6a] text-white px-3 py-1 text-sm rounded-r-full hover:bg-[#0a1050] transition-colors duration-300"
                  >
                    Únete ahora
                  </Link>
                </div> */}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <Link
                  href="/oferta-educativa"
                  className="text-sm px-4 py-2 rounded-full border border-[#121b6a] text-[#121b6a] hover:bg-[#121b6a] hover:text-white transition-all"
                >
                  Saber más
                </Link>
              </div>
              <div className="text-center p-4 pb-6">
                <h5 className="font-semibold text-lg mb-2 text-[#121829]"></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShow(true)}
          className="text-sm px-4 py-2 rounded-full bg-[#a20519] w-[500px] h-[50px] text-white hover:bg-red-700 transition-all"
        >
          Solicita más información
        </button>
      </div>
      <Modal show={show} onClose={() => setShow(false)}>
        <LeadForm />
      </Modal>
    </div>
  );
}

/**
 * 
 * 
 * 
 *    // {
    //   id: 2,
    //   title: "Diplomado en medicina interna",
    //   image: "/img/medicina-interna.png",
    // },
    // {
    //   id: 3,
    //   title: "Diplomado en cardiología",
    //   image: "/img/cardiologia.png",
    // },
    // {
    //   id: 4,
    //   title: "Diplomado en pediatría",
    //   image: "/img/pediatria.png",
    // },
    // {
    //   id: 5,
    //   title: "Diplomado en ginecología",
    //   image: "/img/ginecologia.png",
    // },
    // {
    //   id: 6,
    //   title: "Diplomado en traumatología",
    //   image: "/img/traumatologia.png",
    // },
 */
