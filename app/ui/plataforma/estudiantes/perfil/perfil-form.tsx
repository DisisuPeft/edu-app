"use client";
import usePerfilForm from "@/hooks/plataforma/perfil/use-perfil-form";

export default function PerfilForm() {
  const {
    register,
    handleSubmit,
    entidades,
    onSubmit,
    generos,
    niveles,
    municipios,
  } = usePerfilForm();
  return (
    <div className="container mx-auto px-4 py-4 text-gray-800">
      {/* <div className="mb-6">
        <Link
          href="/estudiantes"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Volver a la lista
        </Link>
      </div> */}

      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Agregar nuevo estudiante
          {/* <button
            onClick={() =>
              dispatch(
                setAlert({ type: "success", message: "Probando alerta" })
              )
            }
          >
            Probar alerta
          </button> */}
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("perfil.nombre")}
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
                  htmlFor="curp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Paterno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidoP"
                  name="profile.apellidoP"
                  {...register("perfil.apellidoP")}
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
                  htmlFor="curp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido Materno <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidoM"
                  name="profile.apellidoM"
                  {...register("perfil.apellidoM")}
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
                  {...register("curp")}
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
                  {...register("perfil.genero")}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                >
                  <option value="">Seleccionar genero</option>
                  {generos?.map((niv) => (
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
                  htmlFor="fechaNacimiento"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de nacimiento <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="profile.fechaNacimiento"
                  {...register("perfil.fechaNacimiento")}
                  className={`mt-1 p-2 border-2 border-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-500 sm:text-sm`}
                  // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm ${
                  //   errors.fecha_nacimiento ? "border-red-500" : ""
                  // }`}
                />
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
                  {...register("perfil.edad")}
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
                  {...register("lugar_nacimiento")}
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
                  {...register("municipio")}
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
                  {...register("direccion")}
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
                  {...register("perfil.telefono")}
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
                  {...register("perfil.nivEdu")}
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
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            {/* <button
              type="button"
              //   onClick={() => router.back()}
              className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Cancelar
            </button> */}
            <button
              type="submit"
              // disabled={isSubmitting}
              className="fixed bottom-6 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
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
