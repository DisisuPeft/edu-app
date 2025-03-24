import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo con mapa difuminado */}
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* <Image
                    src="/assets/medical-student-with-backpack-is-standing-modern-clinic.jpg"
                    alt="Mapa de fondo"
                    layout="fill"
                    objectFit="cover"
                    className="filter"
                /> */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Lado derecho con el login */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrarse
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
      </div>
    </div>
  );
}
