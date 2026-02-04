"use client";
import useUserProfileForm from "@/hooks/plataforma/admin/use-create-user";

import Link from "next/link";
// import Link from "next/link";

export default function UserCreateForm() {
  const {
    register,
    handleSubmit,
    entidades,
    onSubmit,
    generos,
    niveles,
    municipios,
    errors,
    isSubmitting,
  } = useUserProfileForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-7xl space-y-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 text-black"
    >
      {/* Identificación */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
            Información de Identificación
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Datos oficiales de identificación
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              CURP
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 uppercase tracking-wide text-sm"
              {...register("curp")}
              maxLength={18}
              placeholder="Ingresa tu CURP"
            />
          </div>
          *
        </div>
      </div>

      {/* Contacto */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-2 h-6 bg-green-500 rounded-full"></div>
            Información de Contacto
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Datos de acceso y comunicación
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              type="email"
              {...register("perfil.user.email")}
              placeholder="correo@ejemplo.com"
            />
          </div>
        </div>
      </div>

      {/* Dirección */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
            {...register("perfil.telefono", { required: true })}
            placeholder="Número de teléfono"
          />
          {errors.perfil?.telefono && (
            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
              <span className="w-4 h-4 text-red-500">⚠</span>
              Este campo es requerido
            </p>
          )}
        </div>
      </div>

      {/* Perfil */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
            Información Personal
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Datos personales y académicos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              {...register("perfil.nombre", { required: true })}
              placeholder="Tu nombre"
            />
            {errors.perfil?.nombre && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <span className="w-4 h-4 text-red-500">⚠</span>
                Este campo es requerido
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Apellido Paterno
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              {...register("perfil.apellidoP", { required: true })}
              placeholder="Apellido paterno"
            />
            {errors.perfil?.apellidoP && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <span className="w-4 h-4 text-red-500">⚠</span>
                Este campo es requerido
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Apellido Materno
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              {...register("perfil.apellidoM", { required: true })}
              placeholder="Apellido materno"
            />
            {errors.perfil?.apellidoM && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <span className="w-4 h-4 text-red-500">⚠</span>
                Este campo es requerido
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Edad
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              type="number"
              {...register("perfil.edad", { valueAsNumber: true })}
              placeholder="Edad"
            />
          </div> */}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Fecha Nacimiento
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              type="date"
              {...register("perfil.fechaNacimiento", { required: true })}
            />
            {errors.perfil?.fechaNacimiento && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <span className="w-4 h-4 text-red-500">⚠</span>
                Este campo es requerido
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Género
            </label>
            <select
              id="genero"
              name="profile.genero"
              {...register("perfil.genero")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Seleccionar género</option>
              {generos?.map((niv) => (
                <option key={niv.id} value={niv.id}>
                  {niv.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nivel Educativo
            </label>
            <select
              id="nivel_educativo"
              name="profile.nivEdu"
              {...register("perfil.nivEdu")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Seleccionar nivel</option>
              {niveles?.map((niv) => (
                <option key={niv.id} value={niv.id}>
                  {niv.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Catálogos / relaciones simples por id */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-2 h-6 bg-orange-500 rounded-full"></div>
            Información Adicional
          </h3>
          <p className="text-sm text-gray-600 mt-1">Profesión y ubicación</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Profesión
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200"
              type="text"
              {...register("especialidad")}
              placeholder="Tu profesión o especialidad"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Lugar de Nacimiento
            </label>
            <select
              id="estado"
              name="lugar_nacimiento"
              {...register("lugar_nacimiento")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Seleccionar un estado</option>
              {entidades?.map((entidad) => (
                <option key={entidad.id} value={entidad.id}>
                  {entidad.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Municipio
            </label>
            <select
              id="municipio"
              name="municipio"
              {...register("municipio")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Seleccionar municipio</option>
              {municipios?.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center justify-end space-x-4 pt-8 border-t border-gray-200">
        <div className="flex gap-4">
          <Link
            href="/plataforma/estudiantes"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
          >
            <span>←</span>
            Cancelar
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Guardando...
              </>
            ) : (
              <>
                <span>✓</span>
                Guardar
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
