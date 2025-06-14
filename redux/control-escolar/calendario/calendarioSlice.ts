import { createSlice } from "@reduxjs/toolkit";
// import { ProgramaEducativoCatalog } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
import { CiclosResponse } from "./types";

interface calendarioState {
  ciclos: CiclosResponse;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState = {
  ciclos: null,
  isLoading: true,
  errorMessage: null,
} as calendarioState;

const calendarioSlice = createSlice({
  name: "calendario",
  initialState,
  reducers: {
    clearCiclo: (state) => {
      state.ciclos = null;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearError: (state) => {
      state.errorMessage = null;
    },
    setCiclo: (state, action: PayloadAction<CiclosResponse>) => {
      state.ciclos = action.payload;
    },
  },
});

export const { clearCiclo, setCiclo, setError, clearError, finishInitialLoad } =
  calendarioSlice.actions;

export default calendarioSlice.reducer;
