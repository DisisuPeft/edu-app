"use client";

import {
  MapPin,
  // Phone,
  Mail,
  // Twitter,
  Facebook,
  Instagram,
  // Linkedin,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useState } from "react";

export default function FooterSection() {
  const pathname = usePathname();
  // const [path, setPath] = useState("");

  const quickLinks = [
    { name: "Sobre nosotros", href: "/about-us" },
    { name: "Contacta con nosotros", href: "/contacto" }, //esta a whats
    { name: "Diplomados", href: "/oferta-educativa" },
    // { name: "Términos y condiciones", href: "#" },
    // { name: "Política de privacidad", href: "#" },
  ];

  const footerMenuLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "/about-us" },
    { name: "Diplomados", href: "/oferta-educativa" },
    { name: "Contacto", href: "/contacto" },
  ];

  // const match_links = (path: string) => {
  //   return quickLinks.filter((link) => {
  //     return link.href !== path;
  //   });
  // };

  return (
    <footer className="bg-[#111] text-white">
      <div className="container mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">
              Accesos rápidos
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => {
                const isActivate = link.href === pathname;
                return (
                  !isActivate && (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-white text-sm hover:tracking-wider transition-all duration-300 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white"
                    >
                      {link.name}
                    </Link>
                  )
                );
                // return isActivate ? <div>Hola</div> : <div>Adios</div>;
              })}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <p className="mb-2 flex items-center text-sm">
                <MapPin className="mr-3 h-4 w-4 flex-shrink-0" />
                7ª sur oriente #163 Col. Terán, Tuxtla Gutiérrez, Chiapas.
              </p>
              {/* <p className="mb-2 flex items-center text-sm"> */}
              <a
                href="https://wa.link/xcxh5p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.974 7.974 0 0 0 8.003 0a7.998 7.998 0 0 0-6.703 12.184L0 16l3.891-1.277A7.974 7.974 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.122-.847-4.122-2.399-5.674zM8 14.5a6.47 6.47 0 0 1-3.272-.89l-.234-.138-2.305.756.756-2.305-.138-.234A6.47 6.47 0 0 1 1.5 8c0-3.584 2.916-6.5 6.5-6.5 1.736 0 3.368.675 4.6 1.899A6.468 6.468 0 0 1 14.5 8c0 3.584-2.916 6.5-6.5 6.5z" />
                  <path d="M11.107 9.113c-.158-.079-.934-.462-1.078-.515-.144-.054-.249-.079-.354.08-.105.158-.406.515-.498.62-.092.105-.184.118-.342.04-.158-.079-.666-.245-1.27-.78-.469-.417-.785-.933-.877-1.09-.092-.158-.01-.243.069-.322.071-.07.158-.184.237-.276.08-.092.105-.158.158-.263.053-.105.026-.197-.013-.276-.04-.079-.354-.855-.485-1.168-.127-.305-.258-.263-.354-.263-.092 0-.197-.013-.303-.013-.105 0-.276.04-.42.197-.144.158-.552.54-.552 1.31 0 .77.566 1.513.644 1.616.079.105 1.115 1.702 2.703 2.385.378.163.672.26.902.332.379.12.725.103.998.063.305-.046.934-.38 1.066-.746.131-.366.131-.679.092-.746-.04-.066-.144-.105-.303-.184z" />
                </svg>
                <p className="text-white">Escríbenos por WhatsApp</p>
              </a>
              {/* </p> */}
              <p className="mb-2 flex items-center text-sm">
                <Mail className="mr-3 h-4 w-4 flex-shrink-0" />
                direccioncomercialunszn@gmail.com
              </p>

              {/* Social Icons */}
              <div className="flex pt-2 space-x-2">
                {/* <Link
                  href="#"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#121b6a] hover:bg-white transition-all duration-300"
                >
                  <Twitter size={16} />
                </Link> */}
                <Link
                  href="https://www.facebook.com/universidadnacionalsalvadorzubirananchondo"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#121b6a] hover:bg-white transition-all duration-300"
                >
                  <Facebook size={16} />
                </Link>
                <Link
                  href="https://www.instagram.com/uniunsza?igsh=MW15cm9hNDU3am56NA=="
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#121b6a] hover:bg-white transition-all duration-300"
                >
                  <Instagram size={16} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@universidadunsza?_t=ZS-8wXxkAAk9vc&_r=1"
                  className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#121b6a] hover:bg-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12.361 1.064h3.2c.229 1.522 1.403 3.034 3.2 3.265v3.2c-1.234-.029-2.594-.456-3.68-1.2v7.872c0 3.342-2.683 6.063-6 6.063S3.937 17.543 3.937 14.2c0-3.005 2.229-5.468 5.143-5.982v3.234c-.802.342-1.343 1.14-1.343 2.046 0 1.245 1.009 2.254 2.254 2.254s2.253-1.009 2.253-2.254V1.064z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Empty Column (Gallery placeholder) */}
          <div>
            {/* This column is intentionally left empty as requested */}
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">
              ¿Tienes dudas?
            </h4>
            {/* <p className="text-sm mb-4 text-gray-300">
              Si quieres saber mas, puedes ponerte en contacto con un asesor
              educativo.
            </p> */}
            <div className="relative max-w-sm">
              {/* <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-3 pr-20 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#121b6a] transition-colors"
              /> */}
              <div className="flex 6">
                {/* call to action wa.link */}
                <a
                  href="https://wa.link/xcxh5p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.974 7.974 0 0 0 8.003 0a7.998 7.998 0 0 0-6.703 12.184L0 16l3.891-1.277A7.974 7.974 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.122-.847-4.122-2.399-5.674zM8 14.5a6.47 6.47 0 0 1-3.272-.89l-.234-.138-2.305.756.756-2.305-.138-.234A6.47 6.47 0 0 1 1.5 8c0-3.584 2.916-6.5 6.5-6.5 1.736 0 3.368.675 4.6 1.899A6.468 6.468 0 0 1 14.5 8c0 3.584-2.916 6.5-6.5 6.5z" />
                    <path d="M11.107 9.113c-.158-.079-.934-.462-1.078-.515-.144-.054-.249-.079-.354.08-.105.158-.406.515-.498.62-.092.105-.184.118-.342.04-.158-.079-.666-.245-1.27-.78-.469-.417-.785-.933-.877-1.09-.092-.158-.01-.243.069-.322.071-.07.158-.184.237-.276.08-.092.105-.158.158-.263.053-.105.026-.197-.013-.276-.04-.079-.354-.855-.485-1.168-.127-.305-.258-.263-.354-.263-.092 0-.197-.013-.303-.013-.105 0-.276.04-.42.197-.144.158-.552.54-.552 1.31 0 .77.566 1.513.644 1.616.079.105 1.115 1.702 2.703 2.385.378.163.672.26.902.332.379.12.725.103.998.063.305-.046.934-.38 1.066-.746.131-.366.131-.679.092-.746-.04-.066-.144-.105-.303-.184z" />
                  </svg> */}
                  <p className="text-white">
                    Un asesor educativo puede ayudarte.{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-6 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <span>© </span>
              <Link
                href="/"
                className="border-b border-white/30 hover:border-white transition-colors"
              >
                Universidad Nacional Salvador Zubirán Anchondo
              </Link>
              <span>, todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-0">
              {footerMenuLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-white hover:text-gray-300 transition-colors ${
                    index !== footerMenuLinks.length - 1
                      ? "border-r border-white/10 pr-4 mr-4"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
