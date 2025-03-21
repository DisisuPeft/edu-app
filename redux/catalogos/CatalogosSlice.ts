import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../interface/CatalogosInterfaces";

interface CatalogosState {
  menu: MenuItem | null;
  isLoading: boolean;
}

const initialState = {
  menu: null,
  isLoading: true,
} as CatalogosState;

const catalogoSlce = createSlice({
  name: "catalogos",
  initialState,
  reducers: {
    clearMenu: (state) => {
      state.menu = null;
    },
    finishInitialLoadCatalogos: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearMenu, finishInitialLoadCatalogos } = catalogoSlce.actions;
export default catalogoSlce.reducer;
