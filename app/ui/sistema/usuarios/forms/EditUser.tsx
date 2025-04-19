import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  Chip
} from "@mui/material";
import { Theme, useTheme } from "@emotion/react";
import { useEditUser } from "@/hooks";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useGetGeneroQuery, useGetNivelesQuery, useGetRolesQuery, useGetPermissionQuery } from "@/redux/catalogos/CatApiSlice";
import { useEffect } from "react";
import { Role } from "@/redux/interface/authentication/Users";


// function getStyles(name: string, roles: Role[], theme: Theme) {
//   return {
//     fontWeight: roles.includes(name)
//       ? theme.typography.fontWeightMedium
//       : theme.typography.fontWeightRegular,
//   };
// }
interface Props {
  id: number | undefined
  onClose?: (event:boolean) => void
}

export default function EditUser({id, onClose}:Props) {
  // console.log(id)
  const { formData, onChange, onSubmit, setFormData } = useEditUser({id, onClose});
  // const theme = useTheme()
  // console.log(id)
  const { data: niveles } = useGetNivelesQuery();
  const {data: generos } = useGetGeneroQuery()
  const { data: roles } = useGetRolesQuery();
  const {data: permissions} = useGetPermissionQuery()
  // console.log(permissions);
  useEffect(() => {
    // console.log(roles);
  });
  //Mas adelante la edad se debe setear de manera automatica con la fecha de nacimiento
  return (
    <div className="max-w-[900px] mx-auto mt-10 p-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row w-full gap-10">
          <TextField
            name="email"
            label="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={onChange}
            className="mb-4"
          />

          <TextField
            name="nombre"
            label="Nombre"
            type="text"
            variant="outlined"
            fullWidth
            value={formData.profile.nombre}
            onChange={onChange}
            className="mb-4"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-10">
          <TextField
            name="apellidoP"
            label="Apellido Paterno"
            type="text"
            variant="outlined"
            fullWidth
            value={formData.profile.apellidoP}
            onChange={onChange}
            className="mb-4"
          />

          <TextField
            name="apellidoM"
            label="Apellido Materno"
            variant="outlined"
            type="text"
            fullWidth
            value={formData.profile.apellidoM}
            onChange={onChange}
            className="mb-4"
          />
        </div>
        {/* <TextField
          name="edad"
          label="Edad"
          variant="outlined"
          type="text"
          fullWidth
          value={formData.profile.edad}
          onChange={onChange}
          className="mb-4"
        />
        <TextField
          name="apellidoM"
          label="Apellido Materno"
          variant="outlined"
          fullWidth
          value={formData.apellidoM}
          onChange={onChange}
          className="mb-4"
        /> */}

        {/* <TextField
          name="fechaNacimiento"
          label="Fecha de nacimiento"
          variant="outlined"
          fullWidth
          type="date"
          value={formData.fechaNacimiento}
          onChange={onChange}
          className="mb-4"
        /> */}
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              width: "100%",
            }}
            name="fechaNacimiento"
            value={convertedDate(formData.fechaNacimiento)}
          />
        </LocalizationProvider> */}
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.profile.fechaNacimiento}
          onChange={onChange}
          className="border b-4 border-gray-400 rounded-md w-full p-2 focus:border-gray-900 focus:outline-hidden"
        />
        <TextField
          name="edad"
          label="Edad"
          variant="outlined"
          type="number"
          fullWidth
          value={formData.profile.edad}
          onChange={onChange}
          className="mb-4"
        />
        <FormControl fullWidth className="mb-4">
          <InputLabel>Niveles educativos</InputLabel>
          <Select
            name="nivEdu"
            value={formData.profile.nivEdu}
            label="Nivel educativo"
            onChange={onChange}
          >
            <MenuItem value="0">Seleccionar</MenuItem>
            {niveles?.map((nivel) => {
              return <MenuItem value={nivel.id ?? 0}>{nivel.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth className="mb-4">
          <InputLabel>Genero</InputLabel>
          <Select
            name="genero"
            value={formData.profile.genero}
            label="Nivel educativo"
            onChange={onChange}
          >
            <MenuItem value="0">Seleccionar</MenuItem>
            {generos?.map((gen) => {
              return <MenuItem value={gen.id ?? 0}>{gen.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <TextField
          name="telefono"
          label="Telefono celular"
          variant="outlined"
          type="text"
          fullWidth
          value={formData.profile.telefono}
          onChange={onChange}
          className="mb-4"
        />
        <div className="bg-white border rounded-md p-4">
          <h2 className="text-sm font-medium mb-2">Seleccionar roles</h2>
          <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto">
            {roles?.map((role) => (
              <label
                key={role.id}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
              >
                <input
                  name="role"
                  type="checkbox"
                  value={role.id}
                  checked={formData.roleID?.some((r) => r.id === role.id)}
                  onChange={onChange}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{role.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-white border rounded-md p-4">
          <h2 className="text-sm font-medium mb-2">Seleccionar Permisos</h2>
          <div className="flex flex-col space-y-2 max-h-48 overflow-y-auto">
            {permissions?.map((p) => (
              <label
                key={p.id}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
              >
                <input
                  name="role"
                  type="checkbox"
                  value={p.id}
                  checked={formData.permission?.some((r) => r.id === p.id)}
                  onChange={onChange}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{p.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="w-[20%]">
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-800 transition duration-300"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
