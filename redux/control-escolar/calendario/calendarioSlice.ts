import { createSlice } from "@reduxjs/toolkit";
// import { ProgramaEducativoCatalog } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  CicloResponse,
  CiclosResponse,
  CiclosForQueryType,
  Ciclos,
} from "./types";

interface calendarioState {
  ciclos: CiclosResponse | null;
  ciclo: Ciclos | null;
  ciclosForQuery: CiclosForQueryType | null;
  isLoading: boolean;
  ciclo_id: number | null;
  errorMessage: string | null;
}

const initialState = {
  ciclos: null,
  ciclo: null,
  ciclo_id: null,
  ciclosForQuery: null,
  isLoading: true,
  errorMessage: null,
} as calendarioState;

const calendarioSlice = createSlice({
  name: "calendario",
  initialState,
  reducers: {
    clearCiclos: (state) => {
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
    setCiclos: (state, action: PayloadAction<CiclosResponse>) => {
      state.ciclos = action.payload;
    },
    setCiclo: (state, action: PayloadAction<Ciclos>) => {
      state.ciclo = action.payload;
    },
    setCicloId: (state, action: PayloadAction<number>) => {
      state.ciclo_id = action.payload;
    },
    setCiclosForQuery: (state, action: PayloadAction<CiclosForQueryType>) => {
      state.ciclosForQuery = action.payload;
    },
  },
});

export const {
  clearCiclos,
  setCiclos,
  setError,
  clearError,
  finishInitialLoad,
  setCicloId,
  setCiclo,
  setCiclosForQuery,
} = calendarioSlice.actions;

export default calendarioSlice.reducer;
