"use client";

import { BookOpen, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-[#4b1804] shadow-sm">
      <nav className="sticky top-0 shadow-md bg-[#a20519] p-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center px-4 py-4 lg:px-5">
            <h2 className="text-white text-xl font-bold m-0 flex items-center">
              <BookOpen className="mr-3" size={24} />
              UNSZA
            </h2>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mr-4 p-2 lg:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center absolute lg:static top-full left-0 right-0 bg-[#a20519] lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-4 lg:p-0">
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
              <Link
                href="#"
                className="py-2 lg:py-4 px-3 text-white hover:text-[#121829] transition-colors"
              >
                Contáctanos
              </Link>
            </div>
            <Link
              href="/auth/register"
              className="hidden lg:flex items-center py-4 px-5 bg-[#121b6a] text-white hover:bg-[#1a2580] transition-colors"
            >
              Únete ahora
              <ArrowRight className="ml-3" size={16} />
            </Link>
          </div>

          {/* Mobile Join Button */}
          <Link
            href="/auth/register"
            className="lg:hidden flex items-center py-2 px-4 bg-[#121b6a] text-white text-sm rounded-md mr-4"
          >
            Únete
          </Link>
        </div>
      </nav>
    </header>
  );
}
