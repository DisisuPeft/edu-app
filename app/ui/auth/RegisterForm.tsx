'use client'
import { Button } from '@/app/ui/Button';;
// import Link from 'next/link';
import { useRegister } from '@/hooks';
// import Loading from '@/app/components/common/Loading';

export default function RegisterForm() {
  const {formData, isLoading, onChange, onSubmit} = useRegister()
  return (
    <div className="bg-white p-[50px] shadow-2xl drop-shadow-2xl px-10">
      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={onChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#121829] focus:border-[#121829] sm:text-sm text-black"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={onChange}
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#121829] focus:border-[#121829]s sm:text-sm text-black"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
            Confirmar contraseña
          </label>
          <div className="mt-1">
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              value={formData.password_confirmation}
              onChange={onChange}
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#121829] focus:border-[#121829]s sm:text-sm text-black"
            />
          </div>
        </div>
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre(s)
          </label>
          <div className="mt-1">
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="nombre"
              required
              value={formData.nombre}
              onChange={onChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#121829] focus:border-[#121829] sm:text-sm text-black"
            />
          </div>
        </div>
        <div>
          <label htmlFor="apellidoP" className="block text-sm font-medium text-gray-700">
            Apellido Paterno
          </label>
          <div className="mt-1">
            <input
              id="apellidoP"
              name="apellidoP"
              type="text"
              autoComplete="apellidoP"
              required
              value={formData.apellidoP}
              onChange={onChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#121829] focus:border-[#121829] sm:text-sm text-black"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Recuérdame
            </label>
          </div> */}

          {/* <div className="text-sm">
            <Link href="#" className="font-medium text-[#121829]">
              ¿Olvidaste tu contraseña?
            </Link>
          </div> */}
        </div>

        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#121829] hover:bg-[#121829] focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Registrarse
          </Button>
        </div>
      </form>

      {/* <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O continúa con</span>
          </div>
        </div> */}

        {/* <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <Button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Iniciar sesión con Google</span>
              <FaGoogle className="w-5 h-5" />
            </Button>
          </div>

          <div>
            <Button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Iniciar sesión con GitHub</span>
              <FaGithub className="w-5 h-5" />
            </Button>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  )
}