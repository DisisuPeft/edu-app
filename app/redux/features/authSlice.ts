import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean,
    isLoading: boolean
}

const initialState = {
    isAuth: false,
    isLoading: true
} as AuthState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true;
        },
        logout: state => {
            state.isAuth = false;
        },
        finishInitialLoad: state => {
            state.isLoading = false;
        }
    }
});

export const {setAuth, logout, finishInitialLoad} = authSlice.actions
export default authSlice.reducer