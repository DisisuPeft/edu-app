import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-blue-600">
                    <MapPin/>
                    <span>Concave map</span>
                </Link>
                <div className="space-x-4">
                    <Link href="#features" className="text-gray-600 hover:text-blue-600">
                        Caracteristicas
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-600">
                        Caracteristicas
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-600">
                        Precios
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-600">
                        Contacto
                    </Link>
                </div>
            </nav>
        </header>
    )
}