"use client"

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCreateStudent } from "@/hooks";
import { useGetEntidadesQuery, useGetNivelesQuery } from "@/redux/catalogos/CatApiSlice";
import { useGetGeneroQuery } from "@/redux/catalogos/CatApiSlice";

export default function CreateStudent() {
  const router = useRouter()
  const {formData, onChange, onSubmit} = useCreateStudent()
  const {data:niveles} = useGetNivelesQuery()
  const {data:genero} = useGetGeneroQuery()
  const {data:entidades} = useGetEntidadesQuery()
  

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="mb-6">
        <Link
          href="/estudiantes"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Volver a la lista
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Agregar nuevo estudiante
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
                  name="profile.nombre"
                  value={formData.profile.nombre}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.curp ? "border-red-500" : ""
                  // }`}
                  placeholder="Nombre del alumno"
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
                  Apellido Paterno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidoP"
                  name="profile.apellidoP"
                  value={formData.profile.apellidoP}
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
                  htmlFor="curp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Materno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidoM"
                  name="profile.apellidoM"
                  value={formData.profile.apellidoM}
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
                  htmlFor="nivel_educativo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Genero <span className="text-red-500">*</span>
                </label>
                <select
                  id="genero"
                  name="profile.genero"
                  value={formData.profile.genero}
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
                  htmlFor="matricula"
                  className="block text-sm font-medium text-gray-700"
                >
                  Matrícula <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.matricula ? "border-red-500" : ""
                  // }`}
                  placeholder="A12345"
                  style={{ textTransform: "uppercase" }}
                  maxLength={5}
                />
                {/* {errors.matricula && (
                <p className="mt-1 text-sm text-red-600">{errors.matricula}</p>
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
                  name="profile.fechaNacimiento"
                  value={formData.profile.fechaNacimiento}
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
                  name="profile.edad"
                  value={formData.profile.edad}
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
                  name="lugar_nacimiento"
                  value={formData.lugar_nacimiento}
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
                  name="profile.telefono"
                  value={formData.profile.telefono}
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
                  name="profile.nivEdu"
                  value={formData.profile.nivEdu}
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
                  Estudiante activo
                </label>
              </div>

              <h2 className="text-lg font-semibold text-gray-700 mt-6">
                Información del tutor
              </h2>

              <div>
                <label
                  htmlFor="tutor_nombre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre del tutor
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  type="text"
                  id="tutor_nombre"
                  name="tutor_nombre"
                  value={formData.tutor_nombre}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.tutor_nombre ? "border-red-500" : ""
                  // }`}
                  placeholder="Nombre completo del tutor"
                />
                {/* {errors.tutor_nombre && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.tutor_nombre}
                </p>
              )} */}
              </div>

              <div>
                <label
                  htmlFor="tutor_telefono"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono del tutor
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input
                  type="tel"
                  id="tutor_telefono"
                  name="tutor_telefono"
                  value={formData.tutor_telefono}
                  onChange={onChange}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.tutor_telefono ? "border-red-500" : ""
                  // }`}
                  placeholder="1234567890"
                  maxLength={10}
                />
                {/* {errors.tutor_telefono && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.tutor_telefono}
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
