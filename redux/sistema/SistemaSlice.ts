import { createSlice } from "@reduxjs/toolkit";
import { Modulos} from "../interface/sistema/modulos";
import { TabsModulos } from "../interface/sistema/tabs";

interface SistemaState {
  menus: Modulos | null;
  tabs: TabsModulos | null;
  isLoading: boolean;
}

const initialState = {
  menus: null,
  tabs: null,
  isLoading: true,
} as SistemaState;

const SistemaSlice = createSlice({
  name: "sistema",
  initialState,
  reducers: {
    clearMenu: (state) => {
      state.menus = null;
    },
    finishInitialLoadCatalogos: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearMenu, finishInitialLoadCatalogos } = SistemaSlice.actions;
export default SistemaSlice.reducer;
