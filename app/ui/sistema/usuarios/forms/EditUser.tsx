import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useEditUser } from "@/hooks";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useGetNivelesQuery } from "@/redux/sistema/SistemaApiSlice";
import { useEffect } from "react";

export default function EditUser({ id }: { id: number }) {
  const { formData, onChange } = useEditUser(id);
  const { data: niveles } = useGetNivelesQuery();
  // console.log(niveles);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log("Guardar", formData);
  };
  const convertedDate = (date: string) => {
    return date ? dayjs(date) : null;
  };
  useEffect(() => {
    // console.log(id);
  });
  //Mas adelante la edad se debe setear de manera automatica con la fecha de nacimiento
  return (
    <div className="w-[400px] md:w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
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
            value={formData.nombre}
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
            value={formData.apellidoP}
            onChange={onChange}
            className="mb-4"
          />

          <TextField
            name="apellidoM"
            label="Apellido Materno"
            variant="outlined"
            type="text"
            fullWidth
            value={formData.apellidoM}
            onChange={onChange}
            className="mb-4"
          />
        </div>
        {/* <TextField
          name="apellidoM"
          label="Apellido Materno"
          variant="outlined"
          type="text"
          fullWidth
          value={formData.apellidoM}
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
          value={formData.fechaNacimiento}
          onChange={onChange}
          className="border b-4 border-gray-400 rounded-md w-full p-2 focus:border-gray-900 focus:outline-hidden"
        />

        <FormControl fullWidth className="mb-4">
          <InputLabel>Niveles educativos</InputLabel>
          <Select
            name="nivEdu"
            value={formData.nivEdu}
            label="Nivel educativo"
            onChange={onChange}
          >
            <MenuItem value="0">Seleccionar</MenuItem>
            {niveles?.map((nivel) => {
              return <MenuItem value={nivel.id}>{nivel.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        {/* <FormControl fullWidth className="mb-4">
          <InputLabel>País</InputLabel>
          <Select
            name="pais"
            value={formData.pais}
            label="País"
            onChange={handleChange}
          >
            <MenuItem value="mexico">México</MenuItem>
            <MenuItem value="españa">España</MenuItem>
            <MenuItem value="argentina">Argentina</MenuItem>
            <MenuItem value="colombia">Colombia</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth className="mb-4">
          <InputLabel>Ciudad</InputLabel>
          <Select
            name="ciudad"
            value={formData.ciudad}
            label="Ciudad"
            onChange={handleChange}
          >
            <MenuItem value="cdmx">Ciudad de México</MenuItem>
            <MenuItem value="madrid">Madrid</MenuItem>
            <MenuItem value="barcelona">Barcelona</MenuItem>
            <MenuItem value="bogota">Bogotá</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth className="mb-4">
          <InputLabel>Género</InputLabel>
          <Select
            name="genero"
            value={formData.genero}
            label="Género"
            onChange={handleChange}
          >
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="femenino">Femenino</MenuItem>
            <MenuItem value="otro">Otro</MenuItem>
          </Select>
        </FormControl> */}
        <div className="w-[20%]">
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
