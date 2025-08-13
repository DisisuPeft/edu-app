import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  user: User | null;
}

const initialState = {
  isAuth: false,
  isLoading: true,
  user: null,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setUser: (state, payload: PayloadAction<User>) => {
      state.user = payload.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setAuth, logout, finishInitialLoad, setUser, clearUser } =
  authSlice.actions;
export default authSlice.reducer;
