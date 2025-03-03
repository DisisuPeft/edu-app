import { ArrowRight } from "lucide-react"
import Link from "next/link"
export default function PrimarySection(){
    return (
        <section className="relative h-[600px] flex items-center bg-[#121829]">
            <div className="absolute inset-0 z-0"
            // style={{backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     filter: "brightness(0.7)"
            // }}
            />
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-2xl text-white">
                    <h1 className="text-5xl font-bold mb-4">Impulsa tu Carrera con Nuestros Diplomados</h1>
                    <p className="text-xl mb-8">
                        Aprende de expertos y obtén certificaciones reconocidas por la Secretaria de Educacion Publica 
                    </p>
                    <Link href="/auth/login" className="bg-white text-black font-bold py-3 px-6 rounded-full inline-flex items-center">
                        Empieza ahora
                        <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    )
}