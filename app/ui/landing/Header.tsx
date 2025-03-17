import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-[#4b1804] shadow-sm">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-white">
                    <GraduationCap/>
                    <span>UNSZN</span>
                </Link>
                <div className="space-x-4">
                    <Link href="#features" className="text-white">
                        Caracteristicas
                    </Link>
                    <Link href="#" className="text-white">
                        Caracteristicas
                    </Link>
                    <Link href="#" className="text-white">
                        Precios
                    </Link>
                    <Link href="#" className="text-white">
                        Contacto
                    </Link>
                    <Link href="/auth/register" className="text-white">
                        Registrarse
                    </Link>
                </div>
            </nav>
        </header>
    )
}