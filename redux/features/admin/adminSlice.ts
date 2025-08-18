import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface adminState {
  q: string | null;
  page: number | null;
  isLoading: boolean;
}

const initialState = {
  q: null,
  page: 1,
  isLoading: true,
} as adminState;

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setQ: (state, action: PayloadAction<string>) => {
      state.q = action.payload;
    },
    clearQ: (state) => {
      state.q = null;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { setQ, clearQ, setPage, resetPage, finishInitialLoad } =
  adminSlice.actions;
export default adminSlice.reducer;
