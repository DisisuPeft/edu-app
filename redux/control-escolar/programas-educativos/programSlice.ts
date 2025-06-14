import { createSlice } from "@reduxjs/toolkit";
// import { ProgramaEducativoCatalog } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProgramaEducativoCatalogResponse } from "./types";

interface ProgramState {
  programaCatalog: ProgramaEducativoCatalogResponse;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  programaCatalog: null,
  isLoading: true,
} as ProgramState;

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    clearProgram: (state) => {
      state.programaCatalog = null;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setProgramCatalog: (
      state,
      action: PayloadAction<ProgramaEducativoCatalogResponse>
    ) => {
      state.programaCatalog = action.payload;
    },
  },
});

export const {
  clearProgram,
  setError,
  clearError,
  finishInitialLoad,
  setProgramCatalog,
} = programSlice.actions;

export default programSlice.reducer;
