export type Permission = {
  id: number;
  name: string;
};

export type Role = {
  id: number;
  name: string;
  permission: Permission[];
};

export type Genero = {
  id: number;
  name: string;
};
export type nivEdu = {
  id: number;
  name: string;
};
export type Profile = {
  nombre: string;
  apellidoP: string;
  apellidoM: string | null;
  edad: number | null;
  fechaNacimiento: string | null;
  genero: {
    id: number;
    name: string;
  }; // Puedes definir un tipo específico si conoces la estructura
  nivEdu: {
    id: number;
    name: string;
  }; // Igual aquí
  telefono: string | null;
  user: number;
};

export type User = {
  id: number;
  email: string;
  profile: Profile;
  roleID: Role[];
  permission: Permission[];
};
