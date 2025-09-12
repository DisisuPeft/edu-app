"use client";
import Link from "next/link";
import { Controller } from "react-hook-form";
import {
  FormControl,
  // InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  // OutlinedInput,
} from "@mui/material";
// import { useParams } from "next/navigation";
import useUserEditProfileForm from "@/hooks/plataforma/admin/use-edit-user";
// import Link from "next/link";

export default function UserEditForm({ id }: { id: string }) {
  const {
    register,
    handleSubmit,
    entidades,
    onSubmit,
    generos,
    niveles,
    municipios,
    errors,
    // isDirty,
    isSubmitting,
    control,
    roles,
  } = useUserEditProfileForm(id);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-4xl space-y-6 p-6 text-black"
    >
      {/* <h2 className="text-xl font-semibold">Estudiante</h2> */}

      {/* Identificación */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium">CURP</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2 uppercase tracking-wide"
            {...register("curp")}
            maxLength={18}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">RFC</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2 uppercase tracking-wide"
            {...register("rfc")}
            maxLength={13}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Estudiante activo</label>
          {/* <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            {...register("matricula", { required: true })}
          />
          {errors.matricula && (
            <p className="text-sm text-red-600">Requerido</p>
          )} */}
          <Controller
            name="activo"
            control={control}
            render={({ field: { value, onChange, ...rest } }) => (
              <input
                type="checkbox"
                className="mt-2 h-5 w-5"
                // el checkbox necesita booleano:
                checked={value === 1}
                // y tú guardas 0/1 en RHF:
                onChange={(e) => onChange(e.target.checked ? 1 : 0)}
                {...rest}
              />
            )}
          />
        </div>
      </div>

      {/* Contacto */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            type="email"
            {...register("user.email")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contraseña</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            type="text"
            {...register("user.password")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Rol del usuario</label>
          <Controller
            name="user.roleID"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth size="small">
                {/* <InputLabel id="rol-label">Roles</InputLabel> */}
                <Select
                  labelId="rol-label"
                  multiple
                  // input={<OutlinedInput label="Roles" />}
                  value={field.value ?? []}
                  // MUI puede entregar string[]; normalizamos a number[]
                  onChange={(e) => {
                    const raw = e.target.value;
                    const arr = Array.isArray(raw) ? raw : [raw];
                    field.onChange(arr.map((v) => Number(v)));
                  }}
                  renderValue={(selected) => {
                    const ids = selected as number[];
                    return roles
                      ?.filter((r) => ids.includes(Number(r.id)))
                      .map((r) => r.name)
                      .join(", ");
                  }}
                >
                  {roles?.map((r) => {
                    const idNum = Number(r.id);
                    const selected = (field.value ?? []).includes(idNum);
                    return (
                      <MenuItem key={r.id} value={idNum}>
                        <Checkbox checked={selected} />
                        <ListItemText primary={r.name} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          />
          {errors.user?.roleID && (
            <p className="text-sm text-red-600">Requerido</p>
          )}
        </div>
      </div>

      {/* Dirección */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Teléfono</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            {...register("perfil.telefono")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Dirección</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            {...register("direccion")}
          />
        </div>
      </div>

      {/* Tutor */}
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Tutor - Nombre</label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            {...register("tutor_nombre")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tutor - Teléfono</label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            {...register("tutor_telefono")}
          />
        </div>
      </div> */}

      {/* Perfil */}
      <h2 className="pt-2 text-4xl font-semibold">Perfil</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            {...register("perfil.nombre", { required: true })}
          />
          {errors.perfil?.nombre && (
            <p className="text-sm text-red-600">Requerido</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Apellido Paterno</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            {...register("perfil.apellidoP", { required: true })}
          />
          {errors.perfil?.apellidoP && (
            <p className="text-sm text-red-600">Requerido</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Apellido Materno</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            {...register("perfil.apellidoM", { required: true })}
          />
          {errors.perfil?.apellidoM && (
            <p className="text-sm text-red-600">Requerido</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="block text-sm font-medium">Edad</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            type="number"
            {...register("perfil.edad", { valueAsNumber: true })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Fecha Nacimiento</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            type="date"
            {...register("perfil.fechaNacimiento")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Género</label>
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
        </div>
        <div>
          <label className="block text-sm font-medium">Nivel Educativo</label>
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
        </div>
      </div>

      {/* Catálogos / relaciones simples por id */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium">Profesion</label>
          <input
            className="mt-1 w-full rounded-md border border-2 border-gray-400 p-2"
            type="text"
            {...register("especialidad")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Lugar de Nacimiento
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
        </div>
        <div>
          <label className="block text-sm font-medium">Municipio</label>
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
        </div>
        {/* <div>
          <label className="block text-sm font-medium">Grupo (id)</label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="number"
            {...register("grupo", { valueAsNumber: true })}
          />
        </div> */}
      </div>

      {/* Perfil.user como id (por tu ejemplo) */}
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Perfil - User ID</label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="number"
            {...register("", { valueAsNumber: true })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">User (Raíz)</label>
          <input
            className="mt-1 w-full rounded-md border p-2 bg-gray-50"
            readOnly
            // value={u?.email ?? ""}
            placeholder="Sin usuario asignado"
          />
        </div>
      </div> */}

      {/* Acciones */}
      <div className="flex items-center justify-end space-x-4 p-5">
        <div className="relative bottom-6 top-10 right-4 flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white p-4 rounded-md shadow-lg hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Guardando..." : "Guardar"}
          </button>

          <Link
            href="/plataforma/settings"
            className="bg-red-600 text-white p-4 rounded-md shadow-lg hover:bg-red-700 transition"
          >
            Cancelar
          </Link>
        </div>
        {/* {!isDirty && <span className="text-sm text-gray-500">Sin cambios</span>} */}
      </div>
    </form>
  );
}
