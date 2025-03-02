import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
// import { DataApiSlice } from "./services/MapapiSlice";
import authReducer from "@/app/redux/features/authSlice"
import taskReducer from "@/app/redux/task/taskSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        taskstore: taskReducer
        
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];