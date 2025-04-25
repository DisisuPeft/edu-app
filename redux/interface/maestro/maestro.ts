import { User } from "../authentication/Users"
import { Especialidades } from "../catalogos/catalagos";

export interface Maestro {
    id: number | null | undefined;
    user: User | null | undefined;
    rfc: string | null | undefined;
    especialidad: Especialidades | null | undefined;
    fecha_ingreso: string | null | undefined;
    numero_empleado: string | null | undefined;
    telefono: string | null | undefined;
    direccion: string | null | undefined;
    activo: number | null | undefined;
    fecha_creacion: string | null | undefined;
    fecha_actualizacion: string | null | undefined;
}