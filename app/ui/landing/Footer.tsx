import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const quickLinks = [
    { name: "Sobre nosotros", href: "#" },
    { name: "Contacta con nosotros", href: "#" },
    { name: "Diplomados", href: "#" },
    // { name: "Términos y condiciones", href: "#" },
    // { name: "Política de privacidad", href: "#" },
  ];

  const footerMenuLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "#" },
    { name: "Diplomados", href: "#" },
    { name: "Contacto", href: "#" },
  ];

  return (
    <footer className="bg-[#111] text-white pt-5 mt-5">
      <div className="container mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div>
            <h4 className="text-white mb-4 text-lg font-semibold">
              Accesos rápidos
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-white text-sm hover:tracking-wider transition-all duration-300 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white"
                >
                  {link.name}
                </Link>
              ))}
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
              <p className="mb-2 flex items-center text-sm">
                <Phone className="mr-3 h-4 w-4 flex-shrink-0" />
                +52 (961) 580-5154
              </p>
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
              Newsletter
            </h4>
            <p className="text-sm mb-4 text-gray-300">
              Mantente al día con nuestros últimos diplomados y noticias
              académicas.
            </p>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-3 pr-20 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#121b6a] transition-colors"
              />
              <button className="absolute top-2 right-2 bg-[#121b6a] text-white px-4 py-1.5 rounded-md text-sm hover:bg-[#0a1050] transition-colors duration-300">
                Únete
              </button>
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
