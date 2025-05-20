"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCreateTeacher } from "@/hooks";
import {
  useGetEntidadesQuery,
  useGetEspecialidadesQuery,
  useGetNivelesQuery,
} from "@/redux/catalogos/CatApiSlice";
import { useGetGeneroQuery } from "@/redux/catalogos/CatApiSlice";

export default function CreateTeacher() {
  const router = useRouter();
  const { formData, onChange, onSubmit, municipios } = useCreateTeacher();
  const { data: niveles } = useGetNivelesQuery();
  const { data: genero } = useGetGeneroQuery();
  const { data: entidades } = useGetEntidadesQuery();
  const { data: especialidades } = useGetEspecialidadesQuery();

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="mb-6">
        <Link
          href="/maestros"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Volver a la lista
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Agregar nuevo maestro
        </h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Información personal
              </h2>
              <div>
                <label
                  htmlFor="curp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="perfil.nombre"
                  value={formData.perfil.nombre}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.curp ? "border-red-500" : ""
                  // }`}
                  placeholder="Nombre del asesor"
                />
                {/* {errors.curp && (
                <p className="mt-1 text-sm text-red-600">{errors.curp}</p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="apellidoP"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Paterno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidoP"
                  name="perfil.apellidoP"
                  value={formData.perfil.apellidoP}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.curp ? "border-red-500" : ""
                  // }`}
                  placeholder="Apellido paterno"
                />
                {/* {errors.curp && (
                <p className="mt-1 text-sm text-red-600">{errors.curp}</p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="apellidoM"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Materno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidoM"
                  name="perfil.apellidoM"
                  value={formData.perfil.apellidoM}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.curp ? "border-red-500" : ""
                  // }`}
                  placeholder="Apellido materno"
                />
                {/* {errors.curp && (
                <p className="mt-1 text-sm text-red-600">{errors.curp}</p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="curp"
                  className="block text-sm font-medium text-gray-700"
                >
                  CURP
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  type="text"
                  id="curp"
                  name="curp"
                  value={formData.curp}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.curp ? "border-red-500" : ""
                  // }`}
                  placeholder="ABCD123456HDFXYZ01"
                  maxLength={18}
                  style={{ textTransform: "uppercase" }}
                />
                {/* {errors.curp && (
                <p className="mt-1 text-sm text-red-600">{errors.curp}</p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="matricula"
                  className="block text-sm font-medium text-gray-700"
                >
                  RFC <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="rfc"
                  name="rfc"
                  value={formData.rfc}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.matricula ? "border-red-500" : ""
                  // }`}
                  placeholder="XAXX010101000"
                  style={{ textTransform: "uppercase" }}
                  maxLength={13}
                />
                {/* {errors.matricula && (
                <p className="mt-1 text-sm text-red-600">{errors.matricula}</p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="matricula"
                  className="block text-sm font-medium text-gray-700"
                >
                  Numero de colaborador <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="numero_colaborador"
                  name="numero_colaborador"
                  value={formData.numero_colaborador}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.matricula ? "border-red-500" : ""
                  // }`}
                  placeholder="23180525"
                  style={{ textTransform: "uppercase" }}
                  maxLength={8}
                />
                {/* {errors.matricula && (
                <p className="mt-1 text-sm text-red-600">{errors.matricula}</p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="nivel_educativo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Genero <span className="text-red-500">*</span>
                </label>
                <select
                  id="genero"
                  name="perfil.genero"
                  value={formData.perfil.genero}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.nivel_educativo ? "border-red-500" : ""
                  // }`}
                >
                  <option value="">Seleccionar genero</option>
                  {genero?.map((niv) => (
                    <option key={niv.id} value={niv.id}>
                      {niv.name}
                    </option>
                  ))}
                </select>
                {/* {errors.nivel_educativo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nivel_educativo}
                </p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electronico
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.curp ? "border-red-500" : ""
                  // }`}
                  placeholder=""
                />
                {/* {errors.curp && (
                <p className="mt-1 text-sm text-red-600">{errors.curp}</p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="fechaNacimiento"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de nacimiento <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="perfil.fechaNacimiento"
                  value={formData.perfil.fechaNacimiento}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.fecha_nacimiento ? "border-red-500" : ""
                  // }`}
                />
                {/* {errors.fecha_nacimiento && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fecha_nacimiento}
                </p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="edad"
                  className="block text-sm font-medium text-gray-700"
                >
                  Edad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="edad"
                  name="perfil.edad"
                  value={formData.perfil.edad}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.matricula ? "border-red-500" : ""
                  // }`}
                  placeholder=""
                  // style={{ textTransform: "uppercase" }}
                  maxLength={100}
                />
                {/* {errors.matricula && (
                <p className="mt-1 text-sm text-red-600">{errors.matricula}</p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="nivel_educativo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estado
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <select
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.nivel_educativo ? "border-red-500" : ""
                  // }`}
                >
                  <option value="">Seleccionar un estado</option>
                  {entidades?.map((entidad) => (
                    <option key={entidad.id} value={entidad.id}>
                      {entidad.name}
                    </option>
                  ))}
                </select>
                {/* {errors.nivel_educativo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nivel_educativo}
                </p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="nivel_educativo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Municipio
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <select
                  id="municipio"
                  name="municipio"
                  value={formData.municipio}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.nivel_educativo ? "border-red-500" : ""
                  // }`}
                >
                  <option value="">Seleccionar un estado</option>
                  {municipios?.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.nombre}
                    </option>
                  ))}
                </select>
                {/* {errors.nivel_educativo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nivel_educativo}
                </p>
              )} */}
              </div>
              <div>
                <label
                  htmlFor="direccion"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <textarea
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={onChange}
                  rows={3}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.direccion ? "border-red-500" : ""
                  // }`}
                  placeholder="Calle, número, colonia, ciudad, estado, CP"
                />
                {/* {errors.direccion && (
                <p className="mt-1 text-sm text-red-600">{errors.direccion}</p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="perfil.telefono"
                  value={formData.perfil.telefono}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.telefono ? "border-red-500" : ""
                  // }`}
                  placeholder="1234567890"
                  maxLength={10}
                />
                {/* {errors.telefono && (
                <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>
              )} */}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Información académica
              </h2>

              {/* <div>
                <label
                  htmlFor="grupo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Grupo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="grupo"
                  name="grupo"
                  // value={formData.grupo}
                  // onChange={handleChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.grupo ? "border-red-500" : ""
                  // }`}
                  placeholder="1A"
                /> */}
              {/* {errors.grupo && (
                <p className="mt-1 text-sm text-red-600">{errors.grupo}</p>
              )} */}
              {/* </div> */}

              <div>
                <label
                  htmlFor="nivel_educativo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nivel educativo <span className="text-red-500">*</span>
                </label>
                <select
                  id="nivel_educativo"
                  name="perfil.nivEdu"
                  value={formData.perfil.nivEdu}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.nivel_educativo ? "border-red-500" : ""
                  // }`}
                >
                  <option value="">Seleccionar nivel</option>
                  {niveles?.map((niv) => (
                    <option key={niv.id} value={niv.id}>
                      {niv.name}
                    </option>
                  ))}
                </select>
                {/* {errors.nivel_educativo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nivel_educativo}
                </p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="nivel_educativo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Especialidad <span className="text-red-500">*</span>
                </label>
                <select
                  id="Especialidad"
                  name="especialidad"
                  value={formData.especialidad}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.nivel_educativo ? "border-red-500" : ""
                  // }`}
                >
                  <option value="">Seleccionar especialidad</option>
                  {especialidades?.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
                {/* {errors.nivel_educativo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nivel_educativo}
                </p>
              )} */}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="activo"
                  name="activo"
                  value={formData.activo}
                  checked={formData.activo === 1}
                  onChange={onChange}
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="activo"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Docente activo
                </label>
              </div>

              <h2 className="text-lg font-semibold text-gray-700 mt-6">
                Informacion laboral
              </h2>
              <div>
                <label
                  htmlFor="fecha_ingreso"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de ingreso a labores{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="fecha_ingreso"
                  name="fecha_ingreso"
                  value={formData.fecha_ingreso}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.fecha_nacimiento ? "border-red-500" : ""
                  // }`}
                />
                {/* {errors.fecha_nacimiento && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fecha_nacimiento}
                </p>
              )} */}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-5">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              // disabled={isSubmitting}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
            >
              {/* {isSubmitting ? "Guardando..." : "Guardar"} */}
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
