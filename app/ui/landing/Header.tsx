"use client";

import {
  // BookOpen,
  Menu,
  X,
  // ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/app/components/common/Modal";
import LeadForm from "./lead-form";
import { useInView } from "../animation/useInView";
import Image from "next/image";

export default function Header() {
  const { ref, isVisible } = useInView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-[#4b1804] shadow-sm">
      <nav className="sticky top-0 shadow-md bg-[#a20519] p-0">
        <div className="container mx-auto flex items-center justify-between z-10">
          {/* Logo */}
          <div
            ref={ref}
            className={`shadow-sm transition-opacity duration-400 ${
              isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
            }`}
          >
            <Link href="/" className="flex items-center px-4 py-4 lg:px-5">
              <h2 className="text-white text-xl font-bold m-0 flex items-center">
                <Image
                  src="/assets/logos/unsza_logo.webp"
                  alt="Sobre nosotros"
                  className="object-cover rounded-lg p-1"
                  width={45}
                  height={45}
                />
                UNSZA
              </h2>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {/* <button
            type="button"
            className="mr-4 lg:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center absolute lg:static top-full left-0 right-0 bg-[#a20519] lg:bg-transparent`}
          >
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row lg:items-center p-4 lg:p-0 shadow-sm transition-opacity duration-400 ${
                isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
              }`}
            >
              <Link
                href="/"
                className="py-2 lg:py-4 px-3 text-white hover:text-[#121829] transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/about-us"
                className="py-2 lg:py-4 px-3 text-white hover:text-[#121829] transition-colors"
              >
                Sobre nosotros
              </Link>
              <Link
                href="/oferta-educativa"
                className="py-2 lg:py-4 px-3 text-white hover:text-[#121829] transition-colors"
              >
                Diplomados
              </Link>
              {/* call to action */}
              {/* <Link
                href="#"
                className="py-2 lg:py-4 px-3 text-white hover:text-[#121829] transition-colors"
              >
                Contáctanos
              </Link> */}
            </div>
            <button
              // href="/auth/register"
              onClick={() => setShow(true)}
              className="hidden lg:flex items-center py-4 px-5 bg-[#121b6a] text-white hover:bg-[#1a2580] transition-colors"
            >
              Solicita información
              {/* <ArrowRight className="ml-3" size={16} /> */}
            </button>
          </div>

          {/* Mobile Join Button */}
          <button
            type="button"
            className="mr-4 lg:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button
            // href="/auth/register"
            onClick={() => setShow(true)}
            className="lg:hidden flex items-center py-4 px-5 bg-[#121b6a] text-white hover:bg-[#1a2580] transition-colors"
          >
            Solicita información
            {/* <ArrowRight className="ml-3" size={16} /> */}
          </button>
        </div>
      </nav>
      <Modal show={show} onClose={() => setShow(false)}>
        <LeadForm />
      </Modal>
    </header>
  );
}
