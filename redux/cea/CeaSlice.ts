import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../interface/CeaInterfaces";

interface CeaState {
  menu: MenuItem | null;
  isLoading: boolean;
}

const initialState = {
  menu: null,
  isLoading: true,
} as CeaState;

const CeaSlice = createSlice({
  name: "cea",
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

export const { clearMenu, finishInitialLoadCatalogos } = CeaSlice.actions;
export default CeaSlice.reducer;
