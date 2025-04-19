import { createSlice } from "@reduxjs/toolkit";
import { Modulos} from "../interface/sistema/modulos";
import { TabsModulos } from "../interface/sistema/tabs";
import { NivelEducativo } from "../interface/catalogos/nivel_educativo";
import { Genero } from "../interface/catalogos/genero";
import { Permission, Role } from "../interface/authentication/Users";

interface CatState {
  niveles_educativos: NivelEducativo | null;
  generos: Genero | null;
  roles: Role | null;
  permissions: Permission | null
  isLoading: boolean;
}

const initialState = {
  niveles_educativos: null,
  generos: null,
  roles: null,
  permissions: null,
  isLoading: true,
} as CatState;

const CatSlice = createSlice({
  name: "catalagos",
  initialState,
  reducers: {
    clearNiveles: (state) => {
      state.niveles_educativos = null;
    },
    clearGeneros: (state) => {
      state.generos = null;
    },
    clearRoles: (state) => {
      state.roles = null;
    },
    clearPermission: (state) => {
      state.permissions = null;
    },
    finishInitialLoadCatalogos: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearNiveles, finishInitialLoadCatalogos } = CatSlice.actions;
export default CatSlice.reducer;
