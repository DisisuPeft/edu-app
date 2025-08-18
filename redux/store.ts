import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
// import { DataApiSlice } from "./services/MapapiSlice";
import authReducer from "@/redux/features/authSlice";
import SistemaReducer from "@/redux/sistema/SistemaSlice";
import alertReducer from "@/redux/features/alert/alertSlice";
import adminReducer from "@/redux/features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sistema: SistemaReducer,
    alert: alertReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
